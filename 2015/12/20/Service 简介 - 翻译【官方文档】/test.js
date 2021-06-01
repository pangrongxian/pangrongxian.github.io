function _login(name) {
   window.getUserInfo()
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

function getUserInfo() {
  console.log("getUserInfo======" + arguments[0]);
}



