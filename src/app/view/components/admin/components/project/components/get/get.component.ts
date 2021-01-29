import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {

  projectId: any;
  projectDetail: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { 
    this.projectId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    this.projectService.getProject(this.projectId).subscribe(response => {
      this.projectDetail = response['data'];
    }, error => {
      throw error;
    })
  }

  getList() {
    this.router.navigate(['/admin/project/list']);
  }

}
