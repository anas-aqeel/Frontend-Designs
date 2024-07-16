function updateTime() {
    const clock = document.querySelector('.clock');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const periodElement = document.getElementById('period');
    const dayElement = document.getElementById('day');
    const formatButton = document.getElementById('toggle-format');
  
    let is24HourFormat = false;
  
    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let period = 'AM';
  
      if (!is24HourFormat) {
        if (hours >= 12) {
          period = 'PM';
          if (hours > 12) hours -= 12;
        }
        if (hours === 0) hours = 12;
      } else {
        period = '';
      }
  
      hoursElement.textContent = String(hours).padStart(2, '0');
      minutesElement.textContent = String(minutes).padStart(2, '0');
      secondsElement.textContent = String(seconds).padStart(2, '0');
      periodElement.textContent = period;
  
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = daysOfWeek[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate();
  
      dayElement.textContent = `${month}, ${day} ${date}`;
    }
  
    function toggleFormat() {
      is24HourFormat = !is24HourFormat;
      updateClock();
    }
  
    formatButton.addEventListener('click', toggleFormat);
  
    updateClock();
    setInterval(updateClock, 1000);
  }
  
  document.addEventListener('DOMContentLoaded', updateTime);
  