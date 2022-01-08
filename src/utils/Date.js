//get Date by locale
export const getDateNow = () => {
  const date = new Date();
  return new Intl.DateTimeFormat("pt-BR").format(date);
};

//get Date tomorrow
export const getDateTomorrow = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return new Intl.DateTimeFormat("pt-BR").format(date);
};

// convert date now locale to month and day, e.g. "12/12/2022" equals December 12th
export const convertDateNowToMonthAndDay = (dateNow) => {
  const dateInverted = dateNow.split("/").reverse().join("/");
  const date = new Date(dateInverted);

  // request a weekday along with a long date
  const options = {
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("default", options).format(date);
};
