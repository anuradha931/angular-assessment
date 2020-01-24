import { Injectable } from '@angular/core';
import { AuthGuard } from './auth-guard.service';

@Injectable()
export class AdminAuthGuard extends AuthGuard {

  canActivate() {
    let isAuthenticated = super.canActivate();
    if (!isAuthenticated)
      return false; 

    if (this.authService.currentUser.admin)
      return true; 

    this.router.navigate(['/no-access']);
    return false;
  }
}
