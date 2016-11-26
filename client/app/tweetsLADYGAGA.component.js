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
var core_1 = require('@angular/core');
var twitter_service_1 = require('./twitter.service');
var TweetsLADYGAGAComponent = (function () {
    function TweetsLADYGAGAComponent(_TwitterService) {
        this._TwitterService = _TwitterService;
        this.mode = 'Observable';
    }
    TweetsLADYGAGAComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._TwitterService.getTweetsLADYGAGA()
            .subscribe(function (tweets) { return _this.tweets = tweets; }, function (error) { return _this.errorMessage = error; });
    };
    TweetsLADYGAGAComponent = __decorate([
        core_1.Component({
            selector: 'tweets',
            templateUrl: 'app/tweets.component.html',
            styleUrls: ['app/tweets.component.css']
        }), 
        __metadata('design:paramtypes', [twitter_service_1.TwitterService])
    ], TweetsLADYGAGAComponent);
    return TweetsLADYGAGAComponent;
}());
exports.TweetsLADYGAGAComponent = TweetsLADYGAGAComponent;
//# sourceMappingURL=tweetsLADYGAGA.component.js.map