import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

 // IMPORTANT!!
 // Because this React app is running in the same workspace as the API,

 // there is no need to set a separate baseURL until you reach deployment.

 // Setting a baseURL before you reach deployment will cause errors

// I added this base URL for you to solve the url issue from earlier
axios.defaults.baseURL = "https://8000-myekman-mywedding-nyh1urjz903.ws-eu105.gitpod.io/"
// axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

