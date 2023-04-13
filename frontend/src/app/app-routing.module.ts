import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:EmployeeformComponent},
  {path:'list',component:EmplistComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
