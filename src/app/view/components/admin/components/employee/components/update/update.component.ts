import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../../employee/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public addEmployeeForm: FormGroup;
  public employeeId: String;
  public success: string;
  public fail: string;
  public employeeDetail: any;
  public employee: Employee;
  public techs = [];
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { this.employeeId = this.route.snapshot.paramMap.get('id'); }


  ngOnInit(): void {
    this.getEmployee();
    this.addEmployeeForm = this.formBuilder.group({
      name: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z \-\']+')
      ]],
      contact: [null, [
        Validators.required,
        Validators.pattern('^[0-9]{10}')
      ]],
      email: [null, [
        Validators.required,
        Validators.maxLength(100),
        Validators.email
      ]],
      technologies: [null, [
        Validators.required
      ]]
    });
  }

  get name() { return this.addEmployeeForm.get('name'); }
  get email() { return this.addEmployeeForm.get('email'); }
  get contact() { return this.addEmployeeForm.get('contact'); }
  get technologies() { return this.addEmployeeForm.get('technologies'); }

  getEmployee() {
    this.employeeService.getEmployee(this.employeeId).subscribe(response => {
      this.employeeDetail = response['data'];
      this.assignValues();
    }, error => {
      throw error;
    })
  }

  assignValues() {
    this.employee = {
      name: this.employeeDetail.name,
      email: this.employeeDetail.email,
      contact: this.employeeDetail.contact,
      technologies: this.employeeDetail.technologies
    }
    this.techs = this.employeeDetail.technologies
  }

  onSubmit() {
    this.success = null;
    this.fail = null;

    // Mark all fields as touched to check if we have missed any field
    this.addEmployeeForm.markAllAsTouched();
    if (this.addEmployeeForm.valid) {
      this.employeeService.updateEmployee(this.addEmployeeForm.value, this.employeeId).subscribe(response => {
        if (response['data']) {
          this.router.navigate(['/admin/employee/list']);
        }
      }, error => {
        throw error;
      })
    }
  }

  getList() {
    this.router.navigate(['/admin/employee/list']);
  }
}
