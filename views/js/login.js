(function(){
    var myForm = document.getElementById('frmLogin');
    myForm.addEventListener("submit", function(ev){
        ev.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let formData = {
            "email" : email,
            "password" : password,
        };

        let endPoint = "/login";
        fetch(endPoint, {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(myData){
            console.dir(myData);
            
            if(myData[0].password === formData.password)
            {
                console.info("logged in");
            }
            else{
                console.info("login failed");
            }
        })
    })
})();