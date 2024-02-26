import axios from "axios";
export const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
export const handleApi = async (url, method, body = {}) => {
  try {
    const headers = {};
    const response = await axios({ url, method, headers, data: body });
    return response;
  } catch (e) {
    return e;
  }
};
