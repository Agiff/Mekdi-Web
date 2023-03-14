const getPrice = (price) => new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
}).format(price);

const getDate = (date) => date.split('T')[0];

export { getPrice, getDate }