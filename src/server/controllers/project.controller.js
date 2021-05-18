// project.controller.js
import projectModule from '../modules/project.module';

/* project  POST 新增 */
const projectPost = (req, res) => {
  // 取得新增參數
  const insertValues = req.body;
    projectModule.createProject(insertValues).then((result) => {
    res.send(result); // 成功回傳result結果
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/*  project GET 取得  */
const projectGet = (req, res) => {
    projectModule.selectProject().then((result) => {
      res.send(result); // 成功回傳result結果
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
  };

export default {
    projectPost,
    projectGet
};