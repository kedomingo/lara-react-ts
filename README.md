# Laravel React Typescript boilerplate

<p align="center"><img src="https://raw.githubusercontent.com/kedomingo/kedomingo.github.io/master/images/lara-react-ts.png" width="500"></p>

## About this Project

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

# Install PHP dependencies and setup Laravel env
$ composer install
$ cp .env.example .env
$ php artisan key:generate

# Install JS dependencies
$ yarn install

# Build JS and watch for changes (while you develop components)
# yarn watch

# Start webserver in another terminal
$ cd /your/path/to/project
$ php artisan serve
```

Point your browser to http://127.0.0.1:8000/ it should show the message Hello World rendered by the `Text.tsx` component, and attached to the `Example.tsx` component

Point your browser to http://127.0.0.1:8000/admin and it should show a test admin component (`AdminKit`) split into different components (`SidebarNav`, `MainNav`, `Footer`)

## The setup

There are 2 routes: `/{path?}` which point to `ExampleController::test` and `/admin/{path?}` which points to `AdminController::admin`.

The main js `resources/tsx/app.js` loads the main app components `Example` and `Adminkit` from `resources/tsx/components/example/Example.tsx` 
and `resources/tsx/components/adminkit/AdminKit.tsx` respectively.

These 2 apps will render whenever the id they assigned for themselves is available in the DOM

Laravel will be used for top-level routes. For everything else, the goal is to use 
[React Router](https://github.com/ReactTraining/react-router).
When set up correctly, you can have a React route `/admin/settings`. Laravel still routes this to `AdminController::admin` and renders the Admin app.
But the React router will see the route and render a `Settings` component, for example.

### Example app

`ExampleController::test` renders `resources/views/example/example.blade.php`. This extends the layout `resources/views/layouts/examplelayout.blade.php`.
The layout file has a `div` with id `example`. The `Example` component sees this element and renders the app in it.

### Admin app

`AdminController::admin` renders `resources/views/admin/admin.blade.php`. This extends the layout `resources/views/layouts/adminkit.blade.php`.
The layout file has a `div` with id `adminkit`. The `AdminKit` component sees this element and renders the app in it.

The `AdminKit` component is made up of several sub-components, and is a wrapper for something. 
That something can be anything, as long as it is returned by the `renderContents()` method in `AdminKit`.
