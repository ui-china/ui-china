开发
# 克隆项目
git clone https://github.com/PanJiaChen/vue-element-admin.git

# 进入项目目录
cd ui-china

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
浏览器访问 http://localhost:9527

发布
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
其它
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix

===================
或者在命令行上创建一个新的存储库。
echo "# ui-china" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/ui-china/ui-china.git
git push -u origin master
…或从命令行推送现有存储库。
git remote add origin https://github.com/ui-china/ui-china.git
git push -u origin master
…或从另一个存储库导入代码。
您可以使用Subversion、Mercurial或TFS项目中的代码初始化此存储库。
# ui-china
