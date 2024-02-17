console.log(this); // global

function f() {
  console.log(this); // global
}

person = {
  name: "Harsh",
  getname: function () {
    console.log(this); // person object
    function abc() {
      console.log(this); // global
    }
    abc();
  },
};

f();
person.getname();
