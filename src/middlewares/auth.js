const url = 'http://localhost:8080/';
export const  isAuth =  ()  =>  {
    const token = localStorage.getItem('token');
    if(!token){
        window.location.href = url+"login";
    }
}


export const  isNotAuth =  () =>   {

  

    const token = localStorage.getItem('token');
    let headers = {
  
        'Authorization' : 'Bearer '+token
      }
  
  
      fetch('http://localhost:8000/api/auth/isauth', {
        method: 'GET', // or 'PUT'
        headers: headers
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.error != "400"){
            window.location.href = url+"home";
          }
        })
       
   
  
  }
  
  
  