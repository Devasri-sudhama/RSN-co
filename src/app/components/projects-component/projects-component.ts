import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-component.html',
})
export class ProjectsComponent {

  // Simple project categories
  categories = [
    { id: 'all', name: 'All Projects', icon: '📋' },
    { id: 'audit', name: 'Audit', icon: '🔍' },
    { id: 'tax', name: 'Tax', icon: '💰' },
    { id: 'consulting', name: 'Consulting', icon: '💼' }
  ];

  // Simple projects array
  projects = [
    {
      id: 1,
      title: 'Company Audit',
      client: 'Tech Solutions Inc.',
      category: 'audit',
      description: 'Annual statutory audit for IT company',
      result: 'Clean audit report',
      year: 2024
    },
    {
      id: 2,
      title: 'Tax Planning',
      client: 'Manufacturing Ltd.',
      category: 'tax',
      description: 'Tax optimization strategy',
      result: 'Saved ₹50L in taxes',
      year: 2024
    },
    {
      id: 3,
      title: 'GST Compliance',
      client: 'Retail Chain',
      category: 'tax',
      description: 'Monthly GST filing services',
      result: '100% compliance rate',
      year: 2023
    },
    {
      id: 4,
      title: 'Business Setup',
      client: 'Startup Pvt. Ltd.',
      category: 'consulting',
      description: 'Company registration and compliance',
      result: 'Successful setup in 15 days',
      year: 2023
    },
    {
      id: 5,
      title: 'Internal Audit',
      client: 'Healthcare Group',
      category: 'audit',
      description: 'Internal control assessment',
      result: 'Improved controls by 40%',
      year: 2023
    },
    {
      id: 6,
      title: 'M&A Advisory',
      client: 'Finance Corp.',
      category: 'consulting',
      description: 'Due diligence for acquisition',
      result: 'Successful acquisition',
      year: 2023
    }
  ];

  selectedCategory = 'all';
  filteredProjects = this.projects;

  // Simple stats
  stats = [
    { number: '250+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' }
  ];

  // Filter projects by category
  filterProjects(category: string): void {
    this.selectedCategory = category;

    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  // View project details (simple alert)
  viewProject(project: any): void {
    alert(`Project: ${project.title}\nClient: ${project.client}\nResult: ${project.result}`);
  }

  // Get projects by category count
  getCategoryCount(categoryId: string): number {
    if (categoryId === 'all') return this.projects.length;
    return this.projects.filter(p => p.category === categoryId).length;
  }

  // Add these methods to your ProjectsComponent class:

  getCategoryClass(category: string): string {
    const classes: {[key: string]: string} = {
      'audit': 'audit',
      'tax': 'tax',
      'consulting': 'consulting'
    };
    return classes[category] || 'secondary';
  }

  getCategoryName(category: string): string {
    const names: {[key: string]: string} = {
      'audit': 'Audit',
      'tax': 'Tax',
      'consulting': 'Consulting'
    };
    return names[category] || 'Other';
  }

// Toggle view between grid and list
  viewMode: 'grid' | 'list' = 'grid';

  toggleView(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }

// Get current filtered count
  get currentCount(): number {
    return this.filteredProjects.length;
  }
}
