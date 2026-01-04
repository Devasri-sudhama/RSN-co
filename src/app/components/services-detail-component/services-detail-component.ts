import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../footer-component/footer-component';
import {HeaderComponent} from '../header-component/header-component';

@Component({
  selector: 'app-services-detail-component',
  imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent, RouterLink,],
  standalone: true,
  templateUrl: './services-detail-component.html',
  styleUrl: './services-detail-component.scss',
})
export class ServicesDetailComponent {
  selectedSlug!: string;

  services = [
    {
      title: 'Accounting and Bookkeeping Services',
      slug: 'accounting-bookkeeping',
      description: `
      The firm provides accounting and bookkeeping support, including maintenance
      and review of books of account, preparation of financial statements, and
      accounting advisory in accordance with applicable accounting standards,
      statutory requirements, and generally accepted accounting principles.
      Services are rendered with due emphasis on accuracy, consistency, and compliance.
    `
    },

    {
      title: 'Audit and Assurance Services',
      slug: 'audit-assurance',
      description: `
      The firm undertakes audit and assurance engagements as permitted under the
      Chartered Accountants Act, 1949. All audit assignments are conducted in
      accordance with applicable Auditing Standards, with emphasis on risk
      assessment, internal controls, and regulatory compliance.
    `,
      points: [
        'Statutory Audits',
        'Internal Audits',
        'Tax Audits',
        'Stock Audits',
        'Transaction Audits',
        'Due Diligence Reviews'
      ]
    },

    {
      title: 'Direct Taxation',
      slug: 'direct-taxation',
      description: `
      The firm provides services relating to direct tax compliance and advisory,
      including computation of taxable income, filing of returns, representation
      before tax authorities, and assistance during assessments and appellate
      proceedings, in accordance with the Income-tax Act, 1961.
    `
    },

    {
      title: 'Indirect Taxation (GST)',
      slug: 'gst-services',
      description: `
      The firm renders services in the area of Goods and Services Tax (GST),
      including registration, return filing, reconciliations, advisory on
      compliance matters, and assistance during audits and departmental proceedings,
      in line with applicable GST laws and rules.
    `
    },

    {
      title: 'Corporate Law and MCA Compliances',
      slug: 'corporate-law-mca',
      description: `
      The firm provides professional support in matters relating to corporate
      law compliances under the Companies Act, 2013, including incorporation,
      filing of statutory returns and forms with the Ministry of Corporate Affairs (MCA),
      maintenance of statutory records, and support in relation to corporate
      governance and compliance requirements.
    `
    },

    {
      title: 'Advisory and Value-Added Services',
      slug: 'advisory-services',
      description: `
      The firm provides advisory and professional support services in areas such as:
    `,
      points: [
        'Internal process review and documentation.',
        'Assistance in setting up accounting systems and internal control frameworks.',
        'Management Information System (MIS) design and reporting support.',
        'Compliance and regulatory advisory.',
        'Other professional services as permitted under applicable laws and guidelines.'
      ]
    }
  ];

  selectedService: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      // try to find matching service
      const matchedService = this.services.find(s => s.slug === slug);

      if (matchedService) {
        // ✅ valid slug
        this.selectedService = matchedService;
        this.selectedSlug = matchedService.slug;
      } else {
        // ❌ invalid or missing slug → fallback to FIRST service
        this.selectedService = this.services[0];
        this.selectedSlug = this.services[0].slug;

        // optional: correct the URL
        this.router.navigate(
          ['/services', this.selectedSlug],
          { replaceUrl: true }
        );
      }
    });
  }


  navigate(slug: string) {
    this.router.navigate(['/services', slug]);
  }
}
