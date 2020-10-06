import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePage } from './change.page';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {
    path: '',
    component: ChangePage,
    children:[

      {path: 'page1',component:Page1Component},
      {path: 'page2',component:Page2Component},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePageRoutingModule {}
