let cont = 0;
export const getDateNow = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// convert date now locale to month and day, e.g. "12/12" equals December 12th
export const convertDateNowToMonthAndDay = (dateNow) => {
  const date = new Date(dateNow);
  const day = date.getDate();
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const month = date.getMonth() + 1;
  return `${months[month - 1]} ${day}`;
};
