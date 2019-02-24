import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li *ngFor="let department of departments" [class.selected]="isSelected(department)" (click)="onSelect(department)">
      <span class="badge">{{department.id}}</span> {{department.name}}      </li>
  </ul>
  `,
  styles: []
})
// <span class="badge">{{department.id}}</span> {{department.name}}

export class DepartmentListComponent implements OnInit 
{
  
  public selectedId;
  departments = [
    {"id": 9000, "name": "PPA"},
    {"id": 7500, "name": "LB"},
    {"id": 5000, "name": "Angular"},
    {"id": 5000, "name": "Python"},
    {"id": 4500, "name": "Project"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    
    } );
  }

  onSelect(department) 
  {
    //this.router.navigate(['/departments', department.id]);
     this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department) { return department.id === this.selectedId; }
}
