class FetchManager {
  /**
   * API Request
   * @param {String} method request method
   * @param {String} uri request path
   * @param {Object} kwargs request options
   * @returns {Function} fetch request
   */
  static fetch(method: string, uri: string, { ...kwargs }) {
    let BASE_URL = new URL(`http://localhost:3000${uri}`);
    let params = { ...kwargs };
    BASE_URL.search = new URLSearchParams(params).toString();
    return fetch(BASE_URL, { method }).then((response) => response.json());
  }
}

export default FetchManager;
