import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import { TitipListComponent } from './titip-list/titip-list.component';
import { TitipFormComponent } from './titip-form/titip-form.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { TitipUpdateComponent } from './titip-update/titip-update.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MemberFormComponent,
    MemberListComponent,
    TitipListComponent,
    TitipFormComponent,
    MemberUpdateComponent,
    TitipUpdateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
