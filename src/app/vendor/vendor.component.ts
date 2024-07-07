import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.scss'
})
export class VendorComponent {
  router = inject(Router);
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login'); 
  }
}
