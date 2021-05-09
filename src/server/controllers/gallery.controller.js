// gallery.controller.js
import galleryModule from '../modules/gallery.module';

/* gallery  POST 新增 */
const galleryPost = (req, res) => {
  // 取得新增參數
  const insertValues = req.body; 
  galleryModule.createGallery(insertValues).then((result) => {
    res.send(result); // 成功回傳result結果
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/*  gallery GET 取得  */
const galleryGet = (req, res) => {
    galleryModule.selectGallery().then((result) => {
      res.send(result); // 成功回傳result結果
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
  };

export default {
    galleryPost,
    galleryGet
};