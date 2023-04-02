// Countdown

const countDownDate = new Date("Jan 1, 2024 00:00:01").getTime();
//const countDownDate = new Date("Dec 31, 2022 04:38:00").getTime();

const getRemainingTime = () => {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;
    
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  let done = countDownDate < now;

  return {
    hours,
    minutes,
    seconds,
    done
  }
};


export default {
  getRemainingTime
}
