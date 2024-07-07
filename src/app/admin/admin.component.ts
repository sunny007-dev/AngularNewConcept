import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  router = inject(Router);
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login'); 
  }
}
