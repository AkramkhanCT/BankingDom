document.getElementById("loginbutton").addEventListener
('click', function(){
// default admin aacces
const userGmail = "admin@gmail.com";
const userpass = "1234";
// get user emauil
const loginEmail = document.getElementById("loginemail");
const givenEmail = loginEmail.value;

//get user password
const loginPass = document.getElementById("loginpass");
const givenPass = loginPass.value;

if (givenEmail === userGmail && givenPass === userpass) {
   window.location.href="home.html";
   
} else{
   alert("user acces denied !");
}

});

