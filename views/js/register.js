(function(){
    var myForm = document.getElementById('frmRegister');
    myForm.addEventListener("submit", function(ev){
        ev.preventDefault();

        let firstName = document.getElementById('firstName').value;
        let surname = document.getElementById('surname').value;
        let dob = document.getElementById('dob').value;
        let persona = document.getElementById('persona').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let passwordConfirm = document.getElementById('passwordConfirm').value;
        let country = document.getElementById('country').selectedIndex;

        if (password === passwordConfirm)
        {
            let formData = {
                "firstName" : firstName,
                "surname" : surname,
                "dob" : dob,
                "persona" : persona,
                "email" : email,
                "password" : password,
                "country" : country
            };
    
            let endPoint = "/registration";
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
            })
        }
        else{
            console.info("password not match");
            document.getElementById("passwordConfirmImg").style.display = "block";
            document.getElementById("passwordImg").style.display = "block";

        }
    })

    
})();