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
        email: "heallo"
        phone: "123-123-1231"
    });
    let response = http.get('http://localhost:8080/api/v1/user');

    // 응답 확인
    check(response, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(0.1); // 유저당 8 반복/s  -> 8 * 500 * 60 * 10번 = 240_000번
}
