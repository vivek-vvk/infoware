import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
interface CountryCode {
  name: string;
  dialCode: string;
  code: string;
}


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

 
  countryCodes: CountryCode[] = [
    { name: 'United States', dialCode: '+1', code: 'US' },
    { name: 'Canada', dialCode: '+1', code: 'CA' },
    { name: 'Mexico', dialCode: '+52', code: 'MX' },
    {name:'India',dialCode:'+91',code:'IND'}
    // add more country codes as needed
  ];

  user={
    username:"",
    jobtype:'',
     ccode:[],
    phone:'',
    email:'',
    address:'',
    city:'',
    state:'',
    pcontact:'',
    cpphone:[],
    pphone:'',
    prelation:'',
    scontact:'',
    spphone:[],
    sphone:'',
    srelation:''
  }


  constructor(private userService:UserService,private route :Router) { }

  ngOnInit(): void {
  }

  register(){
this.userService.register(this.user).subscribe((res)=>{

  if(res.status){
    alert("Registration success");
  
    this.route.navigate(['list']);
   }else{
    alert("Email already taken");
    window.location.reload();
   };
});
  }


}
