
try{
    const signInForm=document.getElementById("signin-form");
    signInForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        const signEmail=document.getElementById("email").value;
        const signPassword=document.getElementById("password").value;
        const signConfirmPass=document.getElementById("confirm-password").value;
        const username=document.getElementById("name").value;
        if(signPassword===signConfirmPass){
           setData(signEmail,signPassword,username)
        }
        else{
            alert("password doesn't match")
        }
    })
}
catch(e){
    console.log(e);
}

function setData(email,pass,username){
    localStorage.setItem('email',email);
    localStorage.setItem('password',pass);
    localStorage.setItem("username",username);
    window.location.href='log-in.html';

}

try{
        const logInDirect=document.getElementById("sign-up");
    logInDirect.addEventListener("click",()=>{
        window.location.href='log-in.html';
    })

    const signUpDirect=document.getElementsByClassName("sign-up-direct")[0];
    signUpDirect.addEventListener("click",()=>{
        window.location.href='index.html';
    })

}
catch(e){
    console.log(e);
}
// for  llog in page-----------



const loginForm=document.getElementById("login-form");
try{
    loginForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        const LogInEmail=document.getElementById("login-email").value;
        // console.log(LogInEmail);
        const logInPassword=document.getElementById("login-password").value;
    
        const storeEmail=localStorage.getItem('email');
        const storePassword=localStorage.getItem('password');
    
         if(LogInEmail===storeEmail && logInPassword===storePassword){
            console.log("im working");
            // renderDetails();
            // loginForm.addEventListener("click",renderDetails());
            window.location.href='profile.html'
         }
         else{
            alert("you entered wrong email or password");
         }
        
    })
}
catch(e){
    console.log(e);
}

// ------for-main-page-------

const myNames=document.getElementById("person-name");
let p=document.createElement('p');
p.innerText=localStorage.getItem('username');
myNames.appendChild(p)

const myEmail=document.getElementById("my-email");
let p2=document.createElement('p');
p2.innerText=localStorage.getItem('email');
myEmail.appendChild(p2)

// const myToken=document.getElementById("my-token");
// let p3=document.createElement('p');
// p3.innerText=localStorage.getItem('token');
// myNames.appendChild(p3)

const myPassword=document.getElementById("my-password");
let p4=document.createElement('p');
p4.innerText=localStorage.getItem('password');
myPassword.appendChild(p4)

const logoutBtn=document.getElementById("logout");
logoutBtn.addEventListener("click",()=>{
    localStorage.clear();
    window.location.href='index.html'
})
