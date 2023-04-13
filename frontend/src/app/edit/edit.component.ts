import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


interface CountryCode {
  name: string;
  dialCode: string;
  code: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  countryCodes: CountryCode[] = [
    { name: 'United States', dialCode: '+1', code: 'US' },
    { name: 'Canada', dialCode: '+1', code: 'CA' },
    { name: 'Mexico', dialCode: '+52', code: 'MX' },
    {name:'India',dialCode:'+91',code:'IND'}
    // add more country codes as needed
  ];

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.userService.getEmployee(productId).subscribe((data)=>{
      this.user=JSON.parse(JSON.stringify(data));
  })
  }

  user={
    username:'',
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
  edit(){
    this.userService.editEmployee(this.user);   
    alert("Success");
    this.router.navigate(['list']);
  }



}
