import axios from 'axios';

export const increaseQuantity = itemId => {
  return axios.post(`/api/items/${itemId}/increaseQuantity`)
              .then(resp => resp.data);
};

export const decreaseQuantity = itemId => {
    return axios.post(`/api/items/${itemId}/decreaseQuantity`)
                .then(resp => resp.data);
  };

export const getAll = () => {
   return axios('/api/items')
              .then(resp => resp.data);
};

export const getItem = itemId => {
  return axios.get(`/api/items/${itemId}`)
              .then(resp => resp.data);
};

export const add = (newTitle, newType, newQuantity) => {
  return axios.post('/api/items', { title: newTitle, type: newType, quantity: newQuantity })
              .then(resp => resp.data);
};