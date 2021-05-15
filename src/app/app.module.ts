import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreditComponent } from './components/credit/credit.component';
import { CreditListComponent } from './components/credit-list/credit-list.component';
import { ClientAnalyzersComponent } from './components/client-analyzers/client-analyzers.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditComponent,
    CreditListComponent,
    ClientAnalyzersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
