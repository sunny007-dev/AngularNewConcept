import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const vendorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let storage: any = localStorage.getItem('user');
  const loggedUser = JSON.parse(storage);
  console.log(loggedUser, 'Vendor guard');
  if (loggedUser != null && loggedUser?.role == 1) {
    return true;
  } else {
    if (loggedUser?.role == 0) {
      router.navigateByUrl('admin/dashboard');
    }
    else {
      router.navigateByUrl('login');
    }
    return false;
  }
};
