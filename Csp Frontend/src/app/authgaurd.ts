import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Perform authentication check here
    // Return true if the user is authenticated, otherwise redirect to the sign-in page
    const isAuthenticated = true; // Replace with your authentication logic
    if (!isAuthenticated) {
      this.router.navigate(['/display']);
      return false;
    }
    return true;
  }
}
