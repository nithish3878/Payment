import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent implements OnInit{
  
  //navitems: Array<any>
  userid:any
   constructor(private service:LoginserviceService) {
    
  //   this.navitems = [{
  //     text: "Home",
  //     link: "home"
  //   },
  //   {
  //     text: "Login",
  //     link: "login"
  //   },
  //   {
  //   text:"Transaction",
  //   link:"transaction"
  //   },
  //   {
  //     text:"History",
  //     link:"history"
  //     },
    
  //   {
  //     text:"Dashboard",
  //     link:"dashboard"
  //     }
  // ]
  //};



}
ngOnInit()
{
  this.userid=this.service.userid;
  console.log("userid"+this.userid)
}
}
