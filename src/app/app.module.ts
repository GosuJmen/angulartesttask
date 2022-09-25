import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './components/transactions/transaction.component';
import { FilterTipePipe } from './pipes/filter-tipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    FilterTipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
