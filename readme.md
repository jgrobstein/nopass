![Logo](src/imgs/icon-192.png)

NoPass
------

A simple password manager alternative that eliminates the need to store passwords.

[ [How it works](#how-it-works) ]
[ [Screenshots](#screenshots) ]
[ [Prerequisites](#prerequisites) ]
[ [Getting started](#getting-started) ]
[ [License](#license) ]

## How it works

Enter a website and seed phrase, adjust the length and counter as desired and generate a unique password that can be regenerated at any time using a pure js function.

**NoPass** is a simple PWA enabled client side application built in pure `html`, `css` and `javascript` bundled with [Parcel JS](). No data is ever stored, collected, or transmitted via the application. **NoPass** is an alternative to modern password managers allowing regeneration of secure passwords without the need to ever store any data on your device, or a cloud service.

## Screenshots

![Screenshot](src/imgs/screenshot-home.png)


## Prerequisites

[Node, npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Getting started

#### Install the dependencies

```shell
npm install
```

*To update all the dependencies to the latest versions run* `npm update --save`

#### Run the dev server

```shell
npm start
```

The project should be available at http://localhost:1234.

#### Build for production

To generate a production bundle of your project run `npm run build`, your build will be created in a `build` directory and packaged in a `zip` archive in the project root.

## License

Copyright 2023 I Services. [MIT License](LICENSE.md)