const createYears = () => {
  const anoAtual = new Date().getFullYear();
  const loop = anoAtual - 2013;
  return new Array(loop + 1).fill(0).map((item, index) => anoAtual - index);
};

const years = createYears();

const monthNamesPt = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const months = monthNamesPt.map((month, index) => ({ description: month, value: index + 1 }));

const days = new Array(31).fill(0).map((item, index) => index + 1);

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const convertDateToUTC = (date) => {
  const d = new Date(date);
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(date + offset).getTime();
};

const getLastYear = () => new Date().getFullYear() - 1;

export default {
  years,
  months,
  days,
  monthNames,
  convertDateToUTC,
  getLastYear,
};
