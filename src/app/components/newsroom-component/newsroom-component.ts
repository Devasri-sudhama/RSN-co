import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../footer-component/footer-component';
import {HeaderComponent} from '../header-component/header-component';

@Component({
  selector: 'app-newsroom-component',
  imports: [CommonModule, FooterComponent, HeaderComponent],
  standalone: true,
  templateUrl: './newsroom-component.html',
  styleUrl: './newsroom-component.scss',
})
export class NewsroomComponent {
  newsList: NewsItem[] = [
    {
      title: 'GST Advisory Updates for FY 2025–26',
      summary: 'Key changes in GST compliance and reporting that businesses should be aware of.',
      date: '02 Jan 2026',
      readMoreUrl: 'https://example.com/gst-updates-2026',
      isExternal: true,
      pdfUrl: 'assets/pdfs/test.pdf'
    },
    {
      title: 'Our Firm Recognized for Client Excellence',
      summary: 'A milestone achievement reflecting our commitment to professional integrity.',
      date: '20 Dec 2025',
      readMoreUrl: '/news/client-excellence',
      isExternal: false
    },
    {
      title: 'New Audit & Assurance Services Launched',
      summary: 'Strengthening financial transparency with advanced audit practices.',
      date: '10 Dec 2025',
      readMoreUrl: 'https://example.com/audit-services',
      isExternal: true,
      pdfUrl: 'assets/pdfs/test.pdf'
    }
  ];

}

export interface NewsItem {
  title: string;
  summary: string;
  date: string;
  readMoreUrl?: string;      // external / internal link
  pdfUrl?: string;           // optional PDF download
  isExternal?: boolean;      // true = open in new tab
}

