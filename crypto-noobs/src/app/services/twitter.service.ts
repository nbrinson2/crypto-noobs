import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import * as Tweet from 'twit';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${environment.twitterBearerToken}`
  }),
};

const tweet: any = new Tweet({
  consumer_key: 's3l6HTtow1SrxYpoEMrEqmWoa',
  consumer_secret: 'wavb5EZoRSbLU50j7GiUiYbnQ24QnuBkuG2AZZcouOU9FZECA',
  access_token: '1378804488065011712-2HFIEUQHHRV91btdTGtZAJrU1fyDG2',
  access_token_secret: 'TY7xTjE4JrA0umUEaFt8MxeJJV6yzzigF4WFhqAAhTPRH',
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
})

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }

  getTweets(): Observable<any[]> {
    return tweet.get('search/tweets', { q: 'banana since:2021-03-11', count: 100 });

  }



}


// api_key = s3l6HTtow1SrxYpoEMrEqmWoa
// api_secret = zwavb5EZoRSbLU50j7GiUiYbnQ24QnuBkuG2AZZcouOU9FZECA
// access_token = 1378804488065011712-2HFIEUQHHRV91btdTGtZAJrU1fyDG2
// access_secret = TY7xTjE4JrA0umUEaFt8MxeJJV6yzzigF4WFhqAAhTPRH