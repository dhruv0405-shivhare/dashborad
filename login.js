function login()
{
    let a = localStorage.getItem("email");
    let b = localStorage.getItem("password");
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if(email==a && password==b)
    {
        window.location.href = "./login.html"
    }
    else{
        window.alert("Please enter valid email and password")
    }

}