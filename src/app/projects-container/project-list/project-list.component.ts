import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  public projects: Project[] = [
    {
      title: 'Project 1',
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click Edit Text or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      img: '../../assets/xml.jpg',
    },
    {
      title: 'Project 2',
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click Edit Text or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      img: '../../assets/xml.jpg',
    },
    {
      title: 'Project 3',
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click Edit Text or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      img: '../../assets/xml.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
