import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const authToken = authService.getToken();
  
  if(authToken) {
    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next(newReq);
  }
  return next(req).pipe(
    catchError(error => {
      if(error instanceof HttpErrorResponse && error.status === 401) {
        router.navigate(['/login']);
      }
      return throwError(() => error);
      }
    )
  );
};