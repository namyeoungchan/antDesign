const comFetch = (url, parameter) => {
  const authCookie = localStorage.getItem('authCookie');
  const data = JSON.stringify(parameter.body ? parameter.body : null);
  const method = parameter.method;
  switch (method) {
    case 'POST':
      return fetch(url, {
        method: method,
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8080',
          Authorization: `Bearer ${authCookie}`,
        },
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw error;
          // 에러 처리
        });
    case 'GET':
      return fetch(url, {
        method: method,
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8080',
          Authorization: `Bearer ${authCookie}`,
        },
      })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw error;
          // 에러 처리
        });

    case 'CUSTOM':
      return fetch(url, {
        method: method,
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8080',
          Authorization: `Bearer ${authCookie}`,
        },
      })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw error;
          // 에러 처리
        });
  }
};
export default comFetch;
