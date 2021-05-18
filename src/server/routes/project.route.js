// project.route.js
import express from 'express';
import projectCtrl from '../controllers/project.controller';

const router = express.Router();

router.route('/')
.post(projectCtrl.projectPost) /** 新增 project 值組 */
.get(projectCtrl.projectGet); /** 取得 project 所有值組 */

export default router;