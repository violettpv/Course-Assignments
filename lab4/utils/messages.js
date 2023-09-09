function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;

  let time = hh + ":" + mm;

  return time;
}

function formatMessage(username, text) {
  return {
    username,
    text,
    time: currentTime(),
  };
}

module.exports = formatMessage;
