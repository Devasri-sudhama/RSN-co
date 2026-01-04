import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './footer-component.html',
})
export class FooterComponent implements OnInit {
  newsletterForm: FormGroup;
  submitted = false;
  subscribed = false;

  // Services Links
  servicesLinks = [

    { title: 'Accounting & Bookkeeping', path: '/services/accounting' },
    { title: 'Audit & Assurance', path: '/services/audit-assurance' },
    { title: 'Taxation Services', path: '/services/taxation' },
    { title: 'GST Compliance & Advisory', path: '/services/gst' },
    { title: 'Company Incorporation', path: '/services/incorporation' },
    { title: 'Financial & Business Advisory', path: '/services/advisory' }
  ];


  // Project Categories
  projectCategories = [
    { title: 'Residential Projects', count: 45, path: '/projects/residential' },
    { title: 'Commercial Projects', count: 32, path: '/projects/commercial' },
    { title: 'Industrial Projects', count: 18, path: '/projects/industrial' },
    { title: 'Infrastructure Projects', count: 27, path: '/projects/infrastructure' },
    { title: 'Ongoing Projects', count: 12, path: '/projects/ongoing' },
    { title: 'Upcoming Projects', count: 8, path: '/projects/upcoming' }
  ];

  // Contact Information
  contactInfo = {
    headOffice: {
      address: 'Plot No. 45, Hitech City, Hyderabad, Telangana 500081',
      phone: '+91 9876543210',
      email: 'info@rsnandco.com',
      timing: 'Mon - Sat: 9:00 AM - 6:00 PM'
    },
    branches: [
      { city: 'Bangalore', phone: '+91 9876543211' },
      { city: 'Chennai', phone: '+91 9876543212' },
      { city: 'Mumbai', phone: '+91 9876543213' },
      { city: 'Delhi', phone: '+91 9876543214' }
    ]
  };


  // Recent Blog Posts
  recentPosts = [
    {
      title: 'Sustainable Construction Practices',
      date: 'Dec 15, 2023',
      image: 'assets/images/blog/sustainable-construction.jpg',
      path: '/blog/sustainable-construction'
    },
    {
      title: 'Latest Trends in Smart Buildings',
      date: 'Dec 10, 2023',
      image: 'assets/images/blog/smart-buildings.jpg',
      path: '/blog/smart-buildings'
    },
    {
      title: 'Safety Standards in Construction',
      date: 'Dec 5, 2023',
      image: 'assets/images/blog/safety-standards.jpg',
      path: '/blog/safety-standards'
    }
  ];

  // Payment Methods
  paymentMethods = [
    { name: 'Visa', icon: 'fab fa-cc-visa', color: '#1a1f71' },
    { name: 'MasterCard', icon: 'fab fa-cc-mastercard', color: '#eb001b' },
    { name: 'American Express', icon: 'fab fa-cc-amex', color: '#2e77bc' },
    { name: 'PayPal', icon: 'fab fa-cc-paypal', color: '#003087' },
    { name: 'UPI', icon: 'fa fa-university', color: '#6f42c1' },
    { name: 'Net Banking', icon: 'fa fa-globe', color: '#20c997' }
  ];

  // Emergency Contacts
  emergencyContacts = [
    { type: 'Site Emergency', number: '+91 9876543299', icon: 'fa fa-hard-hat' },
    { type: 'Safety Officer', number: '+91 9876543298', icon: 'fa fa-shield-alt' },
    { type: 'Quality Control', number: '+91 9876543297', icon: 'fa fa-check-circle' }
  ];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      consent: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    // Load saved newsletter email from localStorage
    const savedEmail = localStorage.getItem('newsletterEmail');
    if (savedEmail) {
      this.newsletterForm.patchValue({ email: savedEmail });
    }
  }

  // Quick actions
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }





  viewSiteMap(): void {
    // Navigate to sitemap page
    console.log('Navigating to sitemap...');
  }

  // Social media share functions
  shareOnFacebook(): void {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  }




  // Copy email to clipboard
  copyEmail(email: string): void {
    navigator.clipboard.writeText(email).then(() => {
    });
  }

  // Get current year for copyright
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  // Open WhatsApp chat
  openWhatsApp(): void {
    const phone = '919876543210';
    const message = encodeURIComponent('Hello RSN & Co, I need information about Your services.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }


  // Print page
  printPage(): void {
    window.print();
  }
}
