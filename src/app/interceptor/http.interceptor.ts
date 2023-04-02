import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private AuthService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.AuthService.getToken();

    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer' + authToken)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
