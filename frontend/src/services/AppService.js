import http from '../http-common';

const get = () => http.get('/basics');

const service = { get };

export default service;
