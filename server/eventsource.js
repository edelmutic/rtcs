const express = require('express');
const cors = require('cors');
const events = require('events');
const port = 5000;

const emitter = new events.EventEmitter();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/connect', (req, res) => {
  res.writeHead(200, {
    Connection: 'keep alive',
    'Content type': 'text/event-stream',
    'Cache-control': 'no-cache',
  });
  emitter.on('newMessage', (message) => {
    res.write(message);
  });
});

app.post('/new-messages', (req, res) => {
  const message = req.body;
  emitter.emit('newMessage', message);
  res.status(200);
});

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
