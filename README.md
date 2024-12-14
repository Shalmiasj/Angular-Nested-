import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-tables',
  imports: [NgFor,NgIf,CommonModule],
  template: `
    <p>
      nested-tables works!
    </p>
    <table border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <ng-container *ngFor="let row of tableData">
      <!-- Main Row -->
      <tr>
        <td>{{ row.id }}</td>
        <td>{{ row.name }}</td>
        <td>
          <button (click)="toggleExpand(row)">
            {{ row.expanded ? 'Collapse' : 'Expand' }}
          </button>
        </td>
      </tr>
      <!-- Nested Rows -->
      <ng-container *ngIf="row.expanded">
        <tr *ngFor="let detail of row.details">
          <td style="padding-left: 20px;">{{ detail.id }}</td>
          <td>{{ detail.name }}</td>
          <td>{{ detail.position }}</td>
          <td>{{ detail.email }}</td>
        </tr>
      </ng-container>
    </ng-container>
  </tbody>
</table>


  `,
  styles: `
  table {
  width: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

button {
  cursor: pointer;
  padding: 5px 10px;
}

  `
})
export class NestedTablesComponent {
  tableData = [
    {
      id: 1,
      name: 'Engineering',
      details: [
        { id: 101, name: 'Alice Smith', position: 'Software Engineer', email: 'alice.smith@example.com' },
        { id: 102, name: 'Bob Johnson', position: 'DevOps Engineer', email: 'bob.johnson@example.com' },
        { id: 103, name: 'Carol Williams', position: 'Frontend Developer', email: 'carol.williams@example.com' },
      ],
      expanded: false,
    },
    {
      id: 2,
      name: 'Human Resources',
      details: [
        { id: 201, name: 'David Brown', position: 'HR Manager', email: 'david.brown@example.com' },
        { id: 202, name: 'Emily Davis', position: 'Recruiter', email: 'emily.davis@example.com' },
      ],
      expanded: false,
    },
    {
      id: 3,
      name: 'Marketing',
      details: [
        { id: 301, name: 'Frank Wilson', position: 'Marketing Specialist', email: 'frank.wilson@example.com' },
        { id: 302, name: 'Grace Lee', position: 'Content Strategist', email: 'grace.lee@example.com' },
        { id: 303, name: 'Hannah Martin', position: 'SEO Analyst', email: 'hannah.martin@example.com' },
      ],
      expanded: false,
    },
  ];
  
  toggleExpand(row: any) {
    row.expanded = !row.expanded;
  }
}
