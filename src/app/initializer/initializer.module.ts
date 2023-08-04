import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, take } from 'rxjs';
import { ConfigService } from './config.service';



@NgModule({
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory : (config: ConfigService)=>{
        return ()=>
        {
          config.fetchEndpointmethods();
          return config.api$.pipe(take(1));

        }
      }
      ,
      deps : [ConfigService]
    }
  ]
})
export class InitializerModule { }
