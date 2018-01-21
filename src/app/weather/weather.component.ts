import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public forecast:any;
  public current = new Weather(
    'Bangalore',
    '30',
    'https://openweathermap.org/img/w/01d.png',
    'Sunny',
    '30',
    '50');

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {

   navigator.geolocation.getCurrentPosition((pos)=>{

    this.weatherService.getCurrentWeather(pos.coords.latitude,pos.coords.longitude)
    .subscribe((data:any)=>{
      
      this.current = new Weather(
        data.name,
        data.main.temp,
        data.weather[0].icon,
        data.weather[0].description,
        data.main.temp_min,
        data.main.temp_max
        );
      });

      this.weatherService.getWeatherForecast(pos.coords.latitude,pos.coords.longitude)
      .subscribe((data)=>{
        this.forecast = data;
        console.log(data);
      })

    });
    

  }

}