import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Stash} from '../../../models/Stash.model';

export interface Item {
  id: string;
  name: string;
  typeLine: string;
}


@Component({
  selector: 'app-stash-item',
  templateUrl: './stash-item.component.html',
  styleUrls: ['./stash-item.component.scss']
})
export class StashItemComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'typeLine'];
  dataSource: MatTableDataSource<Item>;
  stash: Stash = {
    items: [],
    id: null,
    league: null,
    accountName: null
  };
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit(): void {
    if (history.state && history.state.data) {
      this.stash = history.state.data;
      localStorage.setItem('stash-item', JSON.stringify(history.state.data));
    } else {
      if (localStorage.getItem('stash-item')) {
        this.stash = JSON.parse(localStorage.getItem('stash-item'));
      }
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.stash.items);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
