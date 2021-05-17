// gallery.module.js
import mysql from 'mysql';
import config from '../../config/config';

const connectionPool = mysql.createPool({
  connectionLimit: 10,
  host: config.mysqlHost,
  user: config.mysqlUserName,
  password: config.mysqlPass,
  database: config.mysqlDatabase
});

/* gallery  POST 新增 */
const createGallery = (insertValues) => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        connection.query('INSERT INTO gallery SET ?', insertValues, (error, result) => { // gallery資料表寫入一筆資料
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

/*  gallery GET 取得  */
const selectGallery = () => {
    return new Promise((resolve, reject) => {
      connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else {
          connection.query( // Article撈取所有欄位的值組
            `SELECT
            gallery.title,gallery.img,gallery.img_s,gallery_tags.tag_name
            FROM
            gallery
            INNER JOIN gallery_tag ON
            gallery.id = gallery_tag.g_id
            INNER JOIN gallery_tags ON gallery_tags.id=gallery_tag.t_id`
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
    createGallery,
    selectGallery
};