import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { AccountViewComponent } from './account-view/account-view.component';


const routes: Routes = [
  { path: "", component: MainViewComponent },
  { path: "accounts", component: AccountViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
