import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  server_address: string = 'http://localhost:3000';
 
  constructor(private http:HttpClient) { }

 register(data:any){
    return this.http.post<any>(`${this.server_address}/submit/register`,{data:data})
   }


list(){
  return this.http.get(`${this.server_address}/submit/list`)
}

getEmployee(id:any){
  return this.http.get(`${this.server_address}/submit/getemployee/${id}`)
}

editEmployee(item:any){
  return this.http.put(`${this.server_address}/submit/editemployee`,item) .subscribe(data =>{console.log(data)})
}

deletEmployee(id:any){
  return this.http.delete(`${this.server_address}/submit/deleteemployee/${id}`)
}
}
