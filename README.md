# Laravel React Typescript boilerplate

## About Laravel

This is a Laravel 7.0 application setup to run pages in React and Typescript.

## Requirements

This is my current setup:

- PHP 7.2.5
- Node 11.13.0
- Yarn 1.22.4

Laravel has its own set of requirements [here](https://laravel.com/docs/7.x/installation)

## Installation

Clone this repository in your local environment.

```
$ mkdir project
$ git clone https://github.com/kedomingo/lara-react-ts.git .

$ composer install
$ yarn install
$ php artisan serve
```

Point your browser to http://127.0.0.1:8000/ it should show the message Hello World rendered by the `Text.tsx` component, and attached to the `App.tsx` component

Point your browser to http://127.0.0.1:8000/admin and it should show a test admin template split into different components

## The setup

There are 2 routes: `/{path?}` which point to `ExampleController::test` and `/admin/{path?}` which points to `AdminController::admin`

The main js `resources/tsx/app.js` loads the main app components `Example` and `Adminkit` from `resources/tsx/components/example/Example.tsx` 
and `resources/tsx/components/adminkit/AdminKit.tsx` respectively.

These 2 apps will render whenever the id they assigned for themselves is available in the DOM

### Example app

`ExampleController::test` renders `resources/views/example/example.blade.php`. This extends the layout `resources/views/layouts/examplelayout.blade.php`.
The layout file has a `div` with id `example`. The `Example` component sees this element and renders the app in it.

### Admin app

`AdminController::test` renders `resources/views/admin/admin.blade.php`. This extends the layout `resources/views/layouts/adminkit.blade.php`.
The layout file has a `div` with id `adminkit`. The `AdminKit` component sees this element and renders the app in it.
