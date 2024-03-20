const { KeyValuePool, KeyValue } = require("../dist/lib/es5/index")


const CONFIG = {
    host: "localhost",
    port: 50082,
    insecure: true,
    readTimeoutInSeconds: 5,
    accessKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NWY3YTgzZjZkYjA1M2EyMDkzZDBkNmEifQ.T2GAU-S0UwjDFpuQIe3aDWNXFaKefVKquPMqM336v20",
    poolMin: 1,
    poolMax: 2
};

async function testkv() {
    const kv = await KeyValue.NewInstance(CONFIG);

    res = await kv.Set("test","test");
    console.log("res: ", res);

    g = await kv.Get("test");
    console.log("g: ", g);

    res = await kv.Del("test");
    console.log("res: ", res);
}

(async () => {
    await testkv();
    process.exit(0);
})();