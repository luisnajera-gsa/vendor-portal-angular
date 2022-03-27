import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-information',
  templateUrl: './corporate-information.component.html',
  styleUrls: ['./corporate-information.component.css']
})
export class CorporateInformationComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;
  
  sectionName = "Corporate Information";

  constructor() { }

  ngOnInit(): void {
  }

}
