import axiosInstance from "../../../axios";

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