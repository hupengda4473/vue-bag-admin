const env = import.meta.env;
let apiServer;
if (env.PROD) {
    // apiServer = 'http://192.168.10.85:2222';
    apiServer = 'http://60.2.176.226:12017';
} else {
    apiServer = 'http://localhost:9000';
}
export const requestUrl = apiServer;
export const SPECIAL_URL = 'http://192.168.10.81:6190';
