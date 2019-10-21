import { Component, OnInit } from '@angular/core';
import {Radnik} from '../radnici/Radnik';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import {RadniciService} from '../radnici.service';
import { Dolazak } from '../Models/Dolazak';
import { DolasciService } from '../dolasci.service';
import { RadnikIspis } from '../radnici/RadnikIspis';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DolazakIspis } from '../Models/DolazakIspis';

@Component({
  selector: 'app-edit-radnik',
  templateUrl: './edit-radnik.component.html',
  styleUrls: ['./edit-radnik.component.css']
})
export class EditRadnikComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private servis:RadniciService, private dolasciServis:DolasciService, private datePipe: DatePipe) { }
   
  radnikIspis: RadnikIspis;
  radnikOriginal: Radnik = new Radnik();
  radnik: Radnik = new Radnik();
  r: Radnik = new Radnik();
  i:string;
  dolasci: Dolazak[] ;
  s:string;
  datumRodjenja: string;
  datumZaposlenja: string;
  dRodjenja: string;
  dZaposlenja: string;
  dolasciIspis: DolazakIspis[];
  
  govno()
  {
    

  }

  ngOnInit() {
    
    this.i = this.route.snapshot.paramMap.get('id');
    console.log(this.i);
    this.getDolasci();
    

    
      
    
    this.servis.radnik.subscribe(data =>{this.radnik = data;
    this.dRodjenja = this.datePipe.transform(this.radnik.datumRodjenja, 'dd/MM/yyyy');
    this.dZaposlenja = this.datePipe.transform(this.radnik.datumZaposlenja, 'dd/MM/yyyy');
    console.log(this.radnik);
  });
    console.log(this.s);
    console.log(this.r);
    let date:Date = new Date()
    
    
  }

  getDolasci()
  {
    let id:string = this.i;
    this.dolasciServis.getByRadnikId(id).subscribe(data => {
      this.dolasci = data;
      if(this.dolasci.length > 0)
      {this.dolasciIspis = [];
        let i:number = 0;
         console.log(this.dolasci);
         for(let d of this.dolasci)
         {
            let ispis = new DolazakIspis();
            ispis.id = d.id;
            ispis.radnikId = d.radnikId;
            ispis.dosaoUvreme = this.datePipe.transform(d.dosaoU, 'HH:mm');
            ispis.otisaoUvreme = this.datePipe.transform(d.otisaoU, 'HH:mm');
            ispis.dosaoUdatum = this.datePipe.transform(d.dosaoU, 'dd/MM/yyyy');
            ispis.otisaoUdatum = this.datePipe.transform(d.otisaoU, 'dd/MM');
            if(d.obrokId == null)
            {
            ispis.obrok = 'ne';
            }
            else{
              ispis.obrok = 'da';
            }
            this.dolasciIspis.push(ispis);
            
         }
         console.log(this.datePipe.transform(this.dolasci[0].otisaoU, 'HH:mm'));
         console.log(this.dolasciIspis);}
      
      
      
      });
  }

  onSubmit()
  {
    
    let id:number = +this.i;
    
    
    let godinaS:string = this.dRodjenja.charAt(6) + this.dRodjenja.charAt(7) + this.dRodjenja.charAt(8) + this.dRodjenja.charAt(9);
    let godinaN:number = 0;
    godinaN =  +godinaS;
    

    let mesecS:string = this.dRodjenja.charAt(3) + this.dRodjenja.charAt(4);
    let mesecN:number = 0;
    mesecN = +mesecS;
    

    let danS:string = this.dRodjenja.charAt(0) + this.dRodjenja.charAt(1);
    let danN:number = 0;
    danN = +danS;
    
    this.radnik.datumRodjenja = new Date(godinaN, mesecN - 1, danN, 13,15,0,0);

    let ZgodinaS:string = this.dZaposlenja.charAt(6) + this.dZaposlenja.charAt(7) + this.dZaposlenja.charAt(8) + this.dZaposlenja.charAt(9);
    let ZgodinaN:number = 0;
    ZgodinaN =  +ZgodinaS;
    

    let ZmesecS:string = this.dZaposlenja.charAt(3) + this.dZaposlenja.charAt(4);
    let ZmesecN:number = 0;
    ZmesecN = +ZmesecS;
    

    let ZdanS:string = this.dZaposlenja.charAt(0) + this.dZaposlenja.charAt(1);
    let ZdanN:number = 0;
    ZdanN = +ZdanS;
    
    this.radnik.datumZaposlenja = new Date(ZgodinaN, ZmesecN - 1, ZdanN, 13,15);


    console.log(this.radnik.datumRodjenja);
    
    this.servis.put(id ,this.radnik).subscribe(data =>{ console.log(data);
      
      this.router.navigateByUrl('/radnici');});
  console.log(this.dRodjenja);
  console.log(this.dZaposlenja);
  }



}
