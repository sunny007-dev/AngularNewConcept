import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  console.log(auth, 'fdfusdiofjfdfahjiofjdsaij');
  // let storage: any = localStorage.getItem('user');
  // const loggedUser = JSON.parse(storage);
  // console.log(loggedUser, 'Admin guard');
  if (auth != null && auth?.loggedUser?.role == 0) {
    return true;
  } else {
    if (auth?.loggedUser?.role == 0) {
      router.navigateByUrl('vendor/dashboard');
    } else if (auth?.loggedUser?.role == 1) {
      router.navigateByUrl('admin/dashboard');
    } else {
      router.navigateByUrl('login');
    }
    return false;
  }
};
