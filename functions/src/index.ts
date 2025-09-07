/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at [https://firebase.google.com/docs/functions](https://firebase.google.com/docs/functions)
 */

/* eslint-disable no-unused-vars */

import {setGlobalOptions} from "firebase-functions";
// import {onRequest} from "firebase-functions/https";
// import * as logger from "firebase-functions/logger";
// import * as admin from '../../firebase/admin';  // Adjust path to your admin.ts if needed
import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import * as functions from 'firebase-functions';


// Start writing functions
// [https://firebase.google.com/docs/functions/typescript](https://firebase.google.com/docs/functions/typescript)


// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });


// export const helloWorld = onRequest((request, response) => {
//  logger.info("Hello logs!", {structuredData: true});
// response.send("Hello from Firebase!");
//});


// New function to auto-update userId on document creation

export const fixUserId = functions.firestore
  .document('interviews/{docId}')
  .onCreate((snap) => {
    const data = snap.data();  // Get the document's data
    const userIdFromClient = data?.createdByUserId || null;  // Assume client saves userId here

    if (userIdFromClient) {
      return snap.ref.update({ userId: userIdFromClient });  // Update to real userId
    }
    return null;  // If no userId, do nothing
  });

