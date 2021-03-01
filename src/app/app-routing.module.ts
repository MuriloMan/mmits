import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { CreditsComponent } from './components/credits/credits.component';

const routes: Routes = [
  /*{ path: '', redirectTo: '/', pathMatch: 'full'},*/
  { path: 'credits', component: CreditsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
  /*{ path: '**', component: ErrorComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
