import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { PingComponent } from './ping/ping.component';
import { FooterComponent } from './footer/footer.component';
import { EstadoBackendComponent } from './estado-backend/estado-backend.component';
import { ContentComponent } from './content/content.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    PingComponent,
    FooterComponent,
    EstadoBackendComponent,
    ContentComponent,
    LoginFormComponent,
    RegisterFormComponent,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
