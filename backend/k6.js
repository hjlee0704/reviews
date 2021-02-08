import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const randomNumber = () => {
  return (Math.floor(Math.random() * Math.floor(600)) + 1);
};

export let errorRate = new Rate('errors');
export default function () {
  var url = 'http://localhost:3001/api/reviews/' + randomNumber();
  var params = {
  };
  check(http.get(url, params), {
    'status is 200': (r) => r.status === 200,
  }) || errorRate.add(1);
  sleep(0);
};
