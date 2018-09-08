const path = require('path');
const __basename = path.dirname(__dirname);

const config = {
  port: 8080,
  webpack: {
    path: {
      src: path.resolve(__basename, 'src'),
      pub: path.resolve(__basename, 'dist')
    }
  }
};
module.exports = config;
