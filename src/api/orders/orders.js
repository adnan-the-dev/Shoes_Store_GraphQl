import { handleApi } from "../hendleApi";
import urls from "./urls";

export const placeOrderApi = async (data) => {
  const body = data;
  const response = await handleApi(`${urls.order}`, "POST", body);
  return response;
};

export const getAllOrders = async () => {
  const user = localStorage.getItem('Users')
  const user1 = JSON.parse(user)
  const response = await handleApi(`${urls.order}?${new URLSearchParams({username:user1.username})}`, "GET");
  return response;
};

export const chagneStatusOrder = async (id) => {
  const response = await handleApi(`${urls.order}/${id}/complete`, "PUT");
  return response;
};

export const completeOrders = async () => {
  const user = localStorage.getItem('Users')
  const user1 = JSON.parse(user)
  const response = await handleApi(`${urls.order}/complete?${new URLSearchParams({username:user1.username})}`, "GET");
  return response;
};
