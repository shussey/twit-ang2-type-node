"use strict";
var router_1 = require('@angular/router');
var followers_component_1 = require('./followers.component');
var tweets_component_1 = require('./tweets.component');
var nothing_component_1 = require('./nothing.component');
// Route Configuration
exports.routes = [
    {
        path: '', redirectTo: '/tweets',
        pathMatch: 'full'
    },
    { path: 'nothing', component: nothing_component_1.NothingComponent },
    { path: 'followers', component: followers_component_1.FollowersComponent },
    { path: 'tweets', component: tweets_component_1.TweetsComponent },
];
// - Updated Export
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map