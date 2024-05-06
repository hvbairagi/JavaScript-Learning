{
  /* <body>
  <button id="resolve">Resolve</button>
  <button id="reject">Reject</button>
</body> */
}

const p = new Promise((resolve, reject) => {
  document.getElementById("resolve").addEventListener("click", () => {
    resolve("Resolved");
  });

  document.getElementById("reject").addEventListener("click", () => {
    resolve("Rejected");
  });
});

p.then((res) => console.log(res)).catch((err) => console.log(err));

async function myFn() {
  const res = await p;
  return "Harsh";
}

const res = await myFn();
console.log(res);
console.log("something");
// res.then((r) => console.log(r));
