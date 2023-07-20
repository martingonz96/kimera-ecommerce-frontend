const { ENV } = require("@/utils");

export class Printer {
  async getLastPrinter() {
    try {
      const sort = "sort=publishedAt:desc";

      const pagination = "pagination[limit]=1";

      const populate = "populate=*";

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRINTERS}?${sort}&${pagination}&${populate}`;

      const res = await fetch(url);

      const result = await res.json();

      if (res.status !== 200) throw new Error(result.message);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getLatestPrublished({ limit = 5 }, platformId = null) {
    try {
      const filterPlatform =
        platformId && `filter[platform][id][$eq]=${platformId}`;
      const filterLimit = `pagination[limit]=${limit}`;
      const sort = "sort=publishedAt:desc";
      const populate = "populate=*";

      const urlParams = `${sort}&${filterLimit}&${populate}&${filterPlatform}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRINTERS}?${urlParams}`;

      const res = await fetch(url);
      const result = await res.json();

      if (res.status !== 200) throw new Error(result.message);

      return result;
    } catch (error) {
      throw error;
    }
  }
}
