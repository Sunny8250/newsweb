import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //news api url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fb6ba0191e7a43c78652199699f328e9"

  //tech news api url
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fb6ba0191e7a43c78652199699f328e9";
  
  
  //sports news api url
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=fb6ba0191e7a43c78652199699f328e9";
  
  //health news api url
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=fb6ba0191e7a43c78652199699f328e9";


  //top heading
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }


  //tech news
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  //sports news
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }

  //health news
  healthNews():Observable<any>
  {
    return this._http.get(this.healthApiUrl);
  }

}
