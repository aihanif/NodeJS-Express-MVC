const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());

// Simpan tasks dalam memori
let tasks = [];

// Dapatkan semua tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Tambah task baru
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTask = { id: Date.now(), title };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Padam task ikut id
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);
  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json({ message: 'Task deleted' });
});

// Kemaskini task ikut id
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title } = req.body;
  const task = tasks.find(task => task.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  task.title = title;
  res.json(task);
});

// Serve static files (index.html, etc.)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.send('Welcome to the Todo Task API! Use /tasks endpoint to view all tasks.');
});

app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
}); 