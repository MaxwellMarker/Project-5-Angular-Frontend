import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Game } from '../game';
import { GameService } from '../game.service';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  
  game: Game;
  
  reviews: Review[]
  
  reviewForm = new FormGroup({
    username: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    rating: new FormControl(),
    gameId: new FormControl('')
  });

  ngOnInit(): void {
    this.getGame()
    this.getReviews()
  }
  
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private reviewService: ReviewService,
    private location: Location
  ) { }

  onSubmit() {
    console.log(this.reviewForm.value)
  }
    
  getGame(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
        .subscribe(game => this.game = game)
  }
  
  getReviews(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.reviewService.getReviews(id)
        .subscribe(reviews => this.reviews = reviews)
  }
}
