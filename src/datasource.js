import { RESTDataSource } from 'apollo-datasource-rest'
import config from './config'

export class RestService extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = config.host_url || 'https://api.github.com/users/'
  }

  async getUser() {
    const user =  await this.get('/jayant12')
      console.log(user);
    return user;
  }
};