import app from './app';

const port = 2023;
app.listen(port, () => {
  console.log();
  console.log(`Running on port ${port}`);
  console.log(`CTRL and Click in http://localhost:${port}`);
});
