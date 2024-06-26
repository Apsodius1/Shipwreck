const baseUrl = process.env.EXPO_PUBLIC_API_URL;
const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const result = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      ...baseHeaders,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await result.json();

  return data.accessToken;
};
export const register = async (email: string, password: string) => {
  const result = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      ...baseHeaders,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await result.json();

  return data.accessToken;
};

export const getProfile = async (token: string) => {
  const result = await fetch(`${baseUrl}/user/details/me`, {
    method: "GET",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    },
  });

  return await result.json();
};
