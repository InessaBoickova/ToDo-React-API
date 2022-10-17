class Service{
    singUp = (data) =>{
        fetch('https://first-node-js-app-r.herokuapp.com/api/users/register',{
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
    singIn = () =>{

    }
    
}
export default Service ;