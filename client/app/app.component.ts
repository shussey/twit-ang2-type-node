import { Component } from '@angular/core';

import { TwitterService } from './twitter.service';
import { FollowersComponent } from './followers.component';
import { TweetsComponent } from './tweets.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  //template: '<h1>Hello Angular!</h1>',
  styleUrls: ['app/app.component.css'],
  providers: [ 
    TwitterService 
    ]
})


export class AppComponent {
  title = 'Twitter server in Node.js and client in Angular2 with Typescript';
}