
# VMware GitHub Projects App

This App lists all VMware's Open Source projects on GitHub. It is built using [Angular 8](https://angular.io/) and [Clarity Design](https://clarity.design/) framework. For integration, [GitHub API V3](https://developer.github.com/v3/) is used to query list of projects/repos and [OAuth](https://developer.github.com/v3/auth/) authentication is implemented to gain access to application and use ***access_token*** provided by GitHub.
This app uses [Guards](https://angular.io/guide/router) provided by Angular to avoid unauthorized access and  basic implementation of maintaining user session.

## Modules
This application is divided into several modules, each loaded dynamically on basis of which functionality is in use at that time. Application is divided into -

 - **Base module** - Defines the layout of the application including header, main body and alert on top.
 - **Cards module** - Contains different cards used in the application and placeholders cards built using [ngx-content-loading](https://www.npmjs.com/package/ngx-content-loading)
 - **Header modul**e - Contains header component used by the application
 - **User module** - Handles user login and session related functionality
 - **Search module** - Provides features like listing of projects, searching, sorting, etc.
 

## Features

Some of the features that this app provides are

### - Authentication
OAuth authentication method provided by GitHub is used to authorize user for application access and ***access_token*** is passed for data queries related to project list and current user information.

### - In browser sorting

For simplicity this app uses Javascript's in-built sorting feature to sort list of items returned by API at a given time. 
*This feature can be implemented using API calls if needed.*

### - In browser searching

Same as sorting, this app uses Javascript's in-built searching feature to search for project in a list returned by API at a given time. 
*This feature can be implemented using API calls if needed.*

### - Infinite scroll
Listing of projects uses pagination by implementing infinite scrolling using [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll)

### - Data view types

You can select between different view types by clicking the *List View* or *Card View* buttons on top right of the list.

### - Visibility metrics

You can see the number of stargazers, total forks, last update date and watchers for each project.
### 

## Application Preview

![enter image description here](https://lh3.googleusercontent.com/NE8HEEoxdhvLnLvWhIM8OvtWcFv-ku65p-I1lj-47GtMJpiGsuK12sIAvrL-xKlTktvcb58TWbYrOg "Application Preview")

#  Deployment


## Development server

  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

  

## Code scaffolding

  

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

  

## Build

  

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

  

## Running unit tests

  

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

  

## Running end-to-end tests

  

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

  

## Further help

  

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).