const form = document.querySelector('form');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const swingSpeed = parseInt(document.querySelector('#swing-speed').value);
  const ballFlight = document.querySelector('#ball-flight').value;
  let recommendedShaft = getRecommendedShaft(swingSpeed, ballFlight);
  resultsDiv.innerHTML = `<p>Recommended shaft: ${recommendedShaft}</p>`;
});

function getRecommendedShaft(swingSpeed, ballFlight) {
  let recommendedShaft;

  if (swingSpeed < 80) {
    recommendedShaft = "Senior flex";
  } else if (swingSpeed < 90) {
    if (ballFlight === "low") {
      recommendedShaft = "Regular flex";
    } else {
      recommendedShaft = "Stiff flex";
    }
  } else if (swingSpeed < 105) {
    if (ballFlight === "low") {
      recommendedShaft = "Stiff flex";
    } else if (ballFlight === "medium") {
      recommendedShaft = "Extra stiff flex";
    } else {
      recommendedShaft = "Tour stiff flex";
    }
  } else {
    if (ballFlight === "low") {
      recommendedShaft = "Extra stiff flex";
    } else if (ballFlight === "medium") {
      recommendedShaft = "Tour stiff flex";
    } else {
      recommendedShaft = "Tour extra stiff flex";
    }
  }

  return recommendedShaft;
}

for (let swingSpeed = 60; swingSpeed <= 120; swingSpeed += 10) {
  for (let ballFlight of ['low', 'medium', 'high']) {
    const recommendedShaft = getRecommendedShaft(swingSpeed, ballFlight);
    resultsDiv.innerHTML += `<p>Swing speed: ${swingSpeed}, ball flight: ${ballFlight}, recommended shaft: ${recommendedShaft}</p>`;
  }
}
