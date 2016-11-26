export const byOrder = (order=[]) => (a, b) => 
  order.indexOf(a.name) - order.indexOf(b.name);
