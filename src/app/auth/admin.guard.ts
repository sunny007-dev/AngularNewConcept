import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let storage: any = localStorage.getItem('user');
  const loggedUser = JSON.parse(storage);
  console.log(loggedUser, 'Admin guard');
  if (loggedUser != null && loggedUser?.role == 0) {
    return true;
  } else {
    if (loggedUser?.role == 1) {
      router.navigateByUrl('vendor/dashboard');
    } else {
      router.navigateByUrl('login');
    }
    return false;
  }
};
