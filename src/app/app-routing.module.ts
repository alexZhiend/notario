import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AttorneysComponent } from './pages/attorneys/attorneys.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PracticeAreasComponent } from './pages/practice-areas/practice-areas.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'attorneys', component: AttorneysComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'practice_areas', component: PracticeAreasComponent},
  {path: '**',  pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
