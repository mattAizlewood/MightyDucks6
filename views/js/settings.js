(function(){
    var myForm = document.getElementById('frmLogin');
    console.log(myForm);
    myForm.addEventListener("submit", function(ev){
        ev.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let formData = {
            "email" : email,
            "password" : password,
        };

        let endPoint = "/api/getUser";
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

            console.log(myData.status);
            if (myData.status === "admin")
            {
                document.getElementById("adminOptions").style.display = "block";
                document.getElementById("frmLogin").style.display = "none";
                document.getElementById("errorMessage").style.display = "none";
            }else{
                document.getElementById("adminOptions").style.display = "none";
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("frmLogin").style.display = "blcok";
            }
        })
    })
})();