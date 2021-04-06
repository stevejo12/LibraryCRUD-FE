import UserServices from "./user";

export default class Services {
  constructor(client, endpoint) {
    this.user = new UserServices(client, endpoint);
  }
}
