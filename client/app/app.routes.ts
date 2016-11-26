import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers.component';
import { TweetsComponent } from './tweets.component';
import { NothingComponent } from './nothing.component';
// Route Configuration
export const routes: Routes = [
  {
    path: '', redirectTo: '/tweets',
    pathMatch: 'full'
  },
  { path: 'nothing', component: NothingComponent },
  { path: 'followers', component: FollowersComponent },
  { path: 'tweets', component: TweetsComponent },
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

