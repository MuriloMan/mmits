import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  constructor() { }
  
  
  public get(id: string): string {
    let item = localStorage.getItem(id);
    return item;
  }
  
  public set(id: string, value: string): void {
    localStorage.setItem(id, value);
  }

  public removeItem(id: string):void {
    localStorage.removeItem(id);
  }
}
