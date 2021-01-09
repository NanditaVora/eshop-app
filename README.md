# EshopApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Code Repository

[Click here to access](https://github.com/NanditaVora/eshop-app)

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

- Port for e2e tests is configured to 4205 in angular.json
- Alternatively port can be specified with the ng e2e command with --port option
`ng e2e --port 4205`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### Starting json-server

- Run the command in a terminal `json-server server/db.json -w`
- Keep the command running
- `db.json` file contains the product data


### Server API

- Get All Products :: http://localhost:3000/products
- Post Product Data :: http://localhost:3000/products
