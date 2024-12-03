import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.css']
})
export class NestedTableComponent {
  data = [
    {
      name: 'Parent 1',
      children: [
        { name: 'Child 1.1' },
        { name: 'Child 1.2' }
      ]
    },
    {
      name: 'Parent 2',
      children: [
        { name: 'Child 2.1' },
        { name: 'Child 2.2' }
      ]
    }
  ];
}
