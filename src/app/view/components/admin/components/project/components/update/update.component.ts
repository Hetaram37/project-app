import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProjectService } from '../../../project/project.service';
import { Router } from '@angular/router';
import { Project } from '../../project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public addProjectForm: FormGroup;
  public projectId: String;
  public success: string;
  public fail: string;
  public projectDetail: any;
  public project: Project;
  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { this.projectId = this.route.snapshot.paramMap.get('id'); }

  ngOnInit(): void {
    this.getProject();
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

  getProject() {
    this.projectService.getProject(this.projectId).subscribe(response => {
      this.projectDetail = response['data'];
      this.assignValues();
    }, error => {
      throw error;
    })
  }

  assignValues() {
    this.project = {
      title: this.projectDetail.title,
      description: this.projectDetail.description,
      duration: this.projectDetail.duration,
      cost: this.projectDetail.cost,
      company_name: this.projectDetail.company_name,
      employees: this.projectDetail.employee
    }
  }

  onSubmit() {
    this.success = null;
    this.fail = null;

    // Mark all fields as touched to check if we have missed any field
    this.addProjectForm.markAllAsTouched();
    if (this.addProjectForm.valid) {
      this.projectService.updateProject(this.addProjectForm.value, this.projectId).subscribe(response => {
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
