import { Component, OnInit } from '@angular/core';
//import { Emp } from '../models/emp';
//import { EmpService } from '../emp.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
//emp: Emp = {
//firstName:'',
//lastName:'',
//empid:'',
//mobile:'',
//address:'',
//city:'',
//dob:''

  constructor() { }

  ngOnInit(){
  }


  onSubmit(){
    //if(this.emp.empid !='' && this.emp.mobile !=''){
    //this.empService.addEmp(this.emp);
    }
}

