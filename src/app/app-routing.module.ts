import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: GreetingComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsContainerComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
