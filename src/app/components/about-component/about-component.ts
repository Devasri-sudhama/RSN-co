import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about-component.html',
})
export class AboutComponent {

  // Company stats
  stats = [
    { number: '5+', label: 'Years of Professional Experience', icon: 'fa-calendar-alt' },
    { number: '250+', label: 'Satisfied Clients', icon: 'fa-users' },
    { number: '500+', label: 'Professional Engagements', icon: 'fa-check-circle' }
  ];

  // Team members
  team = [
    {
      name: 'Nikhil',
      position: 'Managing Partner',
      startYear: 2019,
      image: 'assets/images/team/rajesh.jpg',
      description: 'Expert in tax planning and audit'
    },
    {
      name: 'Ravinder',
      position: 'Tax Consultant',
      startYear: 2019,
      image: 'assets/images/team/priya.jpg',
      description: 'Specialized in GST and international tax'
    },
    {
      name: 'Srikanth',
      position: 'Audit Head',
      startYear: 2019,
      image: 'assets/images/team/amit.jpg',
      description: 'Statutory and internal audit expert'
    }
  ];


  // Services
  services = [
    { title: 'Audit & Assurance', icon: 'fa-search-dollar', description: 'Statutory and internal audits' },
    { title: 'Tax Advisory', icon: 'fa-file-invoice-dollar', description: 'Tax planning and compliance' },
    { title: 'GST Services', icon: 'fa-receipt', description: 'GST registration and filing' },
    { title: 'Company Formation', icon: 'fa-building', description: 'Business setup and registration' },
    { title: 'Accounting', icon: 'fa-calculator', description: 'Bookkeeping and payroll' },
    { title: 'Financial Consulting', icon: 'fa-chart-line', description: 'Business advisory services' }
  ];

  // Values
  values = [
    { title: 'Integrity', icon: 'fa-handshake', description: 'Honest and ethical practices' },
    { title: 'Expertise', icon: 'fa-graduation-cap', description: 'Certified professionals' },
    { title: 'Confidentiality', icon: 'fa-lock', description: 'Client data protection' },
    { title: 'Timeliness', icon: 'fa-clock', description: 'On-time delivery' }
  ];

  // Certifications
  certifications = [
    { name: 'ICAI Certified', icon: 'fa-award' },
    { name: 'GST Practitioner', icon: 'fa-file-certificate' },
    { name: 'ISO 9001:2015', icon: 'fa-certificate' },
    { name: 'MSME Registered', icon: 'fa-building' }
  ];

  getExperience(startYear: number): string {
    const currentYear = new Date().getFullYear();
    const years = currentYear - startYear;

    return `${years}+ years`;
  }

}
