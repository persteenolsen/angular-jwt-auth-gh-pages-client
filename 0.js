(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=174},176:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(261),t)},177:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(263),t)},178:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(265),t)},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(180);var r=n(254),o=n(255);r.platformBrowserDynamic().bootstrapModule(o.AppModule)},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(181),n(253)},255:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.AppModule=void 0;var o=n(1),i=n(62),a=n(175),s=n(108),c=n(256),u=n(260),l=n(269),f=n(176),p=n(178),d=n(177),v=function(){function e(){}return e=r([o.NgModule({imports:[i.BrowserModule,a.ReactiveFormsModule,s.HttpClientModule,u.routing],declarations:[c.AppComponent,f.HomeComponent,d.AboutComponent,p.LoginComponent],providers:[{provide:s.HTTP_INTERCEPTORS,useClass:l.JwtInterceptor,multi:!0},{provide:s.HTTP_INTERCEPTORS,useClass:l.ErrorInterceptor,multi:!0}],bootstrap:[c.AppComponent]})],e)}();t.AppModule=v},256:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.AppComponent=void 0;var i=n(1),a=n(109),s=n(82),c=function(){function e(e,t){var n=this;this.router=e,this.authenticationService=t,this.authenticationService.currentUser.subscribe((function(e){return n.currentUser=e}))}return e.prototype.logout=function(){this.authenticationService.logout(),this.router.navigate(["/login"])},e=r([i.Component({selector:"app",template:n(259)}),o("design:paramtypes",[a.Router,s.AuthenticationService])],e)}();t.AppComponent=c},257:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.AuthenticationService=void 0;var i=n(1),a=n(108),s=n(70),c=n(54),u=function(){function e(e){this.http=e,this.currentUserSubject=new s.BehaviorSubject(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}return Object.defineProperty(e.prototype,"currentUserValue",{get:function(){return this.currentUserSubject.value},enumerable:!1,configurable:!0}),e.prototype.login=function(e,t){var n=this;return this.http.post("https://pso-aspnet-core-jwt.azurewebsites.net//users/authenticate",{username:e,password:t}).pipe(c.map((function(e){return e&&e.token&&(localStorage.setItem("currentUser",JSON.stringify(e)),n.currentUserSubject.next(e)),e})))},e.prototype.logout=function(){localStorage.removeItem("currentUser"),this.currentUserSubject.next(null)},e=r([i.Injectable({providedIn:"root"}),o("design:paramtypes",[a.HttpClient])],e)}();t.AuthenticationService=u},258:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.UserService=void 0;var i=n(1),a=n(108),s=function(){function e(e){this.http=e}return e.prototype.getAll=function(){return this.http.get("https://pso-aspnet-core-jwt.azurewebsites.net//users")},e=r([i.Injectable({providedIn:"root"}),o("design:paramtypes",[a.HttpClient])],e)}();t.UserService=s},259:function(e,t){e.exports='\x3c!-- nav --\x3e\n\n\n<nav class="navbar navbar-expand-lg navbar-dark bg-dark" *ngIf="currentUser">\n                                      \n    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">\n        <span class="navbar-toggler-icon"></span>\n    </button>\n           \n    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">\n\n        <div class="navbar-nav">\n\n          <a class="nav-item nav-link" routerLink="/home">Home</a>\n          <a class="nav-item nav-link" routerLink="/about">About this Application</a>\n          <a class="nav-item nav-link" (click)="logout()">Logout</a>\n\n       </div>\n     </div>\n   \n</nav>\n\n\n<nav class="navbar navbar-expand-lg navbar-dark bg-dark" *ngIf="!currentUser">\n                                      \n     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">\n         <span class="navbar-toggler-icon"></span>\n     </button>\n            \n     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">\n\n        <div class="navbar-nav">\n             \n            <a class="nav-item nav-link" routerLink="/">About this Application</a>\n            <a class="nav-item nav-link" routerLink="/login">Login</a>\n     \n        </div>\n      </div>\n    \n</nav>\n\n\n \x3c!--If the current user is logged in display the name of the user--\x3e\n<div class="user-text" *ngIf="currentUser">You are logged in as:\n    <span class="user-name">  {{ currentUser.firstName }} {{ currentUser.lastName }} </span>\n</div>\n\n\n\x3c!-- main app container --\x3e\n<div class="jumbotron">\n    <div class="container">\n        <div class="row">\n            <div class="col-sm-6 offset-sm-3">\n                  <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n'},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.routing=void 0;var r=n(109),o=n(176),i=n(177),a=n(178),s=n(267),c=[{path:"home",component:o.HomeComponent,canActivate:[s.AuthGuard]},{path:"",component:i.AboutComponent},{path:"login",component:a.LoginComponent},{path:"**",redirectTo:""}];t.routing=r.RouterModule.forRoot(c)},261:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.HomeComponent=void 0;var i=n(1),a=n(54),s=n(82),c=function(){function e(e){this.userService=e,this.users=[]}return e.prototype.ngOnInit=function(){var e=this;this.userService.getAll().pipe(a.first()).subscribe((function(t){e.users=t}))},e=r([i.Component({template:n(262)}),o("design:paramtypes",[s.UserService])],e)}();t.HomeComponent=c},262:function(e,t){e.exports='<h1>Home</h1>\n<p>You\'re logged in with Angular 7 & JWT!!</p>\n<div>\n    Users from secure api end point:\n    <ul>\n        <li *ngFor="let user of users">{{user.firstName}} {{user.lastName}}</li>\n    </ul>\n</div>\n'},263:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.AboutComponent=void 0;var o=n(1),i=function(){function e(){}return e.prototype.ngOnInit=function(){},e=r([o.Component({template:n(264)})],e)}();t.AboutComponent=i},264:function(e,t){e.exports="\n<h3>Description</h3>\n\n  \n   A Angular SPA Client at GitHub Pages is the frontend for a ASP.NET Core 2.2 Web API at Azure App Service using JWT Authentication \n   <br/> <br/>\n   \n   <b>Last Updated</b>\n   <ul>\n    <li>21-12-2022</li>\n   </ul>\n\n   <b>Main functionality</b>\n   <ul>\n     \n      <li>A User can perform a login using JWT Authentication with the Baerer scheme</li>\n      <li>A User have access to secure pages after successfully login</li>\n      \n   </ul>\n\n   <b>Module Bundler</b>\n    <ul>\n      \n     <li>Manuel configuration of the Webpack 4 serving as a module bundler</li>\n\n   </ul>\n\n\n   <b>Security</b>\n    \n    <ul>\n   \n      <li>JWT Authentication with the Baerer scheme</li>\n      <li>The user will have access to the secure endpoints of \n          the Web API passing login and using the JWT</li>\n      <li>The endpoints of the Web API are secured by JWT</li>\n      \n\n     </ul>\n\n \n    <b>The Angular Single Page Application - The frontend</b>\n   \n     <ul>\n    \n      <li>Angular 7</li>\n      <li>TypeScript</li>\n      <li>Less</li>\n      <li>HTML and CSS</li>\n      <li>Mainly JavaScript ES5, ES6 and ES7</li>\n      <li>Traditionel Bootstrap 4 by CDN for the responsive design</li>\n  \n   </ul>\n\n   <b>ASP.NET Core 2.2 Web API - The backend</b>\n    \n    <ul>\n  \n    <li>ASP.NET Core 2.2 Web API</li>\n      \n   </ul>\n\n\n  <b>Hosting</b>\n  <ul>\n    <li>The Angular SPA client is hosted at GitHub Pages</li>\n    <li>The Web API is hosted at Azure App Service</li>\n  </ul>\n\n  <b>Text Editor</b>\n  <ul>\n\n   <li>Visual Studio Code as Text Editor and Visual Studio as IDE</li>\n\n </ul>\n\n <b>Testing</b>\n <ul>\n   <li>Test Driven Developement and Unit Testing all the way developing the system</li>\n </ul>\n\n   "},265:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.LoginComponent=void 0;var i=n(1),a=n(109),s=n(175),c=n(54),u=n(82),l=function(){function e(e,t,n,r){this.formBuilder=e,this.route=t,this.router=n,this.authenticationService=r,this.loading=!1,this.submitted=!1,this.error=""}return e.prototype.ngOnInit=function(){this.loginForm=this.formBuilder.group({username:["",s.Validators.required],password:["",s.Validators.required]}),this.authenticationService.logout(),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/home"},Object.defineProperty(e.prototype,"f",{get:function(){return this.loginForm.controls},enumerable:!1,configurable:!0}),e.prototype.onSubmit=function(){var e=this;this.submitted=!0,this.loginForm.invalid||(this.loading=!0,this.authenticationService.login(this.f.username.value,this.f.password.value).pipe(c.first()).subscribe((function(t){e.router.navigate([e.returnUrl])}),(function(t){e.error=t,e.loading=!1})))},e=r([i.Component({template:n(266)}),o("design:paramtypes",[s.FormBuilder,a.ActivatedRoute,a.Router,u.AuthenticationService])],e)}();t.LoginComponent=l},266:function(e,t){e.exports='<div *ngIf="error" class="alert alert-danger">{{error}}</div>\n\n<div class="alert alert-info">\n    Username: test<br />\n    Password: test\n</div>\n<h2>Login</h2>\n<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n        <label for="username">Username</label>\n        <input type="text" formControlName="username" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.username.errors }" />\n        <div *ngIf="submitted && f.username.errors" class="invalid-feedback">\n            <div *ngIf="f.username.errors.required">Username is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" formControlName="password" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.password.errors }" />\n        <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\n            <div *ngIf="f.password.errors.required">Password is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <button [disabled]="loading" class="btn btn-primary">Login</button>\n        <img *ngIf="loading" class="pl-2" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />\n    </div>\n  \n</form>'},267:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(268),t)},268:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.AuthGuard=void 0;var i=n(1),a=n(109),s=n(82),c=function(){function e(e,t){this.router=e,this.authenticationService=t}return e.prototype.canActivate=function(e,t){return!!this.authenticationService.currentUserValue||(this.router.navigate(["/login"],{queryParams:{returnUrl:t.url}}),!1)},e=r([i.Injectable({providedIn:"root"}),o("design:paramtypes",[a.Router,s.AuthenticationService])],e)}();t.AuthGuard=c},269:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(270),t),o(n(271),t),o(n(272),t)},270:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorInterceptor=void 0;var i=n(1),a=n(70),s=n(54),c=n(82),u=function(){function e(e){this.authenticationService=e}return e.prototype.intercept=function(e,t){var n=this;return t.handle(e).pipe(s.catchError((function(e){401===e.status&&(n.authenticationService.logout(),location.reload(!0));var t=e.error.message||e.statusText;return a.throwError(t)})))},e=r([i.Injectable(),o("design:paramtypes",[c.AuthenticationService])],e)}();t.ErrorInterceptor=u},271:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.JwtInterceptor=void 0;var i=n(1),a=n(82),s=function(){function e(e){this.authenticationService=e}return e.prototype.intercept=function(e,t){var n=this.authenticationService.currentUserValue,r=n&&n.token,o=e.url.startsWith("https://pso-aspnet-core-jwt.azurewebsites.net/");return r&&o&&(e=e.clone({setHeaders:{Authorization:"Bearer "+n.token}})),t.handle(e)},e=r([i.Injectable(),o("design:paramtypes",[a.AuthenticationService])],e)}();t.JwtInterceptor=s},272:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.fakeBackendProvider=t.FakeBackendInterceptor=void 0;var o=n(1),i=n(108),a=n(70),s=n(54),c=function(){function e(){}return e.prototype.intercept=function(e,t){var n=[{id:1,username:"test",password:"test",firstName:"Test",lastName:"User",token:"xx"}],r=e.headers.get("Authorization"),o=r&&r.startsWith("Bearer fake-jwt-token");return a.of(null).pipe(s.mergeMap((function(){if(e.url.endsWith("/users/authenticate")&&"POST"===e.method){var r=n.find((function(t){return t.username===e.body.username&&t.password===e.body.password}));return r?c({id:r.id,username:r.username,firstName:r.firstName,lastName:r.lastName,token:"fake-jwt-token"}):(i="Username or password is incorrect",a.throwError({status:400,error:{message:i}}))}var i;return e.url.endsWith("/users")&&"GET"===e.method?o?c(n):a.throwError({status:401,error:{message:"Unauthorised"}}):t.handle(e)}))).pipe(s.materialize()).pipe(s.delay(500)).pipe(s.dematerialize());function c(e){return a.of(new i.HttpResponse({status:200,body:e}))}},e=r([o.Injectable()],e)}();t.FakeBackendInterceptor=c,t.fakeBackendProvider={provide:i.HTTP_INTERCEPTORS,useClass:c,multi:!0}},82:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(257),t),o(n(258),t)}},[[179,1,2]]]);