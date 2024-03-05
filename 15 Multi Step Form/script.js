let currentStep = 1;
const steps = document.body.getElementsByClassName("number");
const activeSteps = [steps[0]];

function prev() {
  if (currentStep > 1) {
    currentStep = currentStep - 1;
    const removedStep = activeSteps.pop();
    removedStep.classList.remove("active");
  }
  animate();
}

function next() {
  if (currentStep > 0 && currentStep < 5) {
    activeSteps.push(steps[currentStep]);
    currentStep = currentStep + 1;
    activeSteps[activeSteps.length - 1].classList.add("active");
  }
  animate();
}

function animate() {}
