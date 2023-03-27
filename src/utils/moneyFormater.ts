const moneyFormater = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});
export default moneyFormater;
