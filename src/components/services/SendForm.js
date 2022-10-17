class Service{
    _loginUrl = 'https://first-node-js-app-r.herokuapp.com/api/auth/login';
    _registerUrl = 'https://first-node-js-app-r.herokuapp.com/api/users/register';

    post = (url,data) =>{
        fetch(url,{
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
        }).then(response => {  
        
            if(response.status === 400){
                response.json().then((a)=> {
                    (a.message) ?  alert(a.message) : a.errors.map((item) => alert(item.msg))  
                })
            }else{
                response.json().then(json => {   
                    alert('окей')
                })
            }
        })
    }

    singUp = (data) =>{
       this.post(this._registerUrl,data);
    }

    singIn = (data) =>{
        this.post(this._loginUrl,data);
    }

}
export default Service ;