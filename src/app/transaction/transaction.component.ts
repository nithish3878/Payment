import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction: any;
  messagetypes:any;
  flag:any=true;
  customertype:any;
  transfertypes:any;
  constructor(private service:LoginserviceService,private http:HttpClient) { 
    // this.transaction={
    //   // transactionid:"",
    //   // customerid:this.service.getuserid(),
    //   // senderbic: this.service.Bank.bic,
    //   // receiverid:"",
    //   // receivername:"",
    //   // receiverbic:"" , 
    //   // receiverbankname:"", 
    //   // transfertypecode:"",
    //   // currencyamount:0,
    //   // transferfees:0,
    //   // messagetype:""
      
    // }
    this.transaction={
      "transactionid": 0,
      "customer": this.service.customer,
      
      "currency": {
        "currencycode": "INR",
        "currencyname": "Indian Rupees",
        "conversionrate": 1
      },
      "senderBIC": this.service.Bank,
      "receiverBIC": {
        "bankname": "",
        "bic": ""
      },
      "receiveraccountholdernumber": "",
      "receiveraccountholdername": "",
      "transfertypecode": {
        "transfertypecode": "",
        "transfertypedescription": ""
      },
      "message": {
        "messagecode": "",
        "instruction": ""
      },
      "currencyamount": 1,
      "inramount": 0,
      "transferfees": 0,
      "transferdate": ""
    }
    
        this.http.get("http://localhost:8080/message")
        .subscribe((result:any)=>{
          this.messagetypes = result.map((item: any) => {
          return { name: item.instruction, code: item.messagecode };
        });

         console.log(result)
        },
        err=>{
          console.log(err);
          
        })
    
      }
  
  


  ngOnInit(): void {
    this.customertype=this.service.customertype;
    
  }
  handleRegister()
  {
      this.transaction.transferfees=this.transaction.inramount*0.0025
      //this.transaction.message.instruction=this.messagetypes.
      if(this.customertype=='B'){
      this.transaction.transfertypecode.transfertypedescription="Bank Transfer";
      this.transaction.transfertypecode.transfertypecode="B";
      }
      else{
      this.transaction.transfertypecode.transfertypedescription="Customer Transfer";
      this.transaction.transfertypecode.transfertypecode="C"

  }
}

  fetch()
  {
    let num="";
    num=this.transaction.receiveraccountholdernumber;
    
    
    this.http.get("http://localhost:8080/customer/"+num)
    .subscribe((result:any)=>{
      this.transaction.receiverBIC = result.bic;
      this.transaction.receiveraccountholdername = result.accountholdername;
      this.transaction.receiverbankname=result.bic.bankname;
     console.log(result);
     
     this.flag=true
    },
    err=>{
      console.log(err);
      this.transaction.receiverBIC.bic = "";
      this.transaction.receiveraccountholdername = "";
      this.transaction.receiverBIC.bankname="";
      this.flag=false
      
    })
    console.log(this.transaction.receiveraccountholdernumber);



  }
 

}
