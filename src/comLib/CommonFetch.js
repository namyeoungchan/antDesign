const comFetch = (url,parameter)=>{
    const authCookie = localStorage.getItem('authCookie');
    const data =JSON.stringify(parameter.body?parameter.body:null);
    const method = parameter.method;
    console.log(authCookie);
    console.log('Authorization:', `Bearer ${authCookie}`);
    if(parameter.method==='POST'){
     return fetch( url,{
        method: method,
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${authCookie}`
        },
        body: data,
      }).then(response => response.json())
        .then(data => {
       
          return data;
        })
        .catch(error => {
        console.log("에러발생")
        console.log(error);
        throw error
          // 에러 처리
        });
    }else if(parameter.method==='GET'){
    
         return fetch( url,{
            method: method,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authCookie}`
            }
          }).then(response => response.json())
            .then(data => {
           
              return data;
            })
            .catch(error => {
            console.log("에러발생")
            console.log(error);
            throw error
              // 에러 처리
            });
    }
}

  export default comFetch;

  