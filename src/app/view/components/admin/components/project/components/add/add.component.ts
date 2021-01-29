import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProjectService } from '../../../project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public addProjectForm: FormGroup;
  public success: string;
  public fail: string;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.addProjectForm = this.formBuilder.group({
      title: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ]],
      description: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(250)
      ]],
      company_name: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100)
      ]],
      duration: [null, [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],
      cost: [null, [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]]
    });
  }

  get title() { return this.addProjectForm.get('title'); }
  get description() { return this.addProjectForm.get('description'); }
  get company_name() { return this.addProjectForm.get('company_name'); }
  get duration() { return this.addProjectForm.get('duration'); }
  get cost() { return this.addProjectForm.get('cost'); }

  onSubmit() {
    this.success = null;
    this.fail = null;

    // Mark all fields as touched to check if we have missed any field
    this.addProjectForm.markAllAsTouched();
    if (this.addProjectForm.valid) {
      this.projectService.addProject(this.addProjectForm.value).subscribe(response => {
        if (response['data']) {
          this.router.navigate(['/admin/project/list']);
        }
      }, error => {
        throw error;
      })
    }
  }

  getList() {
    this.router.navigate(['/admin/project/list']);
  }

}
