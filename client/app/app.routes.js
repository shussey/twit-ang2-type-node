"use strict";
var router_1 = require('@angular/router');
var followersNASA_component_1 = require('./followersNASA.component');
var tweetsNASA_component_1 = require('./tweetsNASA.component');
var tweetsLADYGAGA_component_1 = require('./tweetsLADYGAGA.component');
var nothing_component_1 = require('./nothing.component');
// Route Configuration
exports.routes = [
    {
        path: '', redirectTo: '/nothing',
        pathMatch: 'full'
    },
    { path: 'nothing', component: nothing_component_1.NothingComponent },
    { path: 'followersNASA', component: followersNASA_component_1.FollowersNASAComponent },
    { path: 'tweetsNASA', component: tweetsNASA_component_1.TweetsNASAComponent },
    { path: 'tweetsLADYGAGA', component: tweetsLADYGAGA_component_1.TweetsLADYGAGAComponent },
];
// - Updated Export
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map