import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './project.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';
import { GetComponent } from './components/get/get.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ProjectRoutingModule } from './project-routing.module';
import { DialogModule } from 'primeng/dialog';

import {
  ButtonsModule,
  InputsModule,
  InputUtilitiesModule,
  IconsModule,
  WavesModule,
} from 'angular-bootstrap-md';

@NgModule({
  declarations: [ ProjectComponent, AddComponent, UpdateComponent, DeleteComponent, ListComponent, GetComponent ],
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
    DialogModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
