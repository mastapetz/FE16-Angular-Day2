import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeFormComponent } from './challenge-form/challenge-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path:"", component: HomePageComponent
  },
  {
    path:"contact", component: ContactUsComponent
  },
  {
    path:"challenge", component: ChallengeFormComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
