let currentStep = 1;
const steps = document.body.getElementsByClassName("number");
const activeSteps = [steps[0]];
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function prev() {
  if (currentStep > 1) {
    currentStep = currentStep - 1;
    disableButton();
    const removedStep = activeSteps.pop();
    removedStep.classList.remove("active");
  }
}

function next() {
  if (currentStep > 0 && currentStep < 5) {
    activeSteps.push(steps[currentStep]);
    currentStep = currentStep + 1;
    disableButton();
    activeSteps[activeSteps.length - 1].classList.add("active");
  }
}

function disableButton() {
  if (currentStep === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
  if (currentStep === 5) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}
