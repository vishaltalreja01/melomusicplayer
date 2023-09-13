//Get inputs from HTML
const UsernameInput = document.getElementById('username_input');
const PasswordInput = document.getElementById('password_input');
const ErrorDiv = document.getElementById('error_div');
const ErrorText = document.getElementById('error_text');

//Get button from HTML and add function when the button is clicked
const LoginBtn = document.getElementById('login_btn');

LoginBtn.addEventListener('click',()=>{
    //Verify if all inputs are completed, if not show error
    if(UsernameInput.value == '' || PasswordInput.value == ''){
        ErrorText.innerHTML="Error: Complete All Inputs";
        ErrorDiv.classList.add('error_visible');
        return;
    }
    //Get users from local storage
    const Users = JSON.parse(localStorage.getItem("Users") );

    //If the local storage is empty show error 
    if(Users == null){
        ErrorText.innerHTML="Error: This username is not registered.";
        ErrorDiv.classList.add('error_visible');
        return;
    }

    //Verify if the user exists by filtering the users array
    let curent_user = Object.values(Users).filter(user=>{ return user.username==UsernameInput.value});

    //If the user is not in the users array show error
    if(curent_user.length == 0 ){
        ErrorText.innerHTML="Error: This username is not registered.";
        ErrorDiv.classList.add('error_visible');
        return;
    }
    curent_user = curent_user[0];

    //verify if the password is corect, if not show error
    if(curent_user.password!=PasswordInput.value){
        ErrorText.innerHTML="Error: Wrong password.";
        ErrorDiv.classList.add('error_visible');
        return;
    }
    
    //set curent user in local storage
    localStorage.setItem("CurentUser",JSON.stringify(curent_user));
    
    //redirect to home page
    window.location.pathname='index.html'
});
