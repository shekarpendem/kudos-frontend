import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { Emp } from '../emp';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Kudo } from '../kudo';

@Component({
  selector: 'app-add-kudos',
  templateUrl: './add-kudos.component.html',
  styleUrls: ['./add-kudos.component.css']
})
export class AddKudosComponent implements OnInit {
  employees: Observable<Employee[]>;
  employeeList: Emp[] = [];
  
  kudo: Kudo = new Kudo();
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private employeeService: EmployeeService, private http: HttpClient) { }

  ngOnInit() {
    console.log('in init');
    this.employeeService.getEmployeesList().subscribe(
      data => {
        this.employeeList = data;
      },
      error => console.log("error : " + error)
    );
    // this.loadEmployees();
    this.kudo.kudoFrom = "Kavan Dyer"
    // console.log(this.employeeList)
  }

  save() {
    console.log(this.kudo)
    // this.kudo.kudoFrom = "Test User"
    this.employeeService
    .addKudos(this.kudo).subscribe(data => {
      console.log(data)
      this.kudo = new Kudo();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
