import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ActivityServiceService } from './activity-service.service';
import { YoutubeService } from './youtube.service'



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ActivityFormComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ActivityServiceService,YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
