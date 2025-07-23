let tasks = [];

module.exports = {
  getAll: () => tasks,
  getById: (id) => tasks.find(task => task.id === id),
  add: (title) => {
    const newTask = { id: Date.now(), title };
    tasks.push(newTask);
    return newTask;
  },
  update: (id, title) => {
    const task = tasks.find(task => task.id === id);
    if (task) task.title = title;
    return task;
  },
  delete: (id) => {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    return tasks.length < initialLength;
  }
}; 