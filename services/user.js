export default class UserServices {
  constructor(client, endpoint) {
    this.endpoint = endpoint;
    this.client = client;
  }

  login = (data) => {
    return this.client(`${this.endpoint}/login`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  register = (data) => {
    return this.client(`${this.endpoint}/register`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
}
