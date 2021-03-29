import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditsComponent } from './components/credits/credits.component';

const routes: Routes = [
  /*{ path: '', redirectTo: '/', pathMatch: 'full'},*/
  { path: 'credits', component: CreditsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
