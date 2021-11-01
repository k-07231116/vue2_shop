let baseURL;
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-';
    break;
  case 'test':
    baseURL = 'http://test-mall-';
    break;
  case 'production':
    baseURL = 'http://pre-mall-';

    break;
  default:
    break;
}
export default {
  baseURL
}
