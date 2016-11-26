"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ====== ./app/app.module.ts ======
// Imports
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Declarations
var app_component_1 = require('./app.component');
var nothing_component_1 = require('./nothing.component');
var followers_component_1 = require('./followers.component');
var tweets_component_1 = require('./tweets.component');
var twitter_service_1 = require('./twitter.service');
var twitter_dates_pipe_1 = require('./twitter-dates.pipe');
var app_routes_1 = require('./app.routes');
// Decorator
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routes_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                nothing_component_1.NothingComponent,
                followers_component_1.FollowersComponent,
                tweets_component_1.TweetsComponent,
                twitter_dates_pipe_1.TwitterDatePipe,
                twitter_dates_pipe_1.TwitterDateWithTimePipe
            ],
            providers: [
                twitter_service_1.TwitterService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map