const bucket = document.querySelector(".bucket");
console.log("Bucket: ", bucket);

function fillBucket() {
  const bucketHeight = parseInt(bucket.style.height) || 0;
  if (+bucketHeight < 100) {
    bucket.style.height = bucketHeight + 20 + "%";
  }
}

fillBucket();
function emptyBucket() {
  const bucketHeight = parseInt(bucket.style.height);
  if (+bucketHeight > 0) {
    bucket.style.height = bucketHeight - 20 + "%";
  }
}
