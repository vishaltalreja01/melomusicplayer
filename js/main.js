
const NoUserDiv = document.getElementById("no_user_div");
const LoggedUserDiv = document.getElementById("logged_user_div");
const AccountUserDiv = document.getElementById("account_user_div");


// function that gets the curent user, if there is no user logged in it shows the log in and sign in menu
// This function is also called on load
const getUser = () => {
    const curent_user = localStorage.getItem("CurentUser")
    if (curent_user != null) {
        NoUserDiv.classList.add('hidden');
        LoggedUserDiv.classList.remove('hidden');
        AccountUserDiv.classList.remove('hidden');
    }
    else {
        NoUserDiv.classList.remove('hidden');
        LoggedUserDiv.classList.add('hidden');
        AccountUserDiv.classList.add('hidden');
    }
    console.log(curent_user);
}

// Add and remove the visibility of the dropdown menu
const AccountIcon = document.getElementById("account_icon");
const DropDownMenu = document.getElementById("dropdown_menu");

AccountIcon.addEventListener('click', () => {
    DropDownMenu.classList.toggle('hidden');
})


//Remove curent user on log out
const LogOutBtn = document.getElementById("logout_btn");

LogOutBtn.addEventListener('click', () => {
    localStorage.removeItem("CurentUser");
    getUser();
})

// function searchSong() {
//     var input, filter, ul, li, a, i, txtValue;

//     input = document.getElementById("myInput");

//     filter = input.value.toUpperCase();
//     ul = document.getElementsByTagName("songs");
//     li = ul.getElementsByTagName("li");

//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

// document.getElementById("myInput").addEventListener("keyup", function (evt) {
//     [].forEach.call(document.querySelectorAll(".gallery"), function (desc) {
//         if (desc.textContent.indexOf(evt.target.value) === -1) {
//             desc.classList.add("hide");
//         } else {
//             desc.classList.remove("hide");
//         }
//     });
// }, false);