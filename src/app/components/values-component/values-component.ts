import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-values-component',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './values-component.html',
  styleUrl: './values-component.scss',
})
export class ValuesComponent implements OnInit {

  selectedValue: any;

  values = [
    {
      title: 'Integrity',
      description:
        'We conduct all professional engagements with integrity, fairness, and honesty, ensuring transparency and unbiased professional judgment.'
    },
    {
      title: 'Objectivity',
      description:
        'We maintain objectivity in all professional relationships and do not allow bias, conflict of interest, or undue influence.'
    },
    {
      title: 'Professional Competence and Due Care',
      description:
        'We continuously maintain professional knowledge and act diligently in accordance with applicable technical and ethical standards.'
    },
    {
      title: 'Confidentiality',
      description:
        'We respect the confidentiality of information acquired during professional engagements unless legally required to disclose.'
    },
    {
      title: 'Professional Behaviour',
      description:
        'We comply with relevant laws and regulations and uphold dignity and responsibility in professional conduct.'
    },
    {
      title: 'Commitment to Quality and Compliance',
      description:
        'We adhere to established systems and quality control standards to ensure consistent and compliant service delivery.'
    }
  ];
  ngOnInit() {
    this.selectedValue = this.values[0]; // default selection
  }

  selectValue(value: any) {
    this.selectedValue = value;
  }
}
