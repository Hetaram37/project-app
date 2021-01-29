import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { ListComponent } from './components/list/list.component';
import { GetComponent } from './components/get/get.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TagInputModule } from 'ngx-chips';

import {
  ButtonsModule,
  InputsModule,
  InputUtilitiesModule,
  IconsModule,
  WavesModule,
} from 'angular-bootstrap-md';
import { DeleteComponent } from './components/delete/delete.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [EmployeeComponent, AddComponent, UpdateComponent, ListComponent, GetComponent, DeleteComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    InputsModule.forRoot(),
    InputUtilitiesModule,
    IconsModule,
    WavesModule.forRoot(),
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    TagInputModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
