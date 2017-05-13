<p align="center"><img src="src/assets/img/logo.png" style="margin: auto; width: 81px;"></p>

<h1><p align="center">Material Light</p></h1>

**Material Designt UI components for Angular (versions 2 +, 4 +)**

There are other adaptations of Material Design Lite and other UI frameworks like the official Material Design 2, 
but this library has the following features:

- 100% Free forever.
- Light
- Fast
- Easy and fun to use
- True library of componentes encapsulating typescipt code, CSS and HTML as atomic units
- Easy and quick form validation
- Great performance on mobile UI interfaces.
- Responsive content adaptable to desktop and mobile
- Components available also as Angular Modules allowing Code-Splitting/Lazy-loading. This implies loading only the components needed at runtime
- Ready for Ahead of Time Compilation (AOT)
- Tested in main desktop/mobile browsers: Chrome (Android, IOS, desktop), FF, Edge, IE, Opera.
- No dependencies of other libraries like JQuery or Bootstrap.

## Objective

The main goal was to achieve minimalism and performance, not to encompass all posible kind of options or UI components (this is the philosophy of
Material Design Light too). You can always add other components from other sources.

If you find this project useful and are going to use it, please give a star in the repo and credits to the author 
and to <a href="http://getmdl.io" target="_blank">Material Design Lite from Google</a>

Terms of use under <a href="LICENSE.txt">MIT</a> license.

## Author

Yago López:

- Website: <a href="https://yagolopez.github.io" target="_blank">https://yagolopez.github.io</a>
- Email: yago.lopez ([at]) gmail.com

## Demo

<!-- - <a href="http://yagolopez.github.io/material-light/iframe/iframe.html" target="_blank">Desktop PC</a> -->
- <a href="http://mobt.me/Xf27" target="_blank">Mobile Simulator (For Desktop)</a>
- <a href="https://yagolopez.github.io/material-light/dist/index.html" target="_blank">Full Screen (For Mobile)</a>

## Insallation and Use

- This project can be used with the **angular-cli** although not mandatory.
- Run: `npm install YagoLopez/material-light`
- Copy `{project-folder}/node_modules/material-light/src/app/ml/` folder to your `/src/` folder
- Copy `{project-folder}/node_modules/material-light/src/assets/` folder to your `/src/` folder
- Include Material Icons from `{project-folder}/src/assets/fonts/mlIcons.css` in your `index.html`
- Import the component modules from `{project-folder}/src/app/ml/components` in your own module. Component modules have `*Mod.ts` file name
- For example, if you want to use `MlButton` component, import `MlButtonMod.ts` in your module and place `<ml-button>my button</ml-button>` in your template
- Use the components following the examples in the `{project-folder}/node_modules/material-light/src/app/pages` directory.
- Use `<ml-layout>` as base component to place inside it all other components
- If you get compile errors, assure you have `module: commonjs` in `tsconfig.json`

## Runnin the demo

- You can run the compiled demo pointing a web server to `{project-folder}/node_modules/material-light/dist/index.html`
- If you want to compile the project, clone or download the repo, adjust the `basePath` in `app.module.ts` to your environment and run it with `ng serve`

## Testing

<div>Tests with the colaboration of:</div>
<a href="https://www.browserstack.com/" target="_blank"><img src="browserstack-logo.png" height="90px"></a>

## Used for running this demo:

- Angular latest versions
- Angular Command Line (angular-cli)
- Typescript latest versions
- Webpack for production builds
- SystemJS as module loader during development time
- Node/Npm latest versions

## Disclaimers:

- This project is based on <a href="http://getmdl.io" target="_blank">Material Design Lite from Google</a>. It is an adaptation of MDL JavaScript components to Angular components with the permission of the MDL team.
- Material Design is a Google's registered trade mark probably.
- This is an open-source project without commercial or profit intention.
