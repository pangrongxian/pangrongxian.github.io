function _login(name) {
   window.dartFunc("dartFunc")
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

function openJs() {
  console.log("openJs======" + arguments);
}



