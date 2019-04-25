export default date => {
  var monthNames = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ];
  return new Date(date)
    .toLocaleDateString()
    .split(".")
    .reduce((prev, el, ind) => {
      ind === 0
        ? (prev = " " + prev + el)
        : ind === 1
        ? (prev = prev + " " + monthNames[+el - 1])
        : (prev = prev + " " + el);
      return prev;
    }, "");
};
