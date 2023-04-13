import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.list().subscribe((data)=>{
      
      this.data=JSON.parse(JSON.stringify(data))
  })
  }

 

p:any;
data:any=[
  {
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
]



editProduct(d:any){
  localStorage.setItem("editProductId", d._id.toString());
  this.router.navigate(['edit']);

}

deleteEmployee(d:any){
  this.userService.deletEmployee(d._id)
  .subscribe((value) => {
    this.data = this.data.filter((p:any) => p !== d);
  })
}

}
