import axios from "axios";

export const contentURL = "https://join-tsh-api-staging.herokuapp.com";

const CMS = axios.create({
  baseURL: contentURL,
});

export default CMS;
