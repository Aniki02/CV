import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() public project: Project = { title: '', description: '', img: '' };
  constructor() {}

  ngOnInit(): void {}
}
