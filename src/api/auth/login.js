import { CallPost } from "api";

export async function CallLogin({ email, password }) {
    const res = await CallPost('/api/auth/login', { email, password })
    return res
}