import { Component, OnInit } from '@angular/core';
import { DolasciService } from '../dolasci.service';
import { Dolazak } from '../Models/Dolazak';
import { DolazakIspis } from '../Models/DolazakIspis';
import { DatePipe } from '@angular/common';
import { Radnik } from '../radnici/Radnik';
import { RadniciService } from '../radnici.service';
import { Konvertovanje } from '../konvertovanje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dolasci',
  templateUrl: './dolasci.component.html',
  styleUrls: ['./dolasci.component.css']
})
export class DolasciComponent implements OnInit {

  idZaBrisanje:number;
  konvertovanje: Konvertovanje = new Konvertovanje();
  dolasci:Dolazak[];
  dolasciIspis: DolazakIspis[];
  dolasciPretraga: DolazakIspis[];
  radnici: Radnik[];
  radnik: Radnik = null;
  radnikId: number = 0;
  ispis: DolazakIspis = new DolazakIspis();
  broj: number;
  godina: number = new Date().getFullYear();
  mesec: number = new Date().getMonth() + 1;
  dolazak: Dolazak = new Dolazak();
  dan: number = new Date().getDate();
  isActive: boolean ;
  ime: string = "stefan";

  constructor(private servis: DolasciService, private servisRadnici: RadniciService, private datePipe:DatePipe, private router: Router) { }
  checkiran: boolean = false;
  
  prikaziModal()
  {
    let i: number = 0;
    for(let k of this.dolasciIspis)
    {
      if(k.checkiran == true)
      i++;
    }
    if(i != 0)
    $('#brisiModal').modal('show');
  }

  brisiJednog(id:number)
  {
    this.idZaBrisanje = id;
  }


  brisiModalJednog()
  {
    if(this.idZaBrisanje != null)
    {
      this.servis.delete(this.idZaBrisanje).subscribe(data=> {
        this.idZaBrisanje = null;
        this.Get();
      });
      $('#brisiModalJednog').modal('hide');
    }
  }

  brisiModal()
  {
    
    for(let i of this.dolasciIspis)
    {
      if(i.checkiran == true)
      {
        for(let d of this.dolasci)
        {
          if(d.id == i.id)
          {
            this.servis.delete(d.id).subscribe(data=> {
              
              this.Get();
            });
            this.Get();
          }
        }
      }
    }
    
    $('#brisiModal').modal('hide');
  }

  

  

 

  odabir(id: number, radnikId: number, dosaoUdatum: string, dosaoUvreme: string , otisaoUdatum: string , otisaoUvreme: string, obrok: string)
  {
    this.ispis = new DolazakIspis();
    this.broj = id;
    this.ispis.id = id;
    this.ispis.radnikId = radnikId;
    this.ispis.dosaoUvreme = dosaoUvreme;
    this.ispis.dosaoUdatum = dosaoUdatum;
    this.ispis.otisaoUdatum = otisaoUdatum;
    this.ispis.otisaoUvreme = otisaoUvreme;
    
    if(obrok == 'da')
    {
      this.ispis.obrok = 'da';
      this.isActive = true;

    }
    else
    {
      this.ispis.obrok = 'ne';
      this.isActive = false;
    }
    
    console.log(this.ispis.obrok);
  }

  closeModal()
  {
    
  }

  
  glavniCheckbox()
  {
   
   
     for(let p of this.dolasciIspis)
     {
       if(this.checkiran == true)
       {
         p.checkiran = true;
         
       }
       if(this.checkiran == false)
       {
         p.checkiran = false;
       }
       
       
     
   }
  }
  unesi()
   {
    let d:Dolazak;
     for(let c of this.dolasciIspis)
     {
       if(c.checkiran == true)
       {
        d = new Dolazak();
        d.id = c.id;
        d.radnikId = c.radnikId;
        d.dosaoU = this.servis.Udate(c.dosaoUdatum, c.dosaoUvreme);
        d.otisaoU = this.servis.Udate(c.otisaoUdatum, c.otisaoUvreme);

   

    if(c.obrok == 'da')
    {
      d.obrokId = 1;
    
    }
    if(c.obrok == 'ne')
    {
      d.obrokId = null;
    }
    console.log(d);
    this.servis.post(d).subscribe(data=> {
      console.log(data);
             });
     
      } };
   }

  Get()
  {
    let id: number;
    if(this.radnikId == null || this.radnikId == 0)
    {
      id = null;
    }

    else
    {
      id = this.radnikId;
    }

    
    
    this.servis.getByPretraga(this.godina, this.mesec, this.dan, id).subscribe(data => {
      this.dolasci = data;
      
      
        this.dolasciIspis = [];
        let i:number = 0;
         
         for(let d of this.dolasci)
         {
            let ispis = new DolazakIspis();
            ispis.id = d.id;
            ispis.radnikId = d.radnikId;
            ispis.dosaoUvreme = this.datePipe.transform(d.dosaoU, 'HH:mm');
            ispis.otisaoUvreme = this.datePipe.transform(d.otisaoU, 'HH:mm');
            ispis.dosaoUdatum = this.datePipe.transform(d.dosaoU, 'dd/MM/yyyy');
            ispis.otisaoUdatum = this.datePipe.transform(d.otisaoU, 'dd/MM/yyyy');
            ispis.radnikIme = d.radnik.ime + " " + d.radnik.prezime;
            ispis.checkiran = false;
            
            if(d.obrokId == null)
            {
            ispis.obrok = 'ne';
            }
            else
            {
              ispis.obrok = 'da';
            }
            this.dolasciIspis.push(ispis);
            
         }
         
    
  });

  this.servisRadnici.getRadnici().subscribe(data => {
    this.radnici = data;
  });
  }

  onSubmit()
  {
    this.dolazak = new Dolazak();
    if(this.isActive == true)
    {
    this.dolazak.obrokId = 1;
    }

    else
    {
    this.dolazak.obrokId = null;
    }
    $('#exampleModal').modal('hide');
    

    this.dolazak.dosaoU = this.konvertovanje.uDatum(this.ispis.dosaoUdatum, this.ispis.dosaoUvreme);
    this.dolazak.otisaoU = this.konvertovanje.uDatum(this.ispis.otisaoUdatum, this.ispis.otisaoUvreme);
    this.dolazak.radnikId = this.ispis.radnikId;
    this.dolazak.id = this.ispis.id;
   

    
    
    
    
    this.servis.put(this.dolazak.id, this.dolazak).subscribe(data=> {
      console.log(data);
      this.Get();
    });

    
  }

  ngOnInit() {
    this.Get();
    

}}
