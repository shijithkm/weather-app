import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {

   public API:string;
   public API_KEY:string; 

   constructor(private http:HttpClient) {
     this.API ='https://api.openweathermap.org/data/2.5';
     this.API_KEY = '3026b42c5f7ac357146fa4722721b4f8';
   }

  getCurrentWeather(lat,log){

    let url = `${this.API}/weather?lat=${lat}&lon=${log}&appid=${this.API_KEY}&units=metric&type=accurate`;
    return this.http.get(url);

  }

  getWeatherForecast(lat,log):Observable<any[]>{

    let url = `https://openweathermap.org/data/2.5/forecast/daily/?appid=b6907d289e10d714a6e88b30761fae22&id=1277333&units=metric`;
    return this.http.get(url)
       .map(response => response)
       .catch(this.handleError);

  }

  /**
   * Callback function for catching AJAX call error
   *
   * @param {any} error error object
   * @returns throws error message
   */
  private handleError(error: any) {
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    return Observable.throw(errMsg);
  }


}