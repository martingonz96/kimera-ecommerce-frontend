import { Token } from "@/api/token";

export async function authFetch(url, params) {
  const tokenctrl = new Token();
  const token = tokenctrl.getToken();

  const logout = () => {
    tokenctrl.removeToken();
    window.location.replace("/");
  };

  if (!token) {
    //TODO : logout
    logout();
    return;
  } else {
    if (tokenctrl.hashExpired(token)) {
      //TODO : logout
      logout();
      return;
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        return await fetch(url, paramsTemp);
      } catch (error) {
        return error;
      }
    }
  }
}
