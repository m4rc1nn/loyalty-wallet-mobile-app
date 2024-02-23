import axiosInstance from "../axios";

export const sendUserCredentials = (idToken, email, name) => {
  axiosInstance.post('/auth/user/login', {
    authToken: idToken,
    email: email,
    name: name
  }).then((response) => {
    console.log(response.data)
    if (response.status === 200) {
      setUserBearerToken(response.token);
      //console.log(response.user);
      return response.user;
    }
  }).catch((err) => {
    console.error(err.toJSON());
    return 'error';
  })
}

const setUserBearerToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}