## 代码分离

代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

有三种常用的代码分离方法：

入口起点：使用 entry 配置手动地分离代码。
防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
动态导入：通过模块的内联函数调用来分离代码。

### 入口起点(entry points)

这是迄今为止最简单、最直观的分离代码的方式。不过，这种方式手动配置较多，并有一些陷阱，我们将会解决这些问题。先来看看如何从 main bundle 中分离另一个模块：

正如前面提到的，这种方法存在一些问题:

如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。
这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。
以上两点中，第一点对我们的示例来说无疑是个问题，因为之前我们在 ./src/index.js 中也引入过 lodash，这样就在两个 bundle 中造成重复引用。接着，我们通过使用 CommonsChunkPlugin 来移除重复的模块。

### 防止重复(prevent duplication)

CommonsChunkPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。让我们使用这个插件，将之前的示例中重复的 lodash 模块去除：



## 动态导入(dynamic imports)

当涉及到动态代码拆分时，webpack 提供了两个类似的技术。对于动态导入，第一种，也是优先选择的方式是，使用符合 ECMAScript 提案 的 import() 语法。第二种，则是使用 webpack 特定的 require.ensure。让我们先尝试使用第一种……

import() 调用会在内部用到 promises。如果在旧有版本浏览器中使用 import()，记得使用 一个 polyfill 库（例如 es6-promise 或 promise-polyfill），来 shim Promise。


注意，在注释中使用了 webpackChunkName。这样做会导致我们的 bundle 被命名为 lodash.bundle.js ，而不是 [id].bundle.js 。想了解更多关于 webpackChunkName 和其他可用选项，请查看 import() 相关文档。让我们执行 webpack，查看 lodash 是否会分离到一个单独的 bundle：








