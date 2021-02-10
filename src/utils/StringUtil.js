const dateToStr = (value) => new Date(value).toLocaleDateString('pt-BR');

const dateTimeToStr = (value) => new Date(value).toLocaleDateString('pt-BR', {
  dateStyle: 'short',
  timeStyle: 'medium',
});

const formatDecimal = (value) => (value !== null
  ? value.toLocaleString('pt-BR', {
    useGrouping: true,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  : '0,00');

const formatCurrency = (value) => `R$ ${formatDecimal(value)}`;

const formatAccountancy = (value) => (value < 0
  ? `${formatDecimal(Math.abs(value))}D`
  : `${formatDecimal(value)}C`);

const formatAccountancySaldoInvertido = (value, saldoInvertido) => (saldoInvertido
  ? `${formatDecimal(Math.abs(value))}D`
  : `${formatDecimal(value)}C`);

const formatCPF = (cpf) => cpf
  .replace(/\D/g, '')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

const formatCNPJ = (cnpj) => cnpj
  .replace(/\D/g, '')
  .replace(/^(\d{2})(\d)/, '$1.$2')
  .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
  .replace(/\.(\d{3})(\d)/, '.$1/$2')
  .replace(/(\d{4})(\d)/, '$1-$2');

/* Método para remover a mascara do CNPJ */
const parseCNPJ = (cnpj) => cnpj.replace(/\D/g, '');

const ifExists = (value) => (value && value != null ? value : '');

const isNullOrWhitespaceOnly = (string) => !string || RegExp(/^\s+$/).test(string);

export default {
  dateToStr,
  dateTimeToStr,
  formatDecimal,
  formatCurrency,
  formatAccountancy,
  formatCPF,
  formatCNPJ,
  parseCNPJ,
  ifExists,
  isNullOrWhitespaceOnly,
  formatAccountancySaldoInvertido,
};
