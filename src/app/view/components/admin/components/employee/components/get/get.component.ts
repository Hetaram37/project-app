import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {

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
    this.getProject();
  }

  getProject() {
    this.employeeService.getEmployee(this.employeeId).subscribe(response => {
      this.employeeDetail = response['data'];
    }, error => {
      throw error;
    })
  }

  getList() {
    this.router.navigate(['/admin/employee/list']);
  }
}
