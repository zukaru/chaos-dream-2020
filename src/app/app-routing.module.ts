import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlossaryComponent } from './glossary/glossary.component';
import { HitCounterComponent } from './hit-counter/hit-counter.component';
import { SignupComponent } from './signup-login/signup/signup.component';

const routes: Routes = [
  { path: '', component: HitCounterComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'signup', component: SignupComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
