import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employeeList = [];
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  updateEmployee(id) {
    this.router.navigate(['/admin/employee/update', id]);
  }

  removeemployee(id) {
    this.router.navigate(['/admin/employee/delete', id]);
  }

  seeEmployee(id) {
    this.router.navigate(['/admin/employee/get', id]);
  }

  getEmployeeList() {
    this.employeeService.employeeList().subscribe(response => {
      console.log('response: ', response);
      this.employeeList = response['data'];
    }, error => {
      throw error;
    });
  }

  addNewEmployee() {
    this.router.navigate(['/admin/employee/add']);
  }


}
