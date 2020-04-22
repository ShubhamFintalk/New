import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../models/emp';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
emp: Emp[];


  constructor(public empService : EmpService) { }

  ngOnInit() {

  this.empService.getEmp().subscribe(emp => {
  this.emp = emp;
  });
  }

}
