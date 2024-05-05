if ([]) {
  // [] is a truthy value
  console.log("chai");
}

if ([] == false) {
  // [] -> '' -> false == false -> true
  console.log("cookie");
} else {
  console.log("pizza");
}
