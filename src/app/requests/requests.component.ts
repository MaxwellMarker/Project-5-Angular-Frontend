import { Component, OnInit } from '@angular/core';
import { Request } from '../request';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  
  requests: Request[];

  constructor() { }

  ngOnInit(): void {
  }

}
