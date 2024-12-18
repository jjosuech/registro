import { Injectable } from '@angular/core';
import { Chamo } from '../interfaces/chamo';

@Injectable({providedIn: 'root'})
export class ChamoService {
  chamos: Chamo[] = [];

  constructor() { 
    const localChamos = localStorage.getItem('chamos');
    
    if (localChamos) {
      this.chamos = JSON.parse(localChamos);
    }
  }

  insert(name: string) {
    console.log('chamos');

    this.chamos.push({
      name: name
    });

    this.save();
  }

  save() {
    localStorage.setItem('chamos', JSON.stringify(this.chamos));
  }
}
