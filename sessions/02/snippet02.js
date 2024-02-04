function func() {
  let a = "Hello";

  if (true) {
    let a = "Hello World";
    console.log(a);
  }

  console.log(a);
}
func();
