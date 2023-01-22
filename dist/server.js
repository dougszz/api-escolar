"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = 2023;
_app2.default.listen(port, () => {
  console.log();
  console.log(`Running on port ${port}`);
  console.log(`CTRL and Click in http://localhost:${port}`);
});
