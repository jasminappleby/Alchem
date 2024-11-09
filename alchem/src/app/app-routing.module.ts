import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementConsoleComponent } from './management-console/management-console.component';
import { SimulatorComponent } from './simulator/simulator.component';

const routes: Routes = [
    { path: '', redirectTo: '/management-console', pathMatch: 'full' },
    { path: 'management-console', component: ManagementConsoleComponent },
    { path: 'simulator', component: SimulatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }