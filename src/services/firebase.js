import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/analytics";
const config = {
  apiKey: "YOUR-DETAILS-HERE",
  authDomain: "YOUR-DETAILS-HERE",
  databaseURL: "YOUR-DETAILS-HERE",
  projectId: "YOUR-DETAILS-HERE"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
