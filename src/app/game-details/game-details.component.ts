import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, CommonModule } from '@angular/common';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  
  game: Game;
  
  ngOnInit(): void {
    this.getGame()
  }
  
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }  
    
  getGame(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
        .subscribe(game => this.game = game)
  }
  
}
