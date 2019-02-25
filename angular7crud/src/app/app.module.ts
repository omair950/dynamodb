import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { BusinessService } from './business.service';

@NgModule({
  declarations: [
    AppComponent,
    GstGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [BusinessService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
