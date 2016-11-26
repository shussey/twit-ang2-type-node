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
var FollowersNASAComponent = (function () {
    function FollowersNASAComponent(_TwitterService) {
        this._TwitterService = _TwitterService;
        this.mode = 'Observable';
    }
    FollowersNASAComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._TwitterService.getFollowersNASA()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    FollowersNASAComponent = __decorate([
        core_1.Component({
            selector: 'followers',
            templateUrl: 'app/followers.component.html',
            styleUrls: ['app/followers.component.css']
        }), 
        __metadata('design:paramtypes', [twitter_service_1.TwitterService])
    ], FollowersNASAComponent);
    return FollowersNASAComponent;
}());
exports.FollowersNASAComponent = FollowersNASAComponent;
//# sourceMappingURL=followersNASA.component.js.map