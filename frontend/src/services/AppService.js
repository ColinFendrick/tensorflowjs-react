import http from '../http-common';

const PREFIX = '/models';

const get = () => http.get(`${PREFIX}`);

const service = { get };

export default service;
