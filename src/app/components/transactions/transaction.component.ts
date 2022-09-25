import { Component, OnInit } from "@angular/core";
import { TransactionInt } from '../../models/transaction'
import transactions from "../../data/transactions.json";


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html'
})

export class TransactionComponent implements OnInit {
  searchKey: string = "";
  trData: TransactionInt[];

  constructor() {
    this.trData = transactions;
  }

  ngOnInit() {

  }



}
