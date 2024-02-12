import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JustService {



  countries:string[] = ['Uzb', 'USA','UK'];
  constructor() {
    
  }
  addUser(country: string):void {
    this.countries.push(country);
  }
  removeUser(index: number):void {
    this.countries.splice(index,1)
  }
}
