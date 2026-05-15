import api from "./axios.js";

interface RegisterData {
  name: string;
  username: string;
  email: string;
  role: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const registerUser = async (
  data: RegisterData
) => {
  const response = await api.post("/auth/register", data)

  return response.data
}

export const loginUser = async (
  data: LoginData
) => {
  const response = await api.post(
    "/auth/login",
    data
  );

return response.data;
};

export const googleLogin = async (
  token: string
) => {
  const response = await api.post(
    "/auth/google",
    {
      token,
    }
  );

  return response.data;
};


export const logoutUser =
  async () => {
    const token =
      localStorage.getItem("accessToken");


    const response = await api.post(
      "/auth/logout",
      {},
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }





