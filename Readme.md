

## 管理输出
   到目前为止，我们在 index.html 文件中手动引入所有资源，然而随着应用程序增长，并且一旦开始对文件名使用哈希(hash)]并输出多个 bundle，手动地对 index.html 文件进行管理，一切就会变得困难起来。然而，可以通过一些插件，会使这个过程更容易操控。
### 预先准备
   创建print.js，在 src/print.js 文件中添加一些逻辑：并且在 src/index.js 文件中使用这个函数：
### 设定 HtmlWebpackPlugin

首先安装插件，并且调整 webpack.config.js 文件：
``` bash
$ npm install --save-dev html-webpack-plugin

```

在我们构建之前，你应该了解，虽然在 dist/ 文件夹我们已经有 index.html 这个文件，然而 HtmlWebpackPlugin 还是会默认生成 index.html 文件。这就是说，它会用新生成的 index.html 文件，把我们的原来的替换

### 清理 /dist 文件夹

你可能已经注意到，由于过去的指南和代码示例遗留下来，导致我们的 /dist 文件夹相当杂乱。webpack 会生成文件，然后将这些文件放置在 /dist 文件夹中，但是 webpack 无法追踪到哪些文件是实际在项目中用到的。

通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。

clean-webpack-plugin 是一个比较普及的管理插件，让我们安装和配置下。
```bash
npm install clean-webpack-plugin --save-dev

```

现在执行 npm run build，再检查 /dist 文件夹。如果一切顺利，你现在应该不会再看到旧的文件，只有构建后生成的文件！

### Manifest
