import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import data from '../../../assets/projects.json';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = data as Project[];

  constructor() {}

  public get(index: number): Project {
    return this.projects[index];
  }

  public getAll(): Project[] {
    return this.projects;
  }
}
