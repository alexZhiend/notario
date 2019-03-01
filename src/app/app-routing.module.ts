import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AttorneysComponent } from './pages/attorneys/attorneys.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PracticeAreasComponent } from './pages/practice-areas/practice-areas.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'attorneys', component: AttorneysComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'practice-areas', component: PracticeAreasComponent},
  {path: '**',  pathMatch: 'full', redirectTo: 'inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})


export class AppRoutingModule {}
