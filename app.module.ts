import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {DataDrivenComponent} from './data-driven.component'; 
import { AppComponent } from './app.component';
import {FormserviceService} from './formservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
    
  ],
  providers: [FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
