import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddComponent } from './add/add.component';
import { ReviewComponent } from './review/review.component';
import { CustomComponent } from './review/custom/custom.component';
import { RandomComponent } from './review/random/random.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ResetComponent } from './auth/reset/reset.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'add', component: AddComponent, canActivate: [AuthGuard]},
  { path: 'review', component: ReviewComponent, canActivate: [AuthGuard]},
  { path: 'shuffle', component: RandomComponent, canActivate: [AuthGuard]},
  { path: 'custom', component: CustomComponent, canActivate: [AuthGuard]},
  { path: 'forgot', component: ForgotComponent},
  { path: 'forgot/:token', component: ResetComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
