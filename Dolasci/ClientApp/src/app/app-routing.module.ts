import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RadniciComponent} from './radnici/radnici.component';
import {EditRadnikComponent} from './edit-radnik/edit-radnik.component';
import {DodajRadnikaComponent} from './dodaj-radnika/dodaj-radnika.component';
import { EditDolazakComponent } from './edit-dolazak/edit-dolazak.component';
import { DolasciComponent } from './dolasci/dolasci.component';
import { DodajDolaskeComponent } from './dodaj-dolaske/dodaj-dolaske.component';
import { EditPodrazumevaniDolazakComponent } from './edit-podrazumevani-dolazak/edit-podrazumevani-dolazak.component';


const routes: Routes = [{path:'', redirectTo:'dolasci', pathMatch: 'full'},{path:'dolasci/novi', component:DodajDolaskeComponent},{path:'dolasci/editPodrazumevani/:id', component:EditPodrazumevaniDolazakComponent},{path:'dolasci', component:DolasciComponent},{path: 'dolasci/edit/:id', component:EditDolazakComponent}, {path: 'radnici', component: RadniciComponent}, {path: 'radnici/edit/:id', component: EditRadnikComponent}, {path: 'radnici/novi', component: DodajRadnikaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
