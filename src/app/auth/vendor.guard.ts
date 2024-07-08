import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const vendorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // let storage: any = localStorage.getItem('user');
  // const loggedUser = JSON.parse(storage);
  // console.log(loggedUser, 'Vendor guard');
  const auth = inject(AuthService);
  console.log(auth, 'Vendoerrrrr');
  if (auth != null && auth?.loggedUser?.role == 1) {
    return true;
  } else {
    if (auth?.loggedUser?.role == 0) {
      router.navigateByUrl('admin/dashboard');
    } else if (auth?.loggedUser?.role == 1) {
      router.navigateByUrl('vendor/dashboard');
    } else {
      router.navigateByUrl('login');
    }
    return false;
  }
};
