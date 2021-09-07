import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction: any;
  transfertypes: any;
  constructor() { 
    this.transaction={
      customerid:"1",
      senderbic: "hdfc",
      recieverid:"123",
      receiverbic:"sbi" ,  
      transfertypecode:"",
      currencyamount:0,
      transferfees:0
    }
    this.transfertypes = [{ name: "Bank to bank", code: "B2B" },
        { name: 'Customer to customer', code: "C2C" }];
  }

  ngOnInit(): void {
  }
  handleRegister()
  {

  }
 

}
