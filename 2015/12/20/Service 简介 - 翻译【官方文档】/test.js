function _login(name) {
  alert(name + "我是引用进来的方法~~");
}


function alertMessage(text) {
    alert(text)
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
