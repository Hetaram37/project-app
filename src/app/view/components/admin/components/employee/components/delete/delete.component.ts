import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  employeeId: any;
  employeeDetail: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { 
    this.employeeId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getEmployee(this.employeeId).subscribe(response => {
      this.employeeDetail = response['data'];
    }, error => {
      throw error;
    })
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employeeId).subscribe(response => {
      if (response['data']) {
        this.getList();
      }
    }, error => {
      throw error;
    })
  }

  getList() {
    this.router.navigate(['/admin/employee/list']);
  }

}
