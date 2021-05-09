// gallery.route.js
import express from 'express';
import galleryCtrl from '../controllers/gallery.controller';

const router = express.Router();

router.route('/')
.post(galleryCtrl.galleryPost) /** 新增 gallery 值組 */
.get(galleryCtrl.galleryGet); /** 取得 gallery 所有值組 */

export default router;