import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
import { SearchweatherComponent } from './weather/searchweather/searchweather.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WeatherService } from './weather/weather.service';

import { CommonModule } from '@angular/common';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule , 
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(
      [
        {path:'',component:WeatherComponent},
        {path:'search',component:SearchweatherComponent},
        {path:"**",component:PagenotfoundComponent}
      ])
    ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, WeatherComponent, SearchweatherComponent, PagenotfoundComponent,	 ],
  bootstrap:    [ AppComponent ],
  entryComponents : [WeatherComponent],
  providers: [WeatherService]
})
export class AppModule { }
