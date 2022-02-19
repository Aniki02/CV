import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './projects-container/project/project.component';
import { ProjectListComponent } from './projects-container/project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GreetingComponent,
    ResumeComponent,
    ProjectsContainerComponent,
    ContactComponent,
    ProjectComponent,
    ProjectListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
