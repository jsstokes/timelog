import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountListComponent } from './account-list/account-list.component';
import { TimeFormComponent } from './time-form/time-form.component';
import { OppListComponent } from './opp-list/opp-list.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AccountViewComponent } from './account-view/account-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountListComponent,
    TimeFormComponent,
    OppListComponent,
    MainViewComponent,
    AccountViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
