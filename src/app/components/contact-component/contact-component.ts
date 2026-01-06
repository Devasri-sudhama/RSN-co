import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService, ContactRequest } from '../../service/api.service';
import { HeaderComponent } from '../header-component/header-component';

@Component({
  selector: 'app-contact',
  standalone: true,
  styles:[`
.invalid-feedback{
  color: #b00101 !important;
}
.contact-section{
  font-family: FiraSans-Regular;
}
  `],
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './contact-component.html',
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;
  success = false;
  error = false;
  isLoading = false;

  offices = [
    {
      city: 'Hyderabad',
      address: 'Plot No. 45, Hitech City, Hyderabad, Telangana 500081',
      phone: '+91 9876543210',
      email: 'hyderabad@rsnandco.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      mapLink: 'https://maps.google.com/?q=Hyderabad+Office'
    }
  ];

  selectedOffice = this.offices[0];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      preferredContact: ['email']
    });
  }


  onFormChange(): void {

  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.scrollToFirstError();
      return;
    }

    this.isLoading = true;

    const payload: ContactRequest = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      preferredContact: this.contactForm.value.preferredContact,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    };

    this.apiService.submitContact(payload).subscribe({
      next: () => {
        this.success = true;
        this.error = false;
        this.isLoading = false;


        this.contactForm.reset({
          preferredContact: 'email'
        });

        this.submitted = false;

        setTimeout(() => (this.success = false), 5000);
      },
      error: (err) => {
        console.error('❌ Contact submit error:', err);
        this.error = true;
        this.isLoading = false;
        setTimeout(() => (this.error = false), 5000);
      }
    });
  }

  scrollToFirstError(): void {
    const el = document.querySelector('input.ng-invalid, textarea.ng-invalid');
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  selectOffice(office: any): void {
    this.selectedOffice = office;
  }

  // ===== Getters for template =====
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }


  copyEmail(email: string): void {
    navigator.clipboard.writeText(email)
      .then(() => {});
  }

  openWhatsApp(): void {
    window.open(
      'https://wa.me/919876543210?text=Hello, I would like to know more.',
      '_blank'
    );
  }
}
