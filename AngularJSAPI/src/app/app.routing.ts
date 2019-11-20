import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { TitipFormComponent } from './titip-form/titip-form.component';
import { TitipListComponent } from './titip-list/titip-list.component';
import { TitipUpdateComponent } from './titip-update/titip-update.component';

const routes: Routes =[
    { path: 'dashboard',                component: DashboardComponent },
    { path: 'member-form',              component: MemberFormComponent },
    { path: 'member-list',              component: MemberListComponent },
    { path: 'member-update/:id',        component: MemberUpdateComponent },
    { path: 'titip-form',               component: TitipFormComponent },
    { path: 'titip-list',               component: TitipListComponent },
    { path: 'titip-update/:id',         component: TitipUpdateComponent },
    { path: '',                         redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
