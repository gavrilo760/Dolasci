import { Component, OnInit } from '@angular/core';
import {Radnik} from '../radnici/Radnik';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import {RadniciService} from '../radnici.service';

@Component({
  selector: 'app-dodaj-radnika',
  templateUrl: './dodaj-radnika.component.html',
  styleUrls: ['./dodaj-radnika.component.css']
})
export class DodajRadnikaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private servis:RadniciService) { }
   
  radnik: Radnik = new Radnik();
  dRodjenja: string = '00/00/0000';
  dZaposlenja: string ='00/00/0000';

  ngOnInit() {
    var par;
    
    
    
    
    
  }

  onSubmit()
  {
    
    
    
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
    
    this.radnik.datumZaposlenja = new Date(ZgodinaN, ZmesecN - 1, ZdanN, 13,15,0,0);


    console.log(this.radnik.datumRodjenja);
    this.servis.add(this.radnik).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/radnici');
    });


  }

}
