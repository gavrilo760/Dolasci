import { Component, OnInit } from '@angular/core';
import { Dolazak } from '../Models/Dolazak';
import { DolazakIspis } from '../Models/DolazakIspis';
import { DolasciService } from '../dolasci.service';
import { DatePipe } from '@angular/common';
import { checkiraniDolazak } from '../Models/checkiraniDolazak';
import { ChildActivationStart } from '@angular/router';
import { Konvertovanje } from '../konvertovanje';
import { Radnik } from '../radnici/Radnik';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dodaj-dolaske',
  templateUrl: './dodaj-dolaske.component.html',
  styleUrls: ['./dodaj-dolaske.component.css']
})
export class DodajDolaskeComponent implements OnInit {

  dolasciUnos: Dolazak[];
  konvertovanje: Konvertovanje = new Konvertovanje();
  dolasci:Dolazak[];
  dolasciIspis: DolazakIspis[];
  dolasciPretraga: DolazakIspis[];
  radnici: Radnik[];
  radnik: Radnik = null;
  ispisi: DolazakIspis[];
  ispis: DolazakIspis = new DolazakIspis;
  broj: number;
  godina: number = new Date().getFullYear();
  mesec: number = new Date().getMonth() + 1;
  dolazak: Dolazak = new Dolazak();
  dan: number = new Date().getDate();
  isActive: boolean ;
  
  checkiran: boolean = false;
  checkiraniDolasci: DolazakIspis[];
  

  constructor(private servis:DolasciService, private datePipe:DatePipe, private router: Router) {
    
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
   Get()
   {
    this.servis.getPodrazumevani().subscribe(data =>{
      this.dolasci = data;
      console.log(this.dolasci);
      this.ispisi = [];
      for(let d of this.dolasci)
      {
        let i:DolazakIspis = new DolazakIspis();
        i.id = d.id;
        i.radnikId = d.radnikId;
        i.radnikIme = d.radnik.ime + ' ' + d.radnik.prezime;
        i.dosaoUvreme = this.servis.UstringVreme(d.dosaoU);
        i.otisaoUvreme = this.servis.UstringVreme(d.otisaoU);
        i.dosaoUdatum = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
        i.otisaoUdatum = this.servis.UstringDatum(new Date());
        i.checkiran = false;
        if(d.obrokId != null)
        {
          i.obrok = 'da';
        }
        else{
          i.obrok = 'ne';
        }
        this.ispisi.push(i);
      }

    });
   }

   Delete(id:number)
  {
      this.servis.deletePodrazumevani(id).subscribe(data=> {
        console.log(data);
        this.Get();
      });
      
  }

   glavniCheckbox()
   {
    
    
      for(let p of this.ispisi)
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
   

    
    
    
    
    this.servis.putPodrazumevani(this.dolazak.id, this.dolazak).subscribe(data=> {
      console.log(data);
      this.Get();
    });

    
  }

   dodaj(id: number)
   {
    if(this.checkiraniDolasci == null)
      this.checkiraniDolasci = [];
     
      let b:boolean = false;
     
     


    
     console.log();
   }

   unesi()
   {
    let d:Dolazak;
     for(let c of this.ispisi)
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
      this.router.navigateByUrl('/dolasci');
             });
     
      } };
   }

  ngOnInit() {
    this.Get();
  }

}
