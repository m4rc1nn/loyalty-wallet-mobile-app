import axiosInstance from "../../../axios";

import "core-js/actual/array/group-by";

export const getUserCards = async () => {
  return await axiosInstance.get('/cards')
    .then((response) => {
      return response.data.cards;
    })
    .catch((error) => {
      console.error(error.response);
      return 'error';
    })
}

export const groupCards = (cards) => {
  return cards.groupBy(({company}) => company.categoryId);
}