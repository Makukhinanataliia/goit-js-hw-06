// Об'єкт, що представляє клієнта з деякою інформацією
const customer = {
  username: "Mango", 
  balance: 24000, 
  discount: 0.1, 
  orders: ["Burger", "Pizza", "Salad"],

  // Метод повертає баланс користувача
  getBalance() {
    return this.balance;
  },

  // Метод повертає поточну знижку на товари. 
  getDiscount() {
    return this.discount;
  },

  // Метод встановлює нове значення знижки на товари.
  setDiscount(value) {
    this.discount = value;
  },

  // Метод повертає список замовлень.
  getOrders() {
    return this.orders;
  },

  // Метод додає нове замовлення та оновлює баланс користувача.
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount; // Зменшує баланс з урахуванням знижки
    this.orders.push(order); // Додає нове замовлення до списку
  },
};

console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]