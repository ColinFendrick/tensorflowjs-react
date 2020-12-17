import http from '../http-common';

const PREFIX = '/models';

const healthCheck = () => http.get('');

const get = () => http.get(`${PREFIX}`);

const service = { healthCheck, get };

export default service;
