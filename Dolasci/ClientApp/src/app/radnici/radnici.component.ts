import { Component, OnInit, Input } from '@angular/core';
import {Radnik} from '../radnici/Radnik';
import {RadnikIspis} from '../radnici/RadnikIspis';
import {RadniciService} from '../radnici.service';
import { forEach } from '@angular/router/src/utils/collection';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-radnici',
  templateUrl: './radnici.component.html',
  styleUrls: ['./radnici.component.css']
})
export class RadniciComponent implements OnInit {

  constructor(private servis: RadniciService,private datepipe: DatePipe) { }
  radnici: Radnik[];
  radniciIspis: RadnikIspis[];
  radnikIspis:RadnikIspis;
  i: number;
  radnik:Radnik = new Radnik();
  
  ngOnInit() {

    
    this.Get();
     
  
  }

    
   Delete(id:number)
  {
      this.servis.deleteRadnik(id).subscribe(data=> {
        console.log(data);
        this.Get();
      });
      
  }

  Get()
  {
    this.servis.getRadnici().subscribe(data => {
      this.radnici = data;
      this.i = 0;
      this.radniciIspis = [];
      for(let e of this.radnici)
      {
        
        this.radnikIspis = new RadnikIspis();
          this.radnikIspis.id = e.id;
          this.radnikIspis.ime = e.ime;
          this.radnikIspis.prezime = e.prezime;
          this.radnikIspis.adresa = e.adresa;
          this.radnikIspis.brojTelefona = e.brojTelefona;
          this.radnikIspis.datumRodjenja =  this.datepipe.transform(e.datumRodjenja, 'dd/MM/yyyy');
          this.radnikIspis.datumZaposlenja = this.datepipe.transform(e.datumZaposlenja, 'dd/MM/yyyy');
          this.radnikIspis.aktivan = e.aktivan;
         this.radniciIspis.push(this.radnikIspis);
         this.i = this.i + 1;
         
        
      }
      
      console.log(this.radniciIspis);
    });
  }

  

  prebaci(id:number)
  {
    let r: Radnik = new Radnik();

    for(let l of this.radnici)
    {
        if(l.id == id)
        {
          r = l;
        }
    }
    
    this.servis.prebaci(r);
  }

  
}
