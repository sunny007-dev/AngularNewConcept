import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = ""
      if (error?.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
        errorMessage = 'An error occurred ' + error.error.message;
      }

      if (error?.status === 404) {
        errorMessage = "Product not found";
      } else if (error?.status === 500) {
        errorMessage = "Internal server error";
      } else if (error?.status === 401) {
        errorMessage = "An unauthorized access";
      } else {
        errorMessage = "An error occurred";
      } 

      return throwError(() => errorMessage);
    })
  );
};
