import { StudentService } from './pages/services/student/student.service';


  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';

import { Placement as PopperPlacement, Options } from '@popperjs/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import{MatChipsModule}from'@angular/material/chips'
import { from } from 'rxjs';
import { CoursesComponent } from './pages/courses/courses.component';
import { ThirdofComponent } from './pages/thirdof/thirdof.component';
import { RegistercenterComponent } from './pages/registercenter/registercenter.component';
import { RegisterstudentComponent } from './pages/registerstudent/registerstudent.component';
import { RegisterformerComponent } from './pages/registerformer/registerformer.component';
import { AllprofComponent } from './pages/allprof/allprof.component';
import { AllcenterComponent } from './pages/allcenter/allcenter.component';
import { LoginstudentComponent } from './pages/loginstudent/loginstudent.component';
import { StudenthomeComponent } from './pages/studenthome/studenthome.component';
import { LoginformerComponent } from './pages/loginformer/loginformer.component';
import { LogincenterComponent } from './pages/logincenter/logincenter.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { AuthInterceptor } from './pages/_auth/auth.interceptor';
import { AuthGuard } from './pages/_auth/auth.guard';
import { HomeFormerComponent } from './pages/home-former/home-former.component';
import { HomeStudentComponent } from './pages/home-student/home-student.component';
import { StudentprofileComponent } from './pages/studentprofile/studentprofile.component';
import { BillingComponent } from './pages/billing/billing.component';
import{MessagesComponent}  from './pages/messages/messages.component';

import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';
import { FormerService } from './pages/services/former/former.service';
import { FormerprofileComponent } from './pages/formerprofile/formerprofile.component';
import { UpdateformerprofileComponent } from './pages/updateformerprofile/updateformerprofile.component';
import { MessagesFormerComponent } from './pages/messages-former/messages-former.component';
import { FavoritesFormerComponent } from './pages/favorites-former/favorites-former.component';
import { PlanningStudentComponent } from './pages/planning-student/planning-student.component';
import { FavoritesStudentComponent } from './pages/favorites-student/favorites-student.component';
import { BillingFormerComponent } from './pages/billing-former/billing-former.component';
import { PlanningFormerComponent } from './pages/planning-former/planning-former.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormerChatComponent } from './pages/former-chat/former-chat.component';
import { HomeCenterComponent } from './pages/home-center/home-center.component';
import { ImageComponent } from './pages/image/image.component';
import { MycoursesComponent } from './pages/mycourses/mycourses.component';
import { InformatiqueComponent } from './pages/category/informatique/informatique.component';
import { MathematiqueComponent } from './pages/category/mathematique/mathematique.component';
import { AllstudentComponent } from './pages/allstudenttable/allstudent.component';
import { AllformertableComponent } from './pages/allformertable/allformertable.component';
import { AllcentertableComponent } from './pages/allcentertable/allcentertable.component';
import { AlladmintableComponent } from './pages/alladmintable/alladmintable.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import {MatPaginatorIntl,MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    ThirdofComponent,
    RegistercenterComponent,
    RegisterstudentComponent,
    RegisterformerComponent,
    AllprofComponent,
    AllcenterComponent,
    LoginstudentComponent,
    StudenthomeComponent,
    LoginformerComponent,
    LogincenterComponent,
    ForbiddenComponent,
    AdminComponent,
    UserComponent,
    HomeFormerComponent,
    HomeStudentComponent,
    StudentprofileComponent,
    BillingComponent,
    MessagesComponent,
    UpdateprofileComponent,
    FormerprofileComponent,
    UpdateformerprofileComponent,
    MessagesFormerComponent,
    FavoritesFormerComponent,
    PlanningStudentComponent,
         FavoritesStudentComponent,
         BillingFormerComponent,
         PlanningFormerComponent,
         FormerChatComponent,
         HomeCenterComponent,
         ImageComponent,
         MycoursesComponent,
         InformatiqueComponent,
         MathematiqueComponent,
         AllstudentComponent,
         AllformertableComponent,
         AllcentertableComponent,
         AlladmintableComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
    HttpClientModule,
  
    BrowserAnimationsModule,
  
    MatPaginatorModule,
    NgbModule ,
    NbEvaIconsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatChipsModule,



   
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    {provide: MatPaginatorIntl, useClass: AlladmintableComponent},
    {provide: MatPaginatorIntl, useClass: AllformertableComponent},
    {provide: MatPaginatorIntl, useClass: AllcentertableComponent},
    {provide: MatPaginatorIntl, useClass: AllstudentComponent},
    StudentService,
    FormerService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
