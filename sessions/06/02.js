const time1 = performance.now();
fetch("https://cat-fact.herokuapp.com/factz")
  .then((res) => res.json())
  .then((res) =>
    res.forEach((element) => {
      console.log(element.text);
    })
    
  )
  .catch((err) => console.log("An error occurred.", err))
  .finally(() => {
    console.log("Task completed.");
    // window.localStorage
    // window.location
    // Analytics API time measurement
    console.log(performance.now() - time1);
  });

// finally: page redirect after payment
