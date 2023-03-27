import * as functions from "firebase-functions";

import { SharedType } from 'shared/interfaces/SharedType'

const shared: SharedType = {
    shared: true,
    anotherField: "another field"
}

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const sharedWorld = functions.https.onRequest((request, response) => {

    if (shared.shared) {
        response.send("Hello from shared Firebase!");
    } else {
        response.send("Not true value")
    }

});