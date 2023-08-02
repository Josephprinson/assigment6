var username=document.getElementById("feild1");
var err1=document.getElementById("err1")
var pwd =document.getElementById("feild2");
var err2 =document.getElementById("err2")

function validatename(){
    if(username.value.trim()==""){
        err1.innerText="username cannot be empty" //for empty answer
        return false
    }

       else{
        err1.innerText=""; 
        username.style.border="5xp  solid green"
    }
    return true
}
function validatepwd(){
    if(username.value.trim()==""){
        username.style.border="2px solid red"
        err2.innerText="password should not be empty"
        return false
    }
    else{
        username.style.border="2px solid green"
        return true
    }

}


function verify(callback){
    console.log('hiii');
    event.preventDefault()
    if(!validatename()|| !validatepwd()){
        return false
    }
    else{
        if(username.value == 'admin' && pwd.value == '123456') 
        callback()
    }
}
  
function redirect(){
    window.location = 'todo.html'
}