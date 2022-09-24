import axios from "axios";

const BASE_URL = "http://localhost:8080/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmQ3NGJmYTI2MmE2Y2RlZmI1YmFhZSIsImlhdCI6MTY2NDAxNjkxMiwiZXhwIjoxNjY0Mjc2MTEyfQ.2tUussyENxMtT3zwtb1r06IcVC0QBujvIstgaMdJBv4"

export const apiClient = axios.create({
    baseURL: BASE_URL,
});
export const userApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})