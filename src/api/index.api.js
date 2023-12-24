const Axios = require("axios");

const getApi = Axios({
  method: "get",
  url: "https://suitmedia-backend.suitdev.com/api/ideas",
  Headers: {
    Accept: "application/json, text/plain, */*"
  },
  responseType: "stream",
}).then(function (response) {
    console.log(response)
});
