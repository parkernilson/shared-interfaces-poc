import * as functions from "firebase-functions";

import { SharedType } from 'shared/interfaces/SharedType'

const shared: SharedType = {
    shared: true,
    anotherField: "another field"
}

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {

    if (shared.shared) {
        response.send("Hello from Firebase!");
    } else {
        response.send("Not true value")
    }

});

let ssrServerServer: any;
exports.ssrServer = functions.region("us-central1").https.onRequest(async (request, response) => {
    if (!ssrServerServer) {
        functions.logger.info("Initialising SvelteKit SSR entry");
        ssrServerServer = require("./ssrServer/index").default;
        functions.logger.info("SvelteKit SSR entry initialised!");
    }
    functions.logger.info("Requested resource: " + request.originalUrl);
    return ssrServerServer(request, response);        
});