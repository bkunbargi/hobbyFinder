import { Result } from './result.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyAgw_tvdrP-1fdMDNj4cnUK3hgrD4SXE2c';
  apiUrl : string = 'https://www.googleapis.com/youtube/v3/search';
  constructor(public http: HttpClient) { }

    getVideoSearchResults(searchQuery): Observable<Object> {
    console.log(`Looking for videos about ${searchQuery}`)
    const params: string = [
      `q=${searchQuery}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=9`
    ].join('&')
    const queryUrl = `${this.apiUrl}?${params}`
    return this.http.get(queryUrl)
      .pipe(map((res) => {
        return <any>res['items'].map(item => {
          return new Result({
            id: item.id.videoId,
            title: item.snippet.title,
            desc: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          })
        })
      }))
  }

  
}




