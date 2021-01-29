import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    public httpClient: HttpClient
  ) { }

  linkGeneration(param1, param2) {
    const host = window.location.hostname;
    return param1.protocol + '://' + host + ':' + param1.port + param1.apiPrefix + param2;
  }

  addNewProject(body: any) {
    const url = this.linkGeneration(environment.projectMgmtService, environment.projectMgmtService.addNewProject);
    return this.httpClient.post(url, body, { responseType: 'json'});
  }

  // removeProduct(id) {
  //   let url = this.linkGeneration(environment.productMgmtService, environment.productMgmtService.removeProduct);
  //   url = url.replace(':id', id);
  //   return this.httpClient.delete(url, { responseType: 'json'});
  // }
}
