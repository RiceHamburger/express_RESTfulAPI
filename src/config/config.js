require('dotenv').config();

const config = {
  version: process.env.VERSION, // 版本
  env: process.env.NODE_ENV, // 開發模式
  port: process.env.PORT, // 阜號
  mysqlPort: process.env.MYSQL_PORT, // 連接阜號(MYSQL_PORT)
  mysqlHost: process.env.MYSQL_HOST, // 主機名稱 (MYSQL_HOST)
  mysqlUserName: process.env.MYSQL_USER, // 用戶名稱 (MYSQL_USER)
  mysqlPass: process.env.MYSQL_PASS, // 資料庫密碼(MYSQL_PASS)
  mysqlDatabase: process.env.MYSQL_DATABASE // 資料庫名稱(MYSQL_DATABASE)
};

// 匯出共用
export default config;
