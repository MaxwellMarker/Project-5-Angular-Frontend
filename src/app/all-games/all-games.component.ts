import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  games: Game[];
  
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
