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
  customertype:any='I';
  transfertypes:any;
  constructor(private service:LoginserviceService,private http:HttpClient) { 
    this.transaction={
      customerid:this.service.getuserid(),
      senderbic: this.service.Bank.bic,
      receiverid:"",
      receivername:"",
      receiverbic:"" , 
      receiverbankname:"", 
      transfertypecode:"",
      currencyamount:0,
      transferfees:0,
      messagetype:""
      
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

  }
  fetch()
  {
    let num="";
    num=this.transaction.receiverid;
    
    
    this.http.get("http://localhost:8080/customer/"+num)
    .subscribe((result:any)=>{
      this.transaction.receiverbic = result.bic.bic;
      this.transaction.receivername = result.accountholdername;
      this.transaction.receiverbankname=result.bic.bankName;
     console.log(result);
     
     this.flag=true
    },
    err=>{
      console.log(err);
      this.transaction.receiverbic = "";
      this.transaction.receivername = "";
      this.transaction.receiverbankname="";
      this.flag=false
      
    })
    console.log(this.transaction.receiverid);



  }
 

}
