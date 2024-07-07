import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { vendorGuard } from './auth/vendor.guard';
import { adminGuard } from './auth/admin.guard';

export const routes: Routes = [
    {
        path: "login", component: LoginComponent
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: "admin",
        canActivate:[adminGuard],
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: "vendor",
        canActivate:[vendorGuard],
        loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule)
    },
    {
        path:"**", component:LoginComponent
    }

];
