import { ENV } from "@/utils";
import { authFetch } from "@/utils/authFetch";

export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

      const res = await authFetch(url);
      const result = await res.json();

      if (res.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateMe(userId, data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;

      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await authFetch(url, params);

      const result = await res.json();

      if (res.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
