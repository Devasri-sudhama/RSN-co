// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  category: string;
  imageUrl: string;
  yearCompleted: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Contact Methods
  submitContact(formData: ContactRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, formData);
  }

  // Project Methods
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  getProjectsByCategory(category: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects/category/${category}`);
  }
}
