import axios from "axios";
import history from "./history";
import queryString from "query-string";
export const baseURL = process.env.REACT_APP_BASE_URL;

export const http = async (params, progress, setProgress) => {
  try {
    let percentCompleted;
    params.showMessage =
      params.showMessage !== undefined ? params.showMessage : true;
    let auth = params.token
      ? params.token
      : localStorage.getItem("kestingrum-web");
    let query = params.query
      ? "?" + queryString.stringify(params.query, { arrayFormat: "bracket" })
      : "";
    let config = {
      method: params.method ? params.method : "GET",
      baseURL: baseURL,
      url: params.path + (query || ""),
      data: params.data ? params.data : {},
      headers: {
        Authorization: "Bearer " + (auth ? auth : ""),
        "Content-Type": params.content_type
          ? params.content_type
          : "application/json"
      },
      onUploadProgress: function(progressEvent) {
        percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        if (progress) {
          setProgress(percentCompleted);
        }
      }
    };
    let data = await axios(config);
    return data.data;
  } catch (err) {
    if (err.response) {
      if (err.response.data.message === "invalid token") {
        localStorage.removeItem("kestingrum-web");
        history.push("/auth/sign-in");
        alert(err.response.data.message);
      }

      // if (err.response.data.code === 'err_not_active') {
      //   throw new Error(err.response.data.code);
      // }

      return {
        status: err.response.status,
        code: err.response.data.code,
        message: err.response.data.message,
        payload: err.response.data.payload,
      };
    } else {
      return {
        code: "err_connection",
        message: "no internet connection",
        payload: {}
      }
    }
  }
};
