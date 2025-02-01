import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterTransactionComponent } from './components/register-transaction/register-transaction.component';
import { ListTransitionComponent } from './components/list-transition/list-transition.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { StatisticsReportComponent } from './components/statistics-report/statistics-report.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CepPipe } from './components/shared/pipes/cep.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    RegisterTransactionComponent,
    ListTransitionComponent,
    CategoryManagementComponent,
    StatisticsReportComponent,
    ProfileUserComponent,
    LoginComponent,
    SidebarComponent,
    CepPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
