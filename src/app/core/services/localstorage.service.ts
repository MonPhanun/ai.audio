import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  getLocalStorage(key: string) {
    return localStorage.getItem(key) ?? " ";
  }

  setLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
