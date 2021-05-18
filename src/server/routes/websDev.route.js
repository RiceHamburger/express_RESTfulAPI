// websDev.route.js
import express from 'express';
import websDevCtrl from '../controllers/websDev.controller';

const router = express.Router();

router.route('/')
.post(websDevCtrl.projectPost) /** 新增 websDev 值組 */
.get(websDevCtrl.projectGet); /** 取得 websDev 所有值組 */

export default router;