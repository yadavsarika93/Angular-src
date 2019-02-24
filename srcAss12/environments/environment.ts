// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = 
{
  production: false,
  // Add this to access firebase in our project
  firebase :
  {
    // Copy this contents from our firebase creation
    
     /* apiKey: "AIzaSyDdhloJn9UJmgFhPOWEpeUtRmnME_Cc1Lo",
      authDomain: "fir-demo-89f06.firebaseapp.com",
      databaseURL: "https://fir-demo-89f06.firebaseio.com",
      projectId: "fir-demo-89f06",
      storageBucket: "fir-demo-89f06.appspot.com",
      messagingSenderId: "976423655841"
    */
   apiKey: "AIzaSyA2UENO_pBqElRRRNho7ycjOWhXl69N0GU",
   authDomain: "jewallry-45b65.firebaseapp.com",
   databaseURL: "https://jewallry-45b65.firebaseio.com",
   projectId: "jewallry-45b65",
   storageBucket: "jewallry-45b65.appspot.com",
   messagingSenderId: "640843772714"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
