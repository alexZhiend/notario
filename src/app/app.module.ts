import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FondoComponent } from './shared/fondo/fondo.component';
import { AboutComponent } from './pages/about/about.component';
import { AttorneysComponent } from './pages/attorneys/attorneys.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PracticeAreasComponent } from './pages/practice-areas/practice-areas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    FondoComponent,
    AboutComponent,
    AttorneysComponent,
    ContactComponent,
    PracticeAreasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
