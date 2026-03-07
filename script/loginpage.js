document.getElementById("btn-sign")
.addEventListener("click",function(){
    //1- get the user name input
    const inputName =document.getElementById("input-name");
    const userName =inputName.value;
    console.log(userName);
    // 2-get the user password input
    const passwordInput =document.getElementById("input-password");
    const password =passwordInput.value;
    console.log(password);
    //3-match user name & password
    if(userName == "admin" && password =="admin123"){
        //3.1 true::> alert home page
        alert("Login Page success")
        // window.location.replace("./main_page.html")
        window.location.assign("./main_page.html")
    }else{
        //3-2 false:::> alert return
        alert("login page failed")
        return;
    }
})