//get Date by locale

export const getDateNow = () => {
  const date = new Date();
  return new Intl.DateTimeFormat("pt-BR").format(date);
};

// convert date now locale to month and day, e.g. "12/12" equals December 12th
export const convertDateNowToMonthAndDay = (dateNow) => {
  var date = new Date(dateNow);

  // request a weekday along with a long date
  const options = {
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("pt-BR", options).format(date);
};
