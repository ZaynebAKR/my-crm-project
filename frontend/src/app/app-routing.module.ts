import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { InsomeaDashboardComponent } from './pages/insomea-dashboard/insomea-dashboard.component';
import { PartenaireDashboardComponent } from './pages/partenaire-dashboard/partenaire-dashboard.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { MicrosoftDashboardComponent } from './pages/microsoft-dashboard/microsoft-dashboard.component';
const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'insomea-dashboard', component: InsomeaDashboardComponent },
  { path: 'partenaires-dashboard', component: PartenaireDashboardComponent },
  { path: 'client-dashboard', component: ClientDashboardComponent },
  { path: 'microsoft-dashboard', component: MicrosoftDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
