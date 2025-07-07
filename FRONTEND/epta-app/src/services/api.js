// nunca tinha usado axios antes.
// issoo aqui é para configurar o axios para fazer requisições à API, incluindo o token JWT no cabeçalho de autorização e tratando erros de autenticação.
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      console.error(
        "Sessão expirada ou não autorizada. Redirecionando para o login."
      );
      localStorage.removeItem("jwt_token");
    }
    return Promise.reject(error);
  }
);

export default api;
