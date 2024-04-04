const bucket = document.querySelector(".bucket");
const glasses = document.querySelectorAll(".glass");

function reLevelBucket(h) {
  const bucketLevel = (Math.floor(bucket.style.height) || 0) / 10;
  if (h > bucketLevel) {
    fillBucket(h, bucketLevel);
  } else if (h < bucketLevel) {
    emptyBucket(h, bucketLevel);
  }
}

function fillBucket(h, bucketLevel) {
  if (+bucketLevel >= 100) return;
  bucket.style.height = bucketLevel + h * 10 + "%";
}

function emptyBucket(h, bucketLevel) {
  if (+bucketLevel <= 0) return;
  bucket.style.height = bucketLevel - h * 10 + "%";
}

function refillGlasses(event) {
  const id = +event.target?.id;
  if (!id) return;
  glasses.forEach((glass) => {
    if (glass.id > id) {
      glass.style.backgroundColor = "white";
    } else {
      glass.style.backgroundColor = "aqua";
    }
  });
  reLevelBucket(id);
}
