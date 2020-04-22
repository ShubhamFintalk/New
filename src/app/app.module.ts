import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignService } from './sign.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpService } from './emp.service';
import { AuthService } from './auth.service';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { EmpComponent } from './emp/emp.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEmpComponent } from './add-emp/add-emp.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    EmpComponent,
    AddEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase,'Manager_Emp'),
     AngularFirestoreModule,
     FormsModule,
     AngularFireAuthModule
  ],
  providers: [SignService,EmpService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
