// src/utils/formatCurrency.js

export function formatCurrency(valor) {
  return new Intl.NumberFormat("es-UY", {
    style: "currency",
    currency: "UYU",
    maximumFractionDigits: 0,
  }).format(valor);
}
