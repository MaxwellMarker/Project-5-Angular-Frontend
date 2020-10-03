import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { Validators, FormControl, FormGroup } from '@angular/forms';

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
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    rating: new FormControl(5, Validators.required)
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
  addReview(review: Review): void {
    this.reviewService.addReview( review as Review)
        .subscribe(review => { this.reviews.unshift(review)})
  }
  onSubmit() {
    this.reviewForm.value.gameId = this.game._id
    this.reviewForm.value.username = localStorage.username || "anonymous"
    this.addReview(this.reviewForm.value)
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
