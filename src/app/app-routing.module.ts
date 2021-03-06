import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './employer/login/login.component';
import { PostJobsComponent } from './employer/post-jobs/post-jobs.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './employer/sign-up/sign-up.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { ShowJobsReceivedComponent } from './show-jobs-received/show-jobs-received.component';
import { WantJobComponent } from './want-job/want-job.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'postjobs',
    component: PostJobsComponent,
    canActivate: [AuthService],
  },
  {
    path: 'viewjobs/:empid/:jobid',
    component: ViewJobComponent,
  },
  {
    path: 'receivejobs',
    component: ShowJobsReceivedComponent,
    canActivate: [AuthService],
  },
  {
    path: 'wantjob',
    component: WantJobComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
