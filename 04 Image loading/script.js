const image = document.getElementsByTagName("img");
Image.prototype.load = function (url) {
  var thisImg = this;
  var xmlHTTP = new XMLHttpRequest();
  xmlHTTP.open("GET", url, true);
  xmlHTTP.responseType = "arraybuffer";
  xmlHTTP.onload = function (e) {
    var blob = new Blob([this.response]);
    thisImg.src = window.URL.createObjectURL(blob);
  };
  xmlHTTP.onprogress = function (e) {
    thisImg.completedPercentage = parseInt((e.loaded / e.total) * 100);
    console.log(thisImg);
    console.log(thisImg.completedPercentage);
    image.style.opacity = 100 - thisImg.completedPercentage;
  };
  xmlHTTP.onloadstart = function () {
    thisImg.completedPercentage = 0;
  };
  xmlHTTP.send();
};

Image.prototype.completedPercentage = 0;

const img = new Image();
const url =
  "https://images.unsplash.com/photo-1700142572646-f37e24db81fe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const container = document.getElementById("container");
img.classList.add("img");
img.load(url);
// container.appendChild(img);
