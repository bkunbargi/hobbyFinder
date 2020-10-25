import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivityPrefs } from '../app/model/activityprefs';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityServiceService {

  url: string = 'http://localhost:3000/';

  getParamsUrl: string = 'http://localhost:3000/getactivity'

  printActivity(activityprefs: ActivityPrefs) {
    //Log user data in console
    console.log("Day: " + activityprefs.day);
    console.log("Night: " + activityprefs.night);
    console.log("Indoor: " + activityprefs.indoor);
    console.log("Outdoors: " + activityprefs.outdoor);
    console.log("Date: " + activityprefs.date);
} 
  constructor(private http: HttpClient) { }

  hitBackEnd(activityprefs:ActivityPrefs){
    return this.http.get(this.url)
  }

  sendParamsBack(activityprefs:ActivityPrefs): Observable<any> {
      let params = new HttpParams();
      params = params.append("Indoor", String(activityprefs.indoor.toString()));
      params = params.append("Outdoor", String(activityprefs.outdoor.toString()));
      params = params.append("Day", String(activityprefs.day.toString()));
      params = params.append("Night", String(activityprefs.night.toString()));
      params = params.append("Date", String(activityprefs.date.toString()));
    return this.http.get(this.getParamsUrl, {params: params,responseType:'json'})
  }


}











