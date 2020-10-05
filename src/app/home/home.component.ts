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
  topGames: Game[];
  recentGames: Game[];
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
      this.getTopGames();
      this.getRecentGames();
  }
  setCarousel(): void {
    setTimeout(() => {
      this.cover.first.coverOn()
    }, 5300);
    setTimeout(() => {
      if(this.carouselIndex === 0){
        this.carouselIndex = 2;
      }else if(this.carouselIndex === 2){
        this.carouselIndex = 3
      }else if(this.carouselIndex === 3){
        this.carouselIndex = 0
      }
      this.cover.first.coverOff()
      this.setCarousel()
    }, 6000);
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
  getTopGames(): void {
    this.gameService.getGames()
        .subscribe(games => this.topGames = games.sort((a, b) => {
          return b.rating - a.rating
        }));
  }
  getRecentGames(): void {
    this.gameService.getGames()
        .subscribe(games => this.recentGames = games.sort((a, b) => {
          return Date.parse(b.createdAt) - Date.parse(a.createdAt)
        }));
  }
}
