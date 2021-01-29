import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    public httpClient: HttpClient
  ) { }

  linkGeneration(param1, param2) {
    const host = window.location.hostname;
    return param1.protocol + '://' + host + ':' + param1.port + param1.apiPrefix + param2;
  }

  projectList() {
    const url = this.linkGeneration(environment.projectMgmtService, environment.projectMgmtService.projectList);
    return this.httpClient.get(url, { responseType: 'json'});
  }

  getProject(id) {
    const url = this.linkGeneration(environment.projectMgmtService, environment.projectMgmtService.getProject).replace(':id', id);
    return this.httpClient.get(url, { responseType: 'json'});
  }

  addProject(body) {
    const url = this.linkGeneration(environment.projectMgmtService, environment.projectMgmtService.addNewProject);
    return this.httpClient.post(url, body, { responseType: 'json'});
  }

  deleteProject(id) {
    const url = this.linkGeneration(environment.projectMgmtService, environment.projectMgmtService.removeProject).replace(':id', id);
    return this.httpClient.delete(url, { responseType: 'json'});
  }

  updateProject(body, id) {
    const url = this.linkGeneration(environment.projectMgmtService, environment.projectMgmtService.updateProject).replace(':id', id);
    return this.httpClient.put(url, body, { responseType: 'json'});
  }
}
