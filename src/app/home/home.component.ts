import { Component, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, CommonModule } from '@angular/common';

import { Game } from '../game';
import { GameService } from '../game.service';
import { Review } from '../review';
import { ReviewService } from '../review.service';
import { CoverDirective } from '../cover.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  games: Game[];
  carouselIndex: number;
  carouselCover: string;
  @ViewChildren(CoverDirective) cover;
  
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private reviewService: ReviewService,
    private location: Location
    ) { }
    
    ngOnInit(): void {
      this.getGames();
      this.carouselIndex = 0;
      this.setCarousel();
  }
  setCarousel(): void {
    setTimeout(() => {
      this.cover.first.coverOn()
    }, 6300);
    setTimeout(() => {
      if(this.carouselIndex === 0){
        this.carouselIndex = 1;
      }else if(this.carouselIndex === 1){
        this.carouselIndex = 0
      }
      this.cover.first.coverOff()
      this.setCarousel()
    }, 7000);
  }
  getGames(): void {
    this.gameService.getGames()
        .subscribe(games => this.games = games.sort((a, b) => {
          if(a.name > b.name){
            return 1
          }
          if(b.name > a.name){
            return -1
          }
          return 0
        }));
  }
}
