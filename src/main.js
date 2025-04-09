import './style.css'
const updateTime = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('timeDisplay').textContent = timeString;
};
updateTime();
setInterval(updateTime, 1000);