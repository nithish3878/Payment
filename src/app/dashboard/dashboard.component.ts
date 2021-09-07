import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customer:any
  constructor(private router:Router,private http:HttpClient) { }
  //
  ngOnInit(): void {
    this.http.get('http://localhost:8080/customer/123456')
    .subscribe((result: any) => {
      this.customer = result
    },err=>{
      console.log(err);
    })
} 
      

  
  onRecent()
  {

  }
  
  handleRegister()
  {

  }

}
