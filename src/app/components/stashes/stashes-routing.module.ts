import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StashesComponent} from './stashes.component';
import {StashItemComponent} from './stash-item/stash-item.component';


const routes: Routes = [
  {
    path: '',
    component: StashesComponent
  },
  {
    path: 'items',
    component: StashItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StashesRoutingModule { }
