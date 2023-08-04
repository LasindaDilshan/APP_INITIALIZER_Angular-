import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { ConfigService } from './initializer/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_inizilizer';
  constructor(public config : ConfigService , private http: HttpClient)
  {

  }
  ngOnInit()
  {
    // this.config.api$.pipe(
    //   switchMap(url => this.http.get(`${url}/users`))
    // ).subscribe()
    console.log(this.config.api);
    console.log(this.config.webSocketUrl);
  }
}
