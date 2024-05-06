const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const obj1 = { point: null, radius: null, timer: null };
const obj2 = { point: null, radius: null, timer: null };

document.addEventListener("click", (e) => {
  // if (timer1) {
  //   clearTimeout(timer1);
  // }
  if (isVisible(circle1)) {
    if (!isVisible(circle2)) {
      showCircle(e, circle2, obj2);
      console.log(isIntersecting());
    } else [circle1, circle2].forEach((el) => hide(el));
  } else showCircle(e, circle1, obj1);
});

function showCircle(e, circle, obj) {
  if (obj.timer) clearTimeout(obj.timer);
  obj.point = { x: ~~e.clientX, y: ~~e.clientY };
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;
  const width = scale(Math.random(), 0, 1, 10, 50);
  obj.radius = ~~width / 2;
  circle.style.width = `${width}px`;
  circle.style.height = `${width}px`;
  circle.classList.add("active");
  obj.timer = setTimeout(() => {
    hide(circle);
  }, 1000);
}

function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * ((outMax - outMin) / (inMax - inMin)) + outMax;
}

function isVisible(circle) {
  return circle.classList.contains("active");
}

function hide(circle) {
  circle.classList.remove("active");
}

function isIntersecting() {
  if (!obj1.point || !obj2.point) return "Points not available.";
  const [x, y] = [obj1.point.x - obj2.point.x, obj1.point.y - obj2.point.y];
  distance = Math.floor(Math.sqrt(x * x + y * y));
  return distance < obj1.radius + obj2.radius ? true : false;
}
