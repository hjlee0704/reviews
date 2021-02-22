import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';
export let errorRate = new Rate('errors');
const randomNumber = () => {
  return (Math.floor(Math.random() * Math.floor(10000000)) + 1);
};
export default function () {
  var url = 'http://ec2-34-221-115-155.us-west-2.compute.amazonaws.com:3001/api/reviews/' + randomNumber();
  var params = {
  };
  check(http.get(url, params), {
    'status is 200': (r) => r.status === 200,
  }) || errorRate.add(1);
  sleep(0);
}