# Json Storage Client Javascript 🌪🎃️
## interface to store & retrieve your JSON data from the cloud.
```
npm install --save @sheepsbr/jsonbinjs
```

```javascript
import {New} from '@sheepsbr/jsonbinjs';

const jsonStorage = await New({
    host: <string>,
    port: <number>,
    insecure: <boolean>,
    accessKey: <string>,
    readTimeoutInSeconds: <number>
});

// Get Documents
const docs = await jsonStorage.GetDocuments({
    query: {
        "number[age].gt": 20
    },
    page: {
        offset: 0,
        limit: 100
    }
});

// Get Document
const doc = await jsonStorage.GetDocument({
    uniqueId: "63b44f955c0f62ed013a1046"
});

// Count Documents
const count = await jsonStorage.CountDocuments({
    query: {}
});

// Stream Documents
await jsonStorage.GetStreamDocuments({query: {}}, function (document) {
    console.log(document._id);
});

// Push Documents
const push = await jsonStorage.PushDocuments({
    documents: [
        {
            "id": "63b4b54b6c20f0c2b73ca70c",
            "isActive": false,
            "balance": "$1,387.96",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "eyeColor": "brown",
            "name": "Eugenia Pace",
            "email": "eugeniapace@nurplex.com",
            "phone": "+1 (955) 516-3544",
            "latitude": -78.403322,
            "longitude": -178.773843,
            "tags": [
                "nulla",
                "qui"
            ]
        },
        {
            "id": "63b4b54b81613993d7366e1c",
            "isActive": false,
            "balance": "$2,208.97",
            "picture": "http://placehold.it/32x32",
            "age": 37,
            "eyeColor": "green",
            "name": "Jamie Walters",
            "gender": "female",
            "company": "ZIGGLES",
            "email": "jamiewalters@ziggles.com",
            "phone": "+1 (966) 545-3760",
            "latitude": -43.161159,
            "longitude": 119.360297,
            "tags": [
                "ad",
                "dolore"
            ]
        }
    ]
});

// Patch Documents
 const patch = await jsonStorage.PatchDocuments({
    documents: [
        {
            "id": "63b4b54b6c20f0c2b73ca70c",
            "guid": "b4c0f674-ffeb-4265-b727-630b988e8bf4"
        },
        {
            "id": "63b4b54b81613993d7366e1c",
            "guid": "09518ee9-ae99-4d3c-ac41-cb4e6476d069"
        }
    ]
});

// Remove Documents
const removes = await jsonStorage.DeleteDocuments({
    uniqueIds: ['63b4b54b6c20f0c2b73ca70c', '63b4b54b81613993d7366e1c']
});

// Disconnect

jsonStorage.Disconnect();

```