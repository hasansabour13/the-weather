import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCity: string = 'Tehran';
  weatherInfo: any;

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    this.weatherService.getWeather(this.selectedCity).subscribe(
      (data) => {
        console.log(data); // لاگ داده‌ها برای بررسی ساختار
        this.weatherInfo = data.data[0];
        this.setCityImage(); // داده‌ها داخل آرایه‌ای در فیلد data قرار دارند
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }



  cityImage!: string; // متغیر برای ذخیره آدرس تصویر شهر

  setCityImage() {
    switch (this.selectedCity) {
      case 'Tehran':
        this.cityImage = 'assets/back.jpg';
        break;
      case 'Los Angeles':
        this.cityImage = 'public/back.jpg';
        break;
      case 'New York':
        this.cityImage = 'assets/back.jpg';
        break;
      case 'London':
        this.cityImage = 'assets/b3.jpg';
        break;
      case 'Tokyo':
        this.cityImage = 'assets/back.jpg';
        break;
      default:
        this.cityImage = '';
    }
  }





}
