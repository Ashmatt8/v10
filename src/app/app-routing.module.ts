import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CompanyComponent} from './company/company.component';
import {DistributionComponent} from './distribution/distribution.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'distribution',
    component: DistributionComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 150]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
