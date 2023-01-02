# Json Storage Client Javascript 🌪🎃️

```
npm install --save @sheepsbr/jsonbinjs
```

```javascript
import {New} from '@sheepsbr/jsonbinjs';

const jsonBin = await New({
    host: <host:string>,
    port: <port:number>,
    insecure: <insecure:boolean>,
    token: <token:string>
});


const info = await jsonBin.documents({
    query: {
        "string[_id]": "xxx",
        "bool[enabled]": true
    }
});

console.log( info ); // list json results
```