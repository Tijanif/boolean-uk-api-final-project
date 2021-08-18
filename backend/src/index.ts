export {};
const express = require('express');
const morgan = require('morgan');

const coinRouter = require('./resources/coin/router');
const userRouter = require('./resources/user/router');
const walletRouter = require('./resources/wallet/router');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes

app.use('/coins', coinRouter);
app.use('/user', userRouter);
app.use('/wallet', walletRouter);

app.all('*', (req: any, res: { json: (arg0: { msg: string }) => void }) => {
  res.json({ msg: 'star getting this' });
});

// Listen
const PORT = 4000;

app.listen(PORT, () => {
  console.log('I am running');
});
