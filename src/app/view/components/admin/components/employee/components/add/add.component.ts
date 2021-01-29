import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public addEmployeeForm: FormGroup;
  public success: string;
  public fail: string;
  public techs = [];

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
  ) { }


  ngOnInit(): void {
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
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ]]
    });
  }

  get name() { return this.addEmployeeForm.get('name'); }
  get email() { return this.addEmployeeForm.get('email'); }
  get contact() { return this.addEmployeeForm.get('contact'); }
  get technologies() { return this.addEmployeeForm.get('technologies'); }
  get password() { return this.addEmployeeForm.get('password'); }

  onSubmit() {
    this.success = null;
    this.fail = null;

    // Mark all fields as touched to check if we have missed any field
    this.addEmployeeForm.markAllAsTouched();
    if (this.addEmployeeForm.valid) {
      this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(response => {
        if (response && response['data']) {
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
