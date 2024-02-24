import axiosInstance from "../axios";

export const sendUserCredentials = async (idToken, email) => {
  const response = await axiosInstance.post('/auth/user/login', {
    authToken: idToken,
    email: email
  }).then((response) => {
    if (response.status === 200) {
      setUserBearerToken(response.token);
      return response.data.user;
    }
  }).catch((err) => {
    console.error(err);
    return 'error';
  })
  return response;
}

const setUserBearerToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}