console.log("Task 2");

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );
  // Возвращает сразу выполненный промис
  return Promise.resolve(updatedUsers);
};

const logger = (updatedUsers) => console.table(updatedUsers);

// Конечный результат
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);