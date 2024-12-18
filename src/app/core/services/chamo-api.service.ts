import { Injectable } from '@angular/core';
import { Chamo } from '../interfaces/chamo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChamoApiService {
  chamos: Chamo[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get('http://localhost:8080/chamo');
  }

  insert(name: string) {
    return this.http.post('http://localhost:8080/chamo', {
      name: name
    });
  }
}
