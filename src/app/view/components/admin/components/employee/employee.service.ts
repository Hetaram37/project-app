import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    public httpClient: HttpClient
  ) { }

  linkGeneration(param1, param2) {
    const host = window.location.hostname;
    return param1.protocol + '://' + host + ':' + param1.port + param1.apiPrefix + param2;
  }

  employeeList() {
    const url = this.linkGeneration(environment.employeeMgmtService, environment.employeeMgmtService.employeeList);
    return this.httpClient.get(url, { responseType: 'json'});
  }

  getEmployee(id) {
    const url = this.linkGeneration(environment.employeeMgmtService, environment.employeeMgmtService.getEmployee).replace(':id', id);
    return this.httpClient.get(url, { responseType: 'json'});
  }

  addEmployee(body) {
    const url = this.linkGeneration(environment.employeeMgmtService, environment.employeeMgmtService.addNewEmployee);
    return this.httpClient.post(url, body, { responseType: 'json'});
  }

  deleteEmployee(id) {
    const url = this.linkGeneration(environment.employeeMgmtService, environment.employeeMgmtService.removeEmployee).replace(':id', id);
    return this.httpClient.delete(url, { responseType: 'json'});
  }

  updateEmployee(body, id) {
    const url = this.linkGeneration(environment.employeeMgmtService, environment.employeeMgmtService.updateEmployee).replace(':id', id);
    return this.httpClient.put(url, body, { responseType: 'json'});
  }
}
