function _login(name) {
    confirm("Are you sure");
}


function alertMessage(text) {
    alert(text)
    console.log(text);
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}


function myFunction() {
  console.log(arguments);
}

function someClass(a) {
  this.a = a;
}

window.getUserInfo=()=>{
   console.log("getUserInfo=======");   
}



