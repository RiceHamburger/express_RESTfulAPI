// websDev.controller.js
import websDevModule from '../modules/websDev.module';

/* websDev  POST 新增 */
const websDevPost = (req, res) => {
  // 取得新增參數
  const insertValues = req.body;
    websDevModule.createWebsDev(insertValues).then((result) => {
    res.send(result); // 成功回傳result結果
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/*  websDev GET 取得  */
const websDevGet = (req, res) => {
    websDevModule.selectWebsDev().then((result) => {
      res.send(result); // 成功回傳result結果
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
  };

export default {
    websDevPost,
    websDevGet
};