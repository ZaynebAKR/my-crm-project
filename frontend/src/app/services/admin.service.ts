import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8081/admin';

  constructor(private http: HttpClient) {}

getStats() {
  return this.http.get<any>('http://localhost:8080/admin/stats');
}

getUsers() {
  return this.http.get<any[]>('http://localhost:8080/admin/users');
}
}