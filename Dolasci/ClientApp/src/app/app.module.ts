import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RadniciComponent } from './radnici/radnici.component';
import { EditRadnikComponent } from './edit-radnik/edit-radnik.component';
import { FormsModule }   from '@angular/forms';
import { DodajRadnikaComponent } from './dodaj-radnika/dodaj-radnika.component';
import * as $ from 'jquery';
import * as bootstrap from "bootstrap";
import { DatePipe } from '@angular/common';
import { EditDolazakComponent } from './edit-dolazak/edit-dolazak.component';
import { DolasciComponent } from './dolasci/dolasci.component';
import { DodajDolaskeComponent } from './dodaj-dolaske/dodaj-dolaske.component';
import { EditPodrazumevaniDolazakComponent } from './edit-podrazumevani-dolazak/edit-podrazumevani-dolazak.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RadniciComponent,
    EditRadnikComponent,
    DodajRadnikaComponent,
    EditDolazakComponent,
    DolasciComponent,
    DodajDolaskeComponent,
    EditPodrazumevaniDolazakComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
   

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
