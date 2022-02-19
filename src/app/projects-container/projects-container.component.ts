import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/interfaces/project.interface';
import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss'],
})
export class ProjectsContainerComponent implements OnInit {
  public projects: Project[] = [];
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getAll();
  }
}
