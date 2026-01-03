import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {ApiService, ContactRequest} from '../../service/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-component.html',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  error = false;
  isLoading = false;

  // Office locations
  offices = [
    {
      city: 'Hyderabad',
      address: 'Plot No. 45, Hitech City, Hyderabad, Telangana 500081',
      phone: '+91 9876543210',
      email: 'hyderabad@rsnandco.com',
      image: 'assets/images/offices/hyderabad.jpg',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      mapLink: 'https://maps.google.com/?q=Hyderabad+Office'
    }
  ];


  // Contact methods
  contactMethods = [
    {
      icon: 'fa fa-phone-alt',
      title: 'Call Us',
      details: ['+91 9876543210', '+91 9876543211'],
    },
    {
      icon: 'fa fa-envelope',
      title: 'Email Us',
      details: ['info@rsnandco.com', 'support@rsnandco.com'],
    }
  ];

  // Google Maps integration
  mapCenter = { lat: 17.3850, lng: 78.4867 }; // Hyderabad coordinates
  zoomLevel = 12;

  // Selected office for map
  selectedOffice = this.offices[0];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      preferredContact: ['email'],
    });
  }

  ngOnInit(): void {
    // Initialize form with user data if available
    this.initializeForm();
  }

  initializeForm(): void {
    // You could load saved data from localStorage or session
    const savedData = localStorage.getItem('contactFormDraft');
    if (savedData) {
      this.contactForm.patchValue(JSON.parse(savedData));
    }
  }

  onFormChange(): void {
    // Save form draft to localStorage
    if (this.contactForm.valid) {
      localStorage.setItem('contactFormDraft', JSON.stringify(this.contactForm.value));
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.valid) {
      this.isLoading = true;

      const formData: ContactRequest = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      };

      // Add additional data
      const fullData = {
        ...formData,
        department: this.contactForm.value.department,
        projectType: this.contactForm.value.projectType,
        budget: this.contactForm.value.budget,
        timeline: this.contactForm.value.timeline,
        preferredContact: this.contactForm.value.preferredContact,
        timestamp: new Date().toISOString()
      };

      // Save to localStorage for backup
      localStorage.setItem('lastContactSubmission', JSON.stringify(fullData));

      this.apiService.submitContact(formData).subscribe({
        next: (response) => {
          this.success = true;
          this.error = false;
          this.isLoading = false;

          // Clear form draft
          localStorage.removeItem('contactFormDraft');

          // Reset form
          setTimeout(() => {
            this.contactForm.reset({
              department: 'general',
              preferredContact: 'email',
              receiveUpdates: true
            });
            this.submitted = false;
          }, 3000);

          // Auto-hide success message
          setTimeout(() => {
            this.success = false;
          }, 5000);
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          this.error = true;
          this.success = false;
          this.isLoading = false;

          // Show error for 5 seconds
          setTimeout(() => {
            this.error = false;
          }, 5000);
        }
      });
    } else {
      // Scroll to first error
      this.scrollToFirstError();
    }
  }

  scrollToFirstError(): void {
    const firstError = document.querySelector('.ng-invalid');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  selectOffice(office: any): void {
    this.selectedOffice = office;
    // In a real app, update map location here
    console.log('Selected office:', office.city);

    // Show notification
    this.showNotification(`Viewing ${office.city} office details`);
  }

  showNotification(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert-notification alert-${type}`;
    notification.innerHTML = `
      <i class="fa ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} me-2"></i>
      ${message}
    `;

    // Add to page
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  // Form field getters for easier access in template
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
  get department() { return this.contactForm.get('department'); }

  // Clear form
  clearForm(): void {
    if (confirm('Are you sure you want to clear the form?')) {
      this.contactForm.reset({
        department: 'general',
        preferredContact: 'email',
        receiveUpdates: true
      });
      this.submitted = false;
      localStorage.removeItem('contactFormDraft');
    }
  }

  // Copy email to clipboard
  copyEmail(email: string): void {
    navigator.clipboard.writeText(email).then(() => {
      this.showNotification('Email copied to clipboard!', 'success');
    });
  }

  // Open WhatsApp
  openWhatsApp(): void {
    const phone = '919876543210';
    const message = encodeURIComponent('Hello Brahmayya & Company, I would like to inquire about construction services.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }

  // Emergency contact
  emergencyContact(): void {
    if (confirm('Call emergency construction helpline?')) {
      window.location.href = 'tel:+911234567890';
    }
  }
}
