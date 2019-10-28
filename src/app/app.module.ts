import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';
import { MarkdownModule } from 'ngx-markdown';
import { ParticleEffectButtonModule } from 'angular-particle-effect-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HitCounterComponent } from './hit-counter/hit-counter.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { LoginComponent } from './signup-login/login/login.component';
import { SignupComponent } from './signup-login/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HitCounterComponent,
    GlossaryComponent,
    WelcomeScreenComponent,
    SignupLoginComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ParticlesModule,
    ParticleEffectButtonModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
