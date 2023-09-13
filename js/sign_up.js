//Get inputs from HTML
const UsernameInput = document.getElementById('username_input');
const PasswordInput = document.getElementById('password_input');
const NameInput = document.getElementById('name_input');
const SurnameInput = document.getElementById('surname_input');
const EmailInput = document.getElementById('email_input');
const DateInput = document.getElementById('date_input');
const ImageInput = document.getElementById("profile_input");
const TermsInput = document.getElementById("checkbox_input");

const ErrorDiv = document.getElementById('error_div');
const ErrorText = document.getElementById('error_text');

//Get button from HTML and add function when the button is clicked
const RegisterAccountBtn = document.getElementById('save_account_btn');

RegisterAccountBtn.addEventListener('click',async()=>{
    //Verify if all inputs are completed, if not show error

    if(!TermsInput.checked || UsernameInput.value == '' || PasswordInput.value == '' || NameInput.value == '' || SurnameInput.value == '' || EmailInput.value == '' || DateInput.value==''){
        //console.log("Error: Complete All Inputs");
        ErrorText.innerHTML="Error: Complete All Inputs";
        ErrorDiv.classList.add('error_visible');
        return;
    }

    // Get users from local storage
    let Users = JSON.parse(localStorage.getItem("Users") );

    //if there are no previous users create new array
    if(Users == null)
        Users = new Array();

    //verify if user already exists, if so show error
    let curent_user = Users.filter(user=>{ return user.username==UsernameInput.value});
    if(curent_user.length != 0){
        ErrorText.innerHTML="Error: User already exits";
        ErrorDiv.classList.add('error_visible');
        return;
    }

    // create new user object with fields for every input 
    const new_user = {
        username:UsernameInput.value,
        password:PasswordInput.value,
        name:NameInput.value,
        surname:SurnameInput.value,
        email:EmailInput.value,
        date:DateInput.value,
    }

    //verify if an image was attached or not, and add it to the object as a base64 string
    if(ImageInput.files[0]!=null)
        new_user.image = await toBase64(ImageInput.files[0]);
    
    //push new_user into the array of users
    Users.push(new_user)

    //Update the Users from local storage and the curent user logged in
    localStorage.setItem("CurentUser",JSON.stringify(new_user));
    localStorage.setItem("Users",JSON.stringify(Users));
    
    //redirect to home page
    window.location.pathname='index.html'
})

//function that converts image in base 64
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
