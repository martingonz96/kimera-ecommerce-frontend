const { ENV } = require("@/utils");

export class Brands {
  async getAll() {
    try {
      const sort = "sort=order:asc";

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BRANDS}&${sort}`;

      const res = await fetch(url);

      const result = await res.json();

      if (res.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
