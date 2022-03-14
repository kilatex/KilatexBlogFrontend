const url = 'http://localhost:8080/';
function isAuth ()  {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if(!token || !user ||  typeof token !== 'string' || typeof user !== 'string'){
        window.location.href = url+"login";
    }
}

export default isAuth;