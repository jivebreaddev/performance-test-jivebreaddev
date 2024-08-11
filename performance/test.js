import http from 'k6/http';
import { check } from 'k6';
import { sleep } from "k6";

export let options = {
    vus: 500,
    duration: '10m',
};

export default function () {

    const body = JSON.stringify({
        name: "HELLO",
        email: "heallo",
        phone: "123-123-1231"
    });
    let response = http.post('http://43.201.169.49:8080/api/v1/user');

    // 응답 확인
    check(response, {
        'is status 200': (r) => r.status === 200,
    }); //     command: run /test.js -e MY_HOSTNAME=43.201.169.49 --out json=test.json --out influxdb=http://localhost:8086/myk6db
//docker-compose exec k6-client run /test.js --out json=test.json --out influxdb=http://localhost:8086/myk6db
    sleep(0.1); // 유저당 8 반복/s  -> 8 * 500 * 60 * 10번 = 240_000번
}
