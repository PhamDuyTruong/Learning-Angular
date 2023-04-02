import { HttpService } from './../../services/http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRating = 0;
  gameId: string | undefined;
  game: Game | undefined;
  routeSub: Subscription | undefined;
  gameSub: Subscription | undefined;

  constructor(
    private activatedSub: ActivatedRoute,
    private httpService: HttpService
  ){

    }
    ngOnInit(): void {
      this.routeSub = this.activatedSub.params.subscribe((params: Params) => {
        this.gameSub = params['id'];
        this.getGameDetails(this.gameId!)
      })
    };

    getGameDetails(id: string): void{
      this.gameSub = this.httpService.getGameDetails(id).subscribe((gameRes: Game) => {
        this.game = gameRes;
        setTimeout(() => {
            this.gameRating =  Number(this.game?.metacritic);
        }, 2000)
      })
    };

    getColor(value: number): string {
      if (value > 75) {
        return '#5ee432';
      } else if (value > 50) {
        return '#fffa50';
      } else if (value > 30) {
        return '#f7aa38';
      } else {
        return '#ef4655';
      }
    }

    ngOnDestroy(): void {
      if (this.gameSub) {
        this.gameSub.unsubscribe();
      }

      if (this.routeSub) {
        this.routeSub.unsubscribe();
      }
    }
}
