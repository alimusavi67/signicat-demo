import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {StashesService} from './stashes.service';
import {Router} from '@angular/router';
import {Stash} from '../../models/Stash.model';

@Component({
  selector: 'app-stashes',
  styleUrls: ['stashes.component.scss'],
  templateUrl: 'stashes.component.html',
})
export class StashesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'league', 'accountName', 'actions'];
  dataSource: MatTableDataSource<Stash>;
  stashList: Stash[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoading: boolean = true;

  constructor(private stashService: StashesService, private router: Router) {
   this.getAllStash();
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllStash() {
    this.isLoading = true;
    this.stashService.getAllStashes()
      .subscribe(res => {
        this.isLoading = false;
        this.stashList = res.stashes;
        this.dataSource = new MatTableDataSource(this.stashList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        alert('error in getting data, please try again');
        this.isLoading = false;
      });
  }

  goToStashItems(stash): void {
    this.router.navigate(['/items'], {state: {data: stash}});
  }
}
