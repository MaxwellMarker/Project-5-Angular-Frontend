import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentPage: string;

  constructor(
    private location: Location
  ) { };

  ngOnInit(): void {
    this.currentPage = this.location.path();
  };

  onSelect(page): void {
    this.currentPage = page;
  };

}
