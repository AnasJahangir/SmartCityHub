// api.js
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Utility function to set the authorization token
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// User Endpoints
export const getAuthenticatedUser = async () => {
  const response = await axios.get(`${BASE_URL}/api/user/authenticate`);
  return response.data;
};
export const createUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/api/user/create`, userData, {
    headers: {
      "Content-Type": "application/json",
      "x-access-token":
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjY3NjgxMTZhMDYwMjJhYzViYzNhYzYiLCJuYW1lIjoiYWRtaW5AYWRtaW4ucGwiLCJyb2xlIjoiYWRtaW4iLCJpc0FkbWluIjp0cnVlLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNzE4MDUyODg5LCJleHAiOjE3MjA2NDQ4ODl9.fk-aMPlXWVbsSfCPwybXg6IqbgDL6dyFs8Y0Icebe60",
    },
  });
  return response.data;
};
export const authenticateUser = async (loginData) => {
  const response = await axios.post(`${BASE_URL}/api/user/auth`, loginData);
  return response.data;
};

export const logoutUser = async (userId) => {
  const response = await axios.delete(`${BASE_URL}/api/user/logout/${userId}`);
  return response.data;
};

// Token Endpoints

export const createToken = async (user) => {
  const response = await axios.post(`${BASE_URL}/tokens`, { user });
  return response.data;
};

export const removeToken = async (userId) => {
  const response = await axios.delete(`${BASE_URL}/tokens`, {
    params: { userId },
  });
  return response.data;
};

// Sensor Endpoints

export const getLatestSensorReadings = async () => {
  const response = await axios.get(`${BASE_URL}/api/sensor/latest`);
  return response.data;
};

export const getAllSensorData = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/sensor/${id}`);
  return response.data;
};

export const getPeriodSensorData = async (id, num = "latest") => {
  const endpoint =
    num === "latest"
      ? `${BASE_URL}/api/sensor/${id}/latest`
      : `${BASE_URL}/api/sensor/${id}/${num}`;
  const response = await axios.get(endpoint);
  return response.data;
};

export const addSensorData = async (id, sensorData) => {
  const response = await axios.post(`${BASE_URL}/api/sensor/${id}`, {
    air: sensorData,
  });
  return response.data;
};

export const cleanAllSensorData = async () => {
  const response = await axios.delete(`${BASE_URL}/api/sensor/all`);
  return response.data;
};

export const cleanSensorData = async (id) => {
  const response = await axios.delete(`${BASE_URL}/api/sensor/${id}`);
  return response.data;
};

// Device State Endpoints

export const getAllDeviceStates = async () => {
  const response = await axios.get(`${BASE_URL}/api/state/all`);
  return response.data;
};

export const getLatestDeviceState = async () => {
  const response = await axios.get(`${BASE_URL}/api/state/latest`);
  return response.data;
};

export const updateDeviceState = async (id, state) => {
  const response = await axios.post(`${BASE_URL}/api/state/update/${id}`, {
    state,
  });
  return response.data;
};

export const updateMultipleDeviceStates = async (deviceStates) => {
  const response = await axios.post(`${BASE_URL}/api/state/update`, {
    deviceStates,
  });
  return response.data;
};

export const getAllDeviceStateData = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/state/all/${id}`);
  return response.data;
};

export const getDeviceState = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/state/${id}`);
  return response.data;
};

export const cleanAllDeviceStateData = async () => {
  const response = await axios.delete(`${BASE_URL}/api/state/all`);
  return response.data;
};

export const removeDeviceState = async (id) => {
  const response = await axios.delete(`${BASE_URL}/api/state/${id}`);
  return response.data;
};

// Device Endpoints

export const getLatestDeviceReadings = async () => {
  const response = await axios.get(`${BASE_URL}/api/device/latest`);
  return response.data;
};

export const getAllDeviceData = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/device/all/${id}`);
  return response.data;
};

export const getDeviceData = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/device/${id}`);
  return response.data;
};

export const updateDevice = async (id, deviceData) => {
  const response = await axios.post(`${BASE_URL}/api/device/${id}`, deviceData);
  return response.data;
};

export const cleanAllDeviceData = async () => {
  const response = await axios.delete(`${BASE_URL}/api/device/all`);
  return response.data;
};

export const removeDevice = async (id) => {
  const response = await axios.delete(`${BASE_URL}/api/device/${id}`);
  return response.data;
};

// Index Endpoint

export const serveIndex = async () => {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
};
