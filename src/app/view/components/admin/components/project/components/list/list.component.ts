import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  projectList = [];
  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getProjectList();
  }

  updateProject(id) {
    this.router.navigate(['/admin/project/update', id]);
  }

  removeproject(id) {
    this.router.navigate(['/admin/project/delete', id]);
  }

  seeProject(id) {
    this.router.navigate(['/admin/project/get', id]);
  }

  getProjectList() {
    this.projectService.projectList().subscribe(response => {
      console.log('response: ', response);
      this.projectList = response['data'];
    }, error => {
      throw error;
    });
  }

  addNewProject() {
    this.router.navigate(['/admin/project/add']);
  }

}
