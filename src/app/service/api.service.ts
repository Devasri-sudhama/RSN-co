// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
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
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  submitContact(formData: ContactRequest) {
    return this.http.post(
      `${this.apiUrl}/contact`,
      formData
    );
  }

  applyJob(formData: FormData) {
    return this.http.post(
      `${this.apiUrl}/careers/apply`,
      formData
    );
  }


  // Project Methods
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  getProjectsByCategory(category: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects/category/${category}`);
  }
}
