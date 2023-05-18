import { api } from "../api/axios";
import authHeader from "./authHeader";

const API_URL = "/admin-api";
const axios = api;

const getAllData = (name) => {
  return axios.get(API_URL + "/" + name + "/endpoints");
};

const getEndpoint = (name) => {
  return axios.get(API_URL + "/" + name + "/endpoints", {
    headers: authHeader(),
  });
};

const getService = (name) => {
  return axios.get(API_URL + "/" + name + "/service", {
    headers: authHeader(),
  });
};

const updateAccess = (name, data) => {
  return axios.put(API_URL + "/" + name + "/endpoint", data, {
    headers: authHeader(),
  });
};

const updateEndpoint = (name, data) => {
  return axios.put(API_URL + "/" + name + "/endpoint", data, {
    headers: authHeader(),
  });
};

const postService = (profileName, data) => {
  return axios.post(API_URL + "/" + profileName + "/service", data, {
    headers: authHeader(),
  });
};

const deleteService = (serviceName, context) => {
  return axios.delete(API_URL + "/" + serviceName + "/service/" + context, {
    headers: authHeader(),
  });
};

const postEndpoint = (profileName, data) => {
  return axios.post(API_URL + "/" + profileName + "/endpoint", data, {
    headers: authHeader(),
  });
};

const deleteEndpoint = (profileName, id) => {
  return axios.delete(API_URL + "/" + profileName + "/endpoint/" + id, {
    headers: authHeader(),
  });
};

const endpointService = {
  getAllData,
  getService,
  getEndpoint,
  updateAccess,
  updateEndpoint,
  postService,
  deleteService,
  postEndpoint,
  deleteEndpoint,
};

export default endpointService;
