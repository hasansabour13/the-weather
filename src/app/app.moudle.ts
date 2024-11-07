import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';//روتینگ
import { FormsModule } from '@angular/forms';//two date binding
import { AppRoutingModule } from './app.routes';//برای روتینگ اضافه میشود
import { WeatherService } from './weather.service';//اسم سرویس .که در providers
import { HttpClientModule } from '@angular/common/http';//برای سرویس استفاده میشود



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,RouterModule,FormsModule,AppRoutingModule,HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
