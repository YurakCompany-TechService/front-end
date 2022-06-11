import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent} from './components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './views/home/home.component';
import {MatInputModule} from "@angular/material/input";
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import {MatSelectModule} from "@angular/material/select";
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpBusinessComponent } from './security/pages/sign-up-business/sign-up-business.component';
import { ProfileBusinessComponent } from './components/profile-business/profile-business.component';
import {HelpComponent} from "./public/help/help.component";
import {CasesComponent} from "./public/cases/pages/cases.component";
import {TechniciansComponent} from "./technicians/pages/technicians/technicians.component";
import {ServiceshistoryComponent} from "./public/serviceshistory/serviceshistory.component";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from "@angular/material/tabs";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { HomeBusinessComponent } from './views/home/home/home-business/home-business.component';
import { HomeTechnicianComponent } from './views/home/home/home-technician/home-technician.component';
import { CompaniesComponent } from "./companies/pages/companies/companies.component";
import {NotificationComponent} from "./components/notification/notification.component";
import {SubscriptionComponent} from "./views/subscription/subscription.component";
import {RequestComponent} from "./views/request/pages/request/request.component";
import {DialogSubscriptionComponent} from "./components/dialogSubscription/dialogSubscription.component";
import {CasesTableComponent} from "./public/cases/pages/table/cases.component";
import { ViewRequestComponent } from './views/request/view-request/view-request.component';
import { WorkActiveComponent } from './views/work-active/work-active.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent,
    ProfileComponent,
    SignUpBusinessComponent,
    ProfileBusinessComponent,
    HelpComponent,
    CasesComponent,
    TechniciansComponent,
    ServiceshistoryComponent,
    DialogComponent,
    HomeBusinessComponent,
    HomeTechnicianComponent,
    CompaniesComponent,
    NotificationComponent,
    SubscriptionComponent,
    RequestComponent,
    DialogSubscriptionComponent,
    CasesComponent,
    CasesTableComponent,
    ViewRequestComponent,
    WorkActiveComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    CdkAccordionModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    IvyCarouselModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
