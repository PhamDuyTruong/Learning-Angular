import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import {Game, APIResponse} from '../models';
import {environment as env} from 'src/environments/environments'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>>{
    let params = new HttpParams().set('ordering', ordering);

    if(search){
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params
    })

  };

  getGameDetails(id: string): Observable<Game>{
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    // const gameTrailersRequest = this.http.get(
    //   `${env.BASE_URL}/games/${id}/movies`
    // );
    // const gameScreenshotsRequest = this.http.get(
    //   `${env.BASE_URL}/games/${id}/screenshots`
    // );

    return forkJoin({
        gameInfoRequest,
    }).pipe(map((res: any)=> {
      return {
          ...res['gameInfoRequest'],
          screenshots: res['gameScreenshotsRequest']?.results,
          trailers: res['gameTrailersRequest']?.results,
      }
    }))
  }
}
