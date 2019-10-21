import { Component, OnInit } from '@angular/core';
import { Dolazak } from '../Models/Dolazak';
import { DolasciService } from '../dolasci.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DolazakIspis } from '../Models/DolazakIspis';
import { DatePipe } from '@angular/common';
import { elementStyleProp } from '@angular/core/src/render3';
import { Konvertovanje } from '../konvertovanje';


@Component({
  selector: 'app-edit-dolazak',
  templateUrl: './edit-dolazak.component.html',
  styleUrls: ['./edit-dolazak.component.css']
})
export class EditDolazakComponent implements OnInit {

  konvertovanje: Konvertovanje = new Konvertovanje();
  dolazak: Dolazak = new Dolazak();
  ispis: DolazakIspis = new DolazakIspis();
  i: string;
  isActive = true;
  idRadnik: number;

  constructor(private servis: DolasciService,private router: Router, private datePipe: DatePipe,  private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.i = this.route.snapshot.paramMap.get('id');
    console.log(this.dolazak);
    this.servis.getById(this.i).subscribe(data => {
      this.dolazak = data;
      this.idRadnik = this.dolazak.radnikId;
      console.log(this.dolazak);
      this.ispis.dosaoUvreme = this.datePipe.transform(this.dolazak.dosaoU, 'HH:mm');
      this.ispis.otisaoUvreme = this.datePipe.transform(this.dolazak.otisaoU, 'HH:mm');
      this.ispis.dosaoUdatum  = this.datePipe.transform(this.dolazak.dosaoU, 'dd/MM/yyyy');
      this.ispis.otisaoUdatum  = this.datePipe.transform(this.dolazak.otisaoU, 'dd/MM/yyyy');
    });
      
    
    
  }

  onSubmit()
  {
    if(this.isActive == true)
    {
    this.dolazak.obrokId = 1;
    }

    else
    {
    this.dolazak.obrokId = null;
    }

    

    this.dolazak.dosaoU = this.konvertovanje.uDatum(this.ispis.dosaoUdatum, this.ispis.dosaoUvreme);
    this.dolazak.otisaoU = this.konvertovanje.uDatum(this.ispis.otisaoUdatum, this.ispis.otisaoUvreme);

   

    console.log(this.ispis);
    console.log(this.dolazak);
    
    let id: number = +this.i;
    
    this.servis.put(id, this.dolazak).subscribe(data=> {
      console.log(data);
      this.router.navigate(['/radnici/edit', this.idRadnik]);
    });
  }

}
