const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// 设置视图引擎
app.set('view engine', 'ejs');

// 使用 API 路由
app.use('/api', apiRoutes);

// 默认页面
app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
