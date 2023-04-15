import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'dash', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'faculty', component: FacultyComponent},
  {path: 'contact', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
