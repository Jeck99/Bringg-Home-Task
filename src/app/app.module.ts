import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Pipe, PipeTransform } from '@angular/core';
import {HttpModule}from '@angular/http'
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {ReactiveFormsModule, FormsModule}from '@angular/forms'
import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,HttpModule,
    ReactiveFormsModule,FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_I_ve6fR_HLeFBMfoXr8w6fgxfhHB9p0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
