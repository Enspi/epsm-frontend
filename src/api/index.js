import axios from "axios"
export async function CallApi(f) {
  try {
    let headers = new Headers();
    
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    headers.append('Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','https://master.d3uboawzuu8f07.amplifyapp.com');
    const response = await f()
    return response.data
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const res = e.response?.data || { status: "inactive" }
      return res
    } else {
      return { ok: 0, code: "client_err" }
    }
  }
}

export async function CallPost(url, payload, headers) {
  const response = await CallApi(() =>
    axios.post(`${process.env.REACT_APP_HOST}${url}`, payload, {
      headers: { ...headers, "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token", "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"},
      withCredentials: true,
    })
  )

  return response
}
export async function CallPut(url, payload, headers) {
  const response = await CallApi(() =>
    axios.put(`${process.env.REACT_APP_HOST}${url}`, payload, {
      headers: { ...headers, "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token", "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS" },
      withCredentials: true,
    })
  )

  return response
}

export async function CallGet(url, headers) {
  const response = await CallApi(() =>
    axios.get(`${process.env.REACT_APP_HOST}${url}`, {
      headers: { ...headers, "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token", "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS" },
      withCredentials: true,
    })
  )

  return response
}

export async function CallDelete(url, headers) {
  const response = await CallApi(() =>
    axios.delete(`${process.env.REACT_APP_HOST}${url}`, {
      headers: { ...headers },
      withCredentials: true,
    })
  )

  return response
}
