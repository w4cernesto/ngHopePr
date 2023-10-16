import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChildAuthGuard implements  CanActivateChild {
  constructor(private authService: AuthService) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isAuthenticated) {
      // El usuario está autenticado, permitir el acceso a las rutas hijas
      return true;
    } else {
      // El usuario no está autenticado, puedes redirigir a una página de inicio de sesión o mostrar un mensaje de error.
      return false;
    }
  }
}