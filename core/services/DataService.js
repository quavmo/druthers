import firebase from 'firebase';

firebase.initializeApp({databaseURL: "https://druthers-base.firebaseio.com"});

const db = firebase.database();

export const druthersBase = db.ref();
export const caseBase = db.ref("/marketing/cases");
export const interestedBase = db.ref("/interested");

export default firebase;
