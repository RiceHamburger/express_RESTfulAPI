// websDev.module.js
import mysql from 'mysql';
import config from '../../config/config';

const connectionPool = mysql.createPool({
  connectionLimit: 10,
  host: config.mysqlHost,
  user: config.mysqlUserName,
  password: config.mysqlPass,
  database: config.mysqlDatabase
});

/* websDev  POST 新增 */
const createWebsDev = (insertValues) => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        connection.query('INSERT INTO webs_dev SET ?', insertValues, (error, result) => { // webs_dev資料表寫入一筆資料
          if (error) {
            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤
            reject(error);
          } else if (result.affectedRows === 1) {
            resolve(`新增成功！ id: ${result.insertId}`); // 寫入成功回傳寫入id
          }
          connection.release();
        });
      }
    });
  });
};

/*  websDev GET 取得  */
const selectWebsDev = () => {
    return new Promise((resolve, reject) => {
      connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else {
          connection.query( // Article撈取所有欄位的值組
            `SELECT
              *
            FROM
            webs_dev ORDER BY id desc`
            , (error, result) => {
              if (error) {
                console.error('SQL error: ', error);
                reject(error); // 寫入資料庫有問題時回傳錯誤
              } else {
                resolve(result); // 撈取成功回傳 JSON 資料
              }
              connection.release();
            }
          );
        }
      });
    });
  };

export default {
  createWebsDev,
  selectWebsDev
};