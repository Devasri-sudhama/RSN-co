import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-partners',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './partners-component.html',
  styleUrl: './partners-component.scss',
})
export class PartnersComponent {
  partners = [
    {
      name: 'Mr. Nikhil Varaganti',
      designation: 'Partner',
      description: `
Mr. Nikhil Varaganti is a Chartered Accountant and a partner of the firm. Post qualification,
he worked with a Big Four accounting firm for over three years and was associated with
statutory audit assignments of listed and unlisted entities.

His experience includes audit planning, execution, reporting, and evaluation of internal
control systems in accordance with applicable auditing standards and regulatory frameworks.

He is actively involved in audit and assurance services, corporate law compliances, and
regulatory matters. His professional approach emphasizes due care, objectivity, and
compliance with ICAI ethical requirements.
      `
    },
    {
      name: 'Mr. Srikanth Bomma',
      designation: 'Partner',
      description: `
Mr. Srikanth Bomma is a Chartered Accountant and a partner of the firm. He has been actively
involved in professional practice since inception, handling assignments in direct taxation,
GST, and corporate law compliances.

He possesses hands-on experience in income-tax and GST compliance, advisory, and
representation before tax authorities. His professional exposure includes corporate filings
under the Companies Act, 2013 and bank-related compliance assignments.

His practice is guided by due care, objectivity, and adherence to ICAI standards.
      `
    },
    {
      name: 'Mr. Ravinder Reddy Vallapureddy',
      designation: 'Partner',
      description: `
Mr. Ravinder Reddy Vallapureddy is a Chartered Accountant and a partner of the firm. He is
actively involved in accounting, bookkeeping, financial statement preparation, and
ongoing compliance support.

He handles MIS preparation, internal control reviews, statutory filings, and coordination
for audits and bank-related requirements. His work emphasizes consistency, documentation,
and compliance with applicable accounting standards and ICAI ethical principles.
      `
    }
  ];
}
