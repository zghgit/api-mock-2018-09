const express = require('express');
const router = express.Router();
const Mock = require('mockjs');

// 请求列表
router.get('/list', (req, res, next) => {
    const data = Mock.mock({
        'total': 100,
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|100-2111': [{
            'id|+1': 1,
            'title': '@ctitle(15, 20)',
            'status': '@pick(["审核", "预申请", "转正", "正式", "已取消"])',
            'date': '@datetime'
        }]
    });
    res.json({code: 200, data});
});

module.exports = router;