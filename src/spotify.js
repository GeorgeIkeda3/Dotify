import axios from 'axios';

const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientID = "e639b192b1324f44a643c77254c8de15";
const redirectURI = "http://localhost:5000";
const responseType = "token";
//const scopes = ["user-library-read", "playlist-read-private"];
const scopes = ["user-read-private", "user-read-email"];


export const loginEndpoint = `${authEndPoint}client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//export const loginEndpoint = `${authEndPoint}client_id=${clientID}&redirect_uri=${redirectURI}&response_type=${responseType}`

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export default apiClient;