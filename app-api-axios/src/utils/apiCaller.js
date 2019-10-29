import axios from "axios";

import * as Config from "./../constants/Config";

export default function callApi(endpoint, method = "GET", body) {
   return axios({
      method: method,
      url: `${Config.API_URL}/${endpoint}`,
      data: body
   })
      .catch(error => {
         // handle error
         console.log(error);
      })
      .finally(() => {
         // always executed
         console.log("always executed");
      });
}
