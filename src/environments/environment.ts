export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBpJnOGMOFT6DFGBz3FJK_ZDXhnnwvQIN4",
    authDomain: "fir-app-f846f.firebaseapp.com",
    databaseURL: "https://fir-app-f846f.firebaseio.com",
    projectId: "fir-app-f846f",
    storageBucket: "fir-app-f846f.appspot.com",
    messagingSenderId: "702169113728"
  },
  application: {
    logoUrl: '/assets/application/material.png',
    helpers: {
      emailRegex: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    }
  }
};