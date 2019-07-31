import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcodeapp',
  templateUrl: './qrcodeapp.component.html',
  styleUrls: ['./qrcodeapp.component.css']
})
export class QrcodeappComponent implements OnInit {
  vCardData:string='';
  constructor() { }

  ngOnInit() {
    let name='bunny',
    surname='shah',
    org='kalptaru furniture';
    

    this.vCardData = `BEGIN:VCARD
VERSION:3.0
N:${name} ${surname}
ORG:${org}
END:VCARD
`
  }
  ngAfterViewInit(){

  }
}
