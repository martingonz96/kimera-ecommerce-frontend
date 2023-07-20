import { authFetch } from "@/utils/authFetch";

const { ENV } = require("@/utils");

export class Address {
  async addAddress(data, userId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ENV.TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            ...data,
            user: userId,
          },
        }),
      };
      const res = await authFetch(url, params);

      const result = await res.json();
      if (res.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAll(userId) {
    try {
      const filters = `filters[user][id][$eq]=${userId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${filters}`;

      const res = await authFetch(url);

      const result = await res.json();
      if (res.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateAddress(data, id) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${id}`;
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ENV.TOKEN}`,
        },
        body: JSON.stringify({ data }),
      };

      const res = await authFetch(url, params);
      const result = await res.json();
      if (res.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteAddress(id) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${id}`;
      const params = {
        method: "DELETE",
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
