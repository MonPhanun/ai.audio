import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from '../services/localstorage.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const local = inject(LocalstorageService);
  const data = local.getLocalStorage("login");
  if (data == "false") {

    router.navigate(['login']);
    return false;
  }
  return true

};
