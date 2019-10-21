import { Radnik } from '../radnici/Radnik';
import { DolasciService } from '../dolasci.service';

export class Dolazak
{
    
    constructor( id?:number, dosaoU?: Date, otisaoU?: Date, radnikId?: number, obrokId?: number, radnik? :Radnik)
    {
        try{
        
        this.id = id;
        this.dosaoU = dosaoU;
        this.otisaoU = otisaoU;
        this.radnikId = radnikId;
        this.obrokId = obrokId;
        this.radnik = radnik;
        /**
         *  this.dosaoUdatum  = servis.UstringDatum(this.dosaoU);
        this.dosaoUvreme = servis.UstringVreme(this.dosaoU);
        this.otisaoUvreme = servis.UstringVreme(this.otisaoU);
        this.otisaoUdatum = servis.UstringDatum(this.otisaoU);
         */
       
        this.radnikIme = this.radnik.ime + " " + this.radnik.prezime;
        }
        catch(e)
        {

        }
    }
    id: number;
    dosaoU: Date;
    otisaoU: Date;
    radnikId: number;
    obrokId: number;
    radnik :Radnik;
    dosaoUvreme: string;
    otisaoUvreme: string;
    dosaoUdatum: string;
    otisaoUdatum: string;
    obrok: string;
    radnikIme: string;
    checkiran: boolean;
}