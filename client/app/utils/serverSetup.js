import LocalStore from "./localStore";
import moment from "moment";

const headers = { "Content-Type": "application/json" };

const imageHeader = { "content-type": "multipart/form-data" };

const baseURL = "http://localhost:5050/api/v1";

const time = LocalStore.get("timer");
class RestService {
  constructor() {
    (() => {
      if (moment().diff(time) > 0) {
        LocalStore.remove("token");
      } else {
        LocalStore.set("timer", moment().add(3, "hour"));
      }
    })();
  }

  async get(path) {
    return await fetch(`${baseURL}${path}`);
  }

  async authGet(path) {
    let res = await fetch(`${baseURL}${path}`, {
      method: "GET",
      headers: {
        ...headers,
        Authorization: LocalStore.get("token")
      }
    });
    return await res.json();
  }

  put(path) {
    return fetch(`${baseURL}${path}`, { method: "PUT", headers });
  }

  async post(path, body) {
    let res = await fetch(`${baseURL}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        ...headers,
        Authorization: LocalStore.get("token")
      }
    });
    return await res.json();
  }

  async authPost(path, body) {
    let res = await fetch(`${baseURL}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        ...headers,
        Authorization: LocalStore.get("token")
      }
    });
    return await res.json();
  }

  async msgPost(path, body) {
    return await fetch(`${baseURL}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        ...headers,
        Authorization: LocalStore.get("token")
      }
    });
  }

  async imagePost(path, body) {
    let res = await fetch(`${baseURL}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        ...imageHeader,
        Authorization: LocalStore.get("token")
      }
    });
    return await res.json();
  }

  delete(path) {
    return fetch(`${baseURL}${path}`, { method: "DELETE", headers });
  }
}

const Rest = new RestService();

export default Rest;
