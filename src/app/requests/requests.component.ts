import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Request } from '../request';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  requests: Request[];

  requestForm = new FormGroup({
    title: new FormControl('', Validators.required),
    message: new FormControl('')
  });

  constructor( private requestService: RequestService ) { }

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(): void {
    this.requestService.getRequests()
        .subscribe(requests => this.requests = requests)
  };

  onSubmit(): void {
    this.requestForm.value.username = localStorage.username || "anonymous";
    this.addRequest(this.requestForm.value);
    this.requestForm.reset();
  };

  addRequest(request: Request): void {
    this.requestService.addRequest( request as Request)
        .subscribe(request => { this.requests.unshift(request)})
  }
}
