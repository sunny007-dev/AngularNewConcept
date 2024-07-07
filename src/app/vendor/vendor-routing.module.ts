import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: "",
    component: VendorComponent,
    children: [
      {
        path: "dashboard", component: DashboardComponent
      },
      {
        path: "template-form", component: TemplateDrivenFormComponent
      }
    ]
  },
  { path: '', redirectTo: 'vendor/dashboard', pathMatch: 'full' },
  { path: '**', component:VendorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
