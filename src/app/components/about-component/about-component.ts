import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {PartnersComponent} from '../partners-component/partners-component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './about-component.html',
})
export class AboutComponent {
  establishedYear = 2014;
  currentYear = new Date().getFullYear();

  yearsOfExperience = this.currentYear - this.establishedYear;
  activeTab: 'leadership' | 'values' | 'services' = 'leadership';

  setTab(tab: 'leadership' | 'values' | 'services') {
    this.activeTab = tab;
  }
  values = [
    {
      title: 'Integrity',
      description:
        'We conduct all professional engagements with integrity, fairness, and honesty, ensuring unbiased and transparent professional judgment.'
    },
    {
      title: 'Objectivity',
      description:
        'We maintain objectivity in all professional and business relationships and do not allow bias, conflict of interest, or undue influence.'
    },
    {
      title: 'Professional Competence and Due Care',
      description:
        'We continuously maintain professional knowledge and act diligently in accordance with applicable technical, professional, and ethical standards.'
    },
    {
      title: 'Confidentiality',
      description:
        'We respect the confidentiality of information acquired during professional engagements and disclose it only when legally or professionally required.'
    },
    {
      title: 'Professional Behaviour',
      description:
        'We comply with relevant laws and regulations and avoid any conduct that may discredit the profession.'
    },
    {
      title: 'Commitment to Quality and Compliance',
      description:
        'We adhere to established systems and quality control standards to ensure consistent delivery of services in line with statutory requirements.'
    },
    {
      title: 'Responsibility to Clients and Stakeholders',
      description:
        'We serve the best interests of our clients while upholding professional responsibilities to regulators, authorities, and stakeholders.'
    }
  ];
  // Services
  services = [
    {
      title: 'Accounting & Bookkeeping',
      icon: 'fa-book',
      shortDescription: 'Maintenance of books and preparation of financial statements.',
      slug: 'accounting-bookkeeping'
    },
    {
      title: 'Audit & Assurance',
      icon: 'fa-search-dollar',
      shortDescription: 'Statutory, internal, and tax audits with compliance focus.',
      slug: 'audit-assurance'
    },
    {
      title: 'Direct Taxation',
      icon: 'fa-file-invoice-dollar',
      shortDescription: 'Income tax compliance, advisory, and representation.',
      slug: 'direct-taxation'
    },
    {
      title: 'Indirect Taxation (GST)',
      icon: 'fa-receipt',
      shortDescription: 'GST registration, filing, and compliance advisory.',
      slug: 'gst-services'
    },
    {
      title: 'Corporate Law & MCA',
      icon: 'fa-building',
      shortDescription: 'Company incorporation and MCA compliances.',
      slug: 'corporate-law-mca'
    },
    {
      title: 'Advisory Services',
      icon: 'fa-chart-line',
      shortDescription: 'Process reviews, MIS, and internal control advisory.',
      slug: 'advisory-services'
    }
  ];


  getExperience(startYear: number): string {
    const currentYear = new Date().getFullYear();
    const years = currentYear - startYear;

    return `${years}+ years`;
  }

}
