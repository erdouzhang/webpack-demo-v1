
## 资源管理版本v3
## 安装
安装webpack的方法


## 前提条件
  
  在开始之前，请确保安装了 Node.js 的最新版本。使用 Node.js 最新的长期支持版本(LTS - Long Term Support)，是理想的起步。使用旧版本，你可能遇到各种问题，因为它们可能缺少 webpack 功能以及/或者缺少相关 package 包。

## 本地安装
```bash
$ npm install --save-dev webpack
$ npm install --save-dev webpack@<version>
```

如果你使用 webpack 4+ 版本，你还需要安装 CLI。
```bash

$ npm install --save-dev webpack-cli

```



### 全局安装
```bash
$ npm install --global webpack

```

## 基本安装

首先我们创建一个目录，初始化 npm，然后 在本地安装 webpack，接着安装 webpack-cli（此工具用于在命令行中运行 webpack）：

## 管理输出
   到目前为止，我们在 index.html 文件中手动引入所有资源，然而随着应用程序增长，并且一旦开始对文件名使用哈希(hash)]并输出多个 bundle，手动地对 index.html 文件进行管理，一切就会变得困难起来。然而，可以通过一些插件，会使这个过程更容易操控。
### 预先准备


### 设定 HtmlWebpackPlugin
首先安装插件，并且调整 webpack.config.js 文件： 

在我们构建之前，你应该了解，虽然在 dist/ 文件夹我们已经有 index.html 这个文件，然而 HtmlWebpackPlugin 还是会默认生成 index.html 文件。这就是说，它会用新生成的 index.html 文件，把我们的原来的替换。让我们看下在执行 npm run build 后会发生什么：

### 清理 /dist 文件夹
你可能已经注意到，由于过去的指南和代码示例遗留下来，导致我们的 /dist 文件夹相当杂乱。webpack 会生成文件，然后将这些文件放置在 /dist 文件夹中，但是 webpack 无法追踪到哪些文件是实际在项目中用到的。

通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。

clean-webpack-plugin 是一个比较普及的管理插件，让我们安装和配置下。

$ npm install clean-webpack-plugin --save-dev

### Manifest
你可能会感兴趣，webpack及其插件似乎“知道”应该哪些文件生成。答案是，通过 manifest，webpack 能够对「你的模块映射到输出 bundle 的过程」保持追踪。如果你对通过其他方式来管理 webpack 的输出更感兴趣，那么首先了解 manifest 是个好的开始。

通过使用 WebpackManifestPlugin，可以直接将数据提取到一个 json 文件，以供使用。

## 管理输出
到目前为止，我们在 index.html 文件中手动引入所有资源，然而随着应用程序增长，并且一旦开始对文件名使用哈希(hash)]并输出多个 bundle，手动地对 index.html 文件进行管理，一切就会变得困难起来。然而，可以通过一些插件，会使这个过程更容易操控。


 
## 开发
  先来看看如何建立一个开发环境，使我们的开发变得更容易一些。
  本指南中的工具仅用于开发环境，请不要在生产环境中使用它们！
  ### 使用 source map
  当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，而其中一个源文件包含一个错误，那么堆栈跟踪就会简单地指向到 bundle.js。这并通常没有太多帮助，因为你可能需要准确地知道错误来自于哪个源文件。

为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。

source map 有很多不同的选项可用，请务必仔细阅读它们，以便可以根据需要进行配置。

对于本指南，我们使用 inline-source-map 选项，这有助于解释说明我们的目的（仅解释说明，不要用于生产环境）：
### 使用观察模式
你可以指示 webpack "watch" 依赖图中的所有文件以进行更改。如果其中一个文件被更新，代码将被重新编译，所以你不必手动运行整个构建。

我们添加一个用于启动 webpack 的观察模式的 npm script 脚本：

 "watch": "webpack --watch",

 ### 使用 webpack-dev-server
 webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。让我们设置以下：
```bash
$ npm install --save-dev webpack-dev-server
```
修改配置文件，告诉开发服务器(dev server)，在哪里查找文件：

  devServer: {
    contentBase: './dist'
   }

以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。

让我们添加一个 script 脚本，可以直接运行开发服务器(dev server)：

```bash
$  "start": "webpack-dev-server --open",
```

现在，我们可以在命令行中运行 npm start，就会看到浏览器自动加载页面。如果现在修改和保存任意源文件，web 服务器就会自动重新加载编译后的代码。试一下！

webpack-dev-server 带有许多可配置的选项。转到相关文档以了解更多。

### 使用 webpack-dev-middleware
webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它，同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求。接下来是一个 webpack-dev-middleware 配合 express server 的示例。

首先，安装 express 和 webpack-dev-middleware：

```bash
$ npm install --save-dev express webpack-dev-middleware

```


## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## People


## License
