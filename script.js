// Set the countdown date (38 days from now)
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 38);

// Update the countdown every second
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML structure
  countdownElement.innerHTML = `
    <div class="countdown-unit">
      <span id="days" class="countdown-value">${days < 10 ? '0' : ''}${days}</span>
      <p class="unit-label">days</p>
    </div>
    <div class="countdown-unit">
      <span id="hours" class="countdown-value">${hours < 10 ? '0' : ''}${hours}</span>
      <p class="unit-label">hours</p>
    </div>
    <div class="countdown-unit">
      <span id="minutes" class="countdown-value">${minutes < 10 ? '0' : ''}${minutes}</span>
      <p class="unit-label">minutes</p>
    </div>
    <div class="countdown-unit">
      <span id="seconds" class="countdown-value">${seconds < 10 ? '0' : ''}${seconds}</span>
      <p class="unit-label">seconds</p>
    </div>
  `;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = 'Countdown expired!';
  }
}

// Initial call to display countdown immediately
updateCountdown();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
