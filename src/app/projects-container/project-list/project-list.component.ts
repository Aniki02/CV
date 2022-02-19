import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  @Input() public projects: Project[] = [];

  constructor() {}

  ngOnInit(): void {}
}
