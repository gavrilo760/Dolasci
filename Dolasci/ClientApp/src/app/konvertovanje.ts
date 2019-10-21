export class Konvertovanje {
    uDatum(datum: string, vreme: string)
{
    let punDatum: Date;

    let satDolaska:string = vreme.charAt(0) + vreme.charAt(1);
    let satDolaskan:number = 0;
    satDolaskan =  +satDolaska;
    

    let minutDolaska:string = vreme.charAt(3) + vreme.charAt(4);
    let minutDolaskan:number = 0;
    minutDolaskan = +minutDolaska;

    let godinaS:string = datum.charAt(6) + datum.charAt(7) + datum.charAt(8) + datum.charAt(9);
    let godinaN:number = 0;
    godinaN =  +godinaS;
    

    let mesecS:string = datum.charAt(3) + datum.charAt(4);
    let mesecN:number = 0;
    mesecN = +mesecS;
    

    let danS:string = datum.charAt(0) + datum.charAt(1);
    let danN:number = 0;
    danN = +danS;

    punDatum = new Date();
    punDatum.setUTCFullYear(godinaN, mesecN - 1, danN);
    punDatum.setUTCHours(satDolaskan, minutDolaskan);

    return punDatum;
}
}
