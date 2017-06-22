import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupSeatsComponent } from './setup-seats/setup-seats.component';
import { ReserveSeatsComponent } from './reserve-seats/reserve-seats.component';

const routes: Routes = [
  {
    path: 'setup',
    component: SetupSeatsComponent
  },
  {
    path: 'reserve',
    component: ReserveSeatsComponent
  },
  {
    path: '',
    redirectTo: '/setup',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
