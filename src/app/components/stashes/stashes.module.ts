import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StashesComponent} from './stashes.component';
import {StashesRoutingModule} from './stashes-routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {StashesService} from './stashes.service';
import {MatIconModule} from '@angular/material/icon';
import { StashItemComponent } from './stash-item/stash-item.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    StashesComponent,
    StashItemComponent
  ],
  imports: [
    CommonModule,
    StashesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [StashesService]
})
export class StashesModule { }
