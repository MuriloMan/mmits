import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  get(id: string): string {
    let item = sessionStorage.getItem(id);
    return item;
  }

  set(id: string, value: string): void {
    sessionStorage.setItem(id, value);
  }
}
