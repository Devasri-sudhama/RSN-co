import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../header-component/header-component';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-careers-component',
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  standalone: true,
  templateUrl: './careers-component.html',
  styleUrl: './careers-component.scss',
})
export class CareersComponent {

  careerForm!: FormGroup;
  submitted = false;
  isLoading = false;
  success = false;
  error = false;
  @ViewChild('resumeInput') resumeInput!: ElementRef<HTMLInputElement>;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
  ) {
    this.initForm();
  }

  /* --------------------------------
   * FORM INIT
   * -------------------------------- */
  private initForm(): void {
    this.careerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      phone: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]],

      position: ['', Validators.required],

      message: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    });
  }

  /* --------------------------------
   * FILE SELECT
   * -------------------------------- */
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      this.selectedFile = null;
      return;
    }

    const file = input.files[0];

    // Optional: file size validation (2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('Resume must be less than 2MB');
      input.value = '';
      return;
    }

    this.selectedFile = file;
  }



  /* --------------------------------
   * SUBMIT
   * -------------------------------- */
  onSubmit(): void {
    this.submitted = true;

    if (!this.careerForm.valid || !this.selectedFile) {
      this.scrollToFirstError();
      return;
    }

    this.isLoading = true;

    const formData = new FormData();

    // REQUIRED: text fields
    formData.append('name', this.careerForm.value.name);
    formData.append('email', this.careerForm.value.email);
    formData.append('phone', this.careerForm.value.phone);
    formData.append('position', this.careerForm.value.position);
    formData.append('message', this.careerForm.value.message || '');

    // ✅ REQUIRED: file (field name MUST match multer)
    formData.append('resume', this.selectedFile);

    this.apiService.applyJob(formData).subscribe({
      next: (res) => {
        console.log('✅ RESPONSE FROM SERVER:', res);
        this.success = true;
        this.error = false;
        this.isLoading = false;
        this.careerForm.reset();
        this.careerForm.reset({
          position: '',
          preferredContact: 'email'
        });

        // ✅ CLEAR FILE INPUT (IMPORTANT)
        this.selectedFile = null;
        if (this.resumeInput) {
          this.resumeInput.nativeElement.value = '';
        }
        this.submitted = false;

        setTimeout(() => (this.success = false), 5000);
      },
      error: (err) => {
        console.error('❌ SERVER ERROR:', err);
        this.error = true;
        this.isLoading = false;

        setTimeout(() => (this.error = false), 5000);
      }
    });
  }

  scrollToFirstError(): void {
    const firstError = document.querySelector('.ng-invalid');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  /* --------------------------------
   * RESET
   * -------------------------------- */
  clearForm(): void {
    this.careerForm.reset({
      experience: 0
    });
    this.submitted = false;
    this.selectedFile = null;
  }
}
