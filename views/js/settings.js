(function(){
<<<<<<< HEAD
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

=======

    let endPoint = "/api/getUser";
    fetch(endPoint, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(myData){
        if (myData){
            document.getElementById("login").style.display = "none";
            document.getElementById("register").style.display = "none";
            document.getElementById("logout").style.display = "block";

>>>>>>> Matt
            console.log(myData.status);
            if (myData.status === "admin")
            {
                document.getElementById("adminOptions").style.display = "block";
                // document.getElementById("frmLogin").style.display = "none";
                document.getElementById("errorMessage").style.display = "none";
            }else{
                document.getElementById("adminOptions").style.display = "none";
                document.getElementById("errorMessage").style.display = "block";
                // document.getElementById("frmLogin").style.display = "blcok";
            }
        }
    })

    document.getElementById("logout").addEventListener("click", function(){
        var endPoint = "/api/logout"
        fetch(endPoint, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            if (data.msg ==="successful")
            {
                window.location.href = "index.html";
            }
            
        })
    })
})();