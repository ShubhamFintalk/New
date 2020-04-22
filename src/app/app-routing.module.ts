import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
//import { EmpComponent } from './emp/emp.component';
import { AddEmpComponent} from './add-emp/add-emp.component';


const routes: Routes = [
  { path : '', component: LoginComponent},
  { path : 'signup', component: SignComponent},
  { path: 'addemp', component: AddEmpComponent}
];

@NgModule({
  declarations: [],
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
