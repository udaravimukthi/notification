// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * copy and paste your firebase config in firebase console
 * Authentication > Web Setub
 */
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDmbNAMfyJSS33pQ8TmOJXCmtgzWdpGvsk',
    authDomain: 'my-first-73170.firebaseapp.com',
    databaseURL: 'https://my-first-73170.firebaseio.com',
    projectId: 'my-first-73170',
    storageBucket: 'my-first-73170.appspot.com',
    messagingSenderId: '599548587082',
    appId: '1:599548587082:web:578002ca89b785d4'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
