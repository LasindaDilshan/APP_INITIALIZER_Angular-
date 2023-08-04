import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { interval, take } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitializerModule } from './initializer/initializer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InitializerModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   multi: true,
    //   useValue : ()=>{
    //     console.log("abv");
    //     return interval(1000).pipe(take(1));
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
