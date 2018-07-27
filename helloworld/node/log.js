var PREFIX = '[haohao]: ';

var LOGGING_MAP = {
  'warn':'⚠️ 警告',
  'error':'❌错误'
};

// log('warn',‘这是一条警告信息’);
// log('error', '这是一条错误信息');
function log (type, msg) {
  return LOGGING_MAP[type] + msg;
}

module.exports = log;
