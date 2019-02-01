import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular';




import { AppComponent } from './app.component';
import { NavbarComponent } from './dir/navbar/navbar.component';
import { NavoneComponent } from './dir/navone/navone.component';
import { NavtwoComponent } from './dir/navtwo/navtwo.component';
import { NavthreeComponent } from './dir/navthree/navthree.component';
import { NavfourComponent } from './dir/navfour/navfour.component';
import { NavfiveComponent } from './dir/navfive/navfive.component';

import { LoginComponent } from './dir/login/login.component';

import { HomeComponent } from './dir/home/home.component';
import { UserService } from './service/user.service';
import { DoctorRoleComponent } from './dir/doctor-role/doctor-role.component';
import { NurseRoleComponent } from './dir/nurse-role/nurse-role.component';
import { RegisterComponent } from './dir/register/register.component';
import { UpdateComponent } from './dir/update/update.component';
import { VaccineComponent } from './dir/vaccine/vaccine.component';
import { AdminComponent } from './dir/admin/admin.component';




const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'nurserole',component:NurseRoleComponent},
  { path: 'admin', component: AdminComponent },
  { path:'home',component:HomeComponent},
  { path:'doctor',component:DoctorRoleComponent},
  { path: 'update', component: UpdateComponent },
  { path: 'vaccine', component: VaccineComponent },
  { path:'navbar',component:NavbarComponent},
  { path:'navone',component:NavoneComponent},
  { path:'navtwo',component:NavtwoComponent},
  { path:'navthree',component:NavthreeComponent},
  { path:'navfour',component:NavfourComponent},
  { path:'navfive',component:NavfiveComponent},

  { path:'**',redirectTo:'/login', pathMatch:'full'},
  { path:'',redirectTo:'/login', pathMatch:'full'},
  
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
   
    HomeComponent,
    DoctorRoleComponent,
    NurseRoleComponent,
    RegisterComponent,
    UpdateComponent,
    VaccineComponent,
    AdminComponent,
    NavoneComponent,
    NavtwoComponent,
    NavthreeComponent,
    NavfourComponent,
    NavfiveComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IgxTimePickerModule,
    

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
