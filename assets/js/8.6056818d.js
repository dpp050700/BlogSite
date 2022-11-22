(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{312:function(t,s,a){t.exports=a.p+"assets/img/vite-base-1.452aa1f0.jpg"},313:function(t,s,a){t.exports=a.p+"assets/img/vite-base-2.648d6cec.jpg"},314:function(t,s,a){t.exports=a.p+"assets/img/vite-base-3.01d8a333.jpg"},315:function(t,s,a){t.exports=a.p+"assets/img/vite-alias-1.140f8651.jpg"},377:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("本文我们将介绍 Vite 一些常用的简单配置，更多复杂配置将会在后续的文章中一一介绍。")]),t._v(" "),s("h2",{attrs:{id:"root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#root"}},[t._v("#")]),t._v(" root")]),t._v(" "),s("ul",[s("li",[t._v("类型：string")]),t._v(" "),s("li",[t._v("默认值：process.cwd()")])]),t._v(" "),s("p",[t._v("项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身"),s("code",[t._v("(vite.config.ts)")]),t._v("的相对路径。")]),t._v(" "),s("h2",{attrs:{id:"base"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[t._v("#")]),t._v(" base")]),t._v(" "),s("ul",[s("li",[t._v("类型：string")]),t._v(" "),s("li",[t._v("默认值：/")])]),t._v(" "),s("p",[t._v("开发或生产环境服务的公共基础路径。可以是一个绝对 URL 路径名、完整的 URL 地址、空字符串或 "),s("code",[t._v("./")])]),t._v(" "),s("ol",[s("li",[t._v("绝对 URL 路径名")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置 base 为一个 绝对 URL 路径名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("base")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/test/'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("之后，我们查看打包之后的产物，可以发现资源引入的路径都发生来改变")]),t._v(" "),s("p",[s("img",{attrs:{src:a(312),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("完整的 URL 地址")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置 base 为一个 完整的 URL 地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("base")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.cijianshaonian.com/'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("之后，我们查看打包之后的产物，可以发现资源都是引入指定 "),s("code",[t._v("URL")]),t._v(" 下的资源")]),t._v(" "),s("p",[s("img",{attrs:{src:a(313),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("设置 base 为 "),s("code",[t._v("./")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置 base 为一个 完整的 URL 地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("base")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("之后，我们查看打包之后的产物，可以发现资源都是引入相对路径下的文件")]),t._v(" "),s("p",[s("img",{attrs:{src:a(314),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[t._v("#")]),t._v(" mode")]),t._v(" "),s("ul",[s("li",[t._v("类型：string")]),t._v(" "),s("li",[t._v("默认值：'development' 用于开发，'production' 用于构建")])]),t._v(" "),s("p",[t._v("用来指定当前是 "),s("code",[t._v("开发环境")]),t._v(" 还是 "),s("code",[t._v("生产环境")])]),t._v(" "),s("h2",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),s("ul",[s("li",[t._v("类型： "),s("code",[t._v("(Plugin | Plugin[] | Promise<Plugin | Plugin[]>)[]")])])]),t._v(" "),s("p",[t._v("需要用到的插件数组。Falsy 虚值的插件将被忽略，插件数组将被扁平化。")]),t._v(" "),s("h2",{attrs:{id:"publicdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publicdir"}},[t._v("#")]),t._v(" publicDir")]),t._v(" "),s("ul",[s("li",[t._v("类型：string | false")]),t._v(" "),s("li",[t._v("默认值：'public'")])]),t._v(" "),s("p",[t._v("publicDir 用来指定静态资源服务的文件夹。 在开发期间，publicDir 目录中的文件以 "),s("code",[t._v("/")]),t._v(" 开头引用；在构建期间 publicDir 文件夹中的内容会被复制到 outDir 的根目录中。publicDir 可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径。")]),t._v(" "),s("p",[t._v("将 publicDir 设为 false 可以关闭此项功能。")]),t._v(" "),s("h2",{attrs:{id:"resolve-alas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-alas"}},[t._v("#")]),t._v(" resolve.alas")]),t._v(" "),s("ul",[s("li",[t._v("类型：Record<string, string> | Array<{ find: string | RegExp, replacement: string, customResolver?: ResolverFunction | ResolverObject }>")])]),t._v(" "),s("p",[t._v("resolve.alas 用来配置路径的别名。"),s("strong",[t._v("请始终使用绝对路径。相对路径的别名值会原封不动地被使用，因此无法被正常解析。")])]),t._v(" "),s("p",[t._v("例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineConfig "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vite'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" react "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vitejs/plugin-react'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" resolve "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("react")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写法 1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("alias")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写法 2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// alias: [{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   find: '@',")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   replacement: resolve(__dirname, 'src')")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("以上配置我们给 src 路径设置例别名 @，所以引用 src 下的文件就可以使用 @/*，我们修改一下 main.tsx 中 App 组件的引用：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- import App from './App'\n+ import App from '@/App'\n")])])]),s("p",[s("img",{attrs:{src:a(315),alt:""}})]),t._v(" "),s("p",[t._v("可以看到编辑器报出了一个错误，这其实是因为我们使用 TS 开发的，TS 并不知道我们的别名系统。所以，还需要在 "),s("code",[t._v("tsconfig")]),t._v(" 中修改一下配置：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baseUrl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paths"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@/*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"resolve-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-extensions"}},[t._v("#")]),t._v(" resolve.extensions")]),t._v(" "),s("ul",[s("li",[t._v("类型：string[]")]),t._v(" "),s("li",[t._v("默认值：['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']")])]),t._v(" "),s("p",[t._v("resolve.extensions 用来配置导入时想要省略的扩展名列表。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("不建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。")])]),t._v(" "),s("h2",{attrs:{id:"json-namedexports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-namedexports"}},[t._v("#")]),t._v(" json.namedExports")]),t._v(" "),s("ul",[s("li",[t._v("类型：boolean")]),t._v(" "),s("li",[t._v("默认值： true")])]),t._v(" "),s("p",[s("code",[t._v("json.namedExports")]),t._v(" 表示是否支持从 "),s("code",[t._v(".json")]),t._v(" 文件中进行按名导入。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vite-project"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// json.namedExports = true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config.json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config.json'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// json.namedExports = false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config.json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config.json'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("h2",{attrs:{id:"json-stringify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-stringify"}},[t._v("#")]),t._v(" json.stringify")]),t._v(" "),s("ul",[s("li",[t._v("类型：boolean")]),t._v(" "),s("li",[t._v("默认值： false")])]),t._v(" "),s("p",[t._v('若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...")，这样会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候。')]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[s("code",[t._v("json.stringify")]),t._v(" 设置为 true 后，"),s("code",[t._v("json.namedExports")]),t._v(" 将会被置为 "),s("code",[t._v("false")]),t._v(", 即不可按名导入。")])]),t._v(" "),s("h2",{attrs:{id:"esbuild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esbuild"}},[t._v("#")]),t._v(" esbuild")]),t._v(" "),s("h2",{attrs:{id:"envdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#envdir"}},[t._v("#")]),t._v(" envDir")]),t._v(" "),s("ul",[s("li",[t._v("类型：string")]),t._v(" "),s("li",[t._v("默认值： root "),s("strong",[s("code",[t._v("注意：这里的 root 表示项目根目录，不是 root 文件夹 ！！！")])])])]),t._v(" "),s("p",[s("code",[t._v("envDir")]),t._v(" 用来表示加载 "),s("code",[t._v(".env")]),t._v(" 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径。")]),t._v(" "),s("p",[t._v("Vite 按照以下规则加载额外的环境变量：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".env                # 所有情况下都会加载\n.env.local          # 所有情况下都会加载，但会被 git 忽略\n.env.[mode]         # 只在指定模式下加载\n.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("ol",[s("li",[t._v("指定模式的文件会比通用形式的优先级高。")]),t._v(" "),s("li",[t._v("Vite 执行时已经存在的环境变量有最高的优先级，不会被 .env 类文件覆盖")]),t._v(" "),s("li",[t._v(".env 文件在 Vite 启动时被加载，若发生改动，需要重启服务后生效。")])])]),t._v(" "),s("p",[t._v("Vite 的环境变量都会在 "),s("code",[t._v("import.meta.env")]),t._v(" 中暴露出来。但是，需要注意的是，Vite 为了防止意外地将一些环境变量泄漏到客户端，默认只有以 "),s("code",[t._v("VITE_")]),t._v(" 为前缀的变量才会暴露出来。当然，我们也可以通过 "),s("code",[t._v("envPrefix")]),t._v(" 来修改默认前缀。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('VITE_APP_NAME="vite-project"\nAPP_NAME="vite-project"\n\n// 只有 VITE_APP_NAME 会被暴露为 import.meta.env.VITE_APP_NAME， 而 APP_NAME 则不会。\n')])])]),s("h2",{attrs:{id:"envprefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#envprefix"}},[t._v("#")]),t._v(" envPrefix")]),t._v(" "),s("ul",[s("li",[t._v("类型：string | string[]")]),t._v(" "),s("li",[t._v("默认值： VITE_")])]),t._v(" "),s("p",[s("code",[t._v("envPrefix")]),t._v(" 用来配置暴露给 import.meta.env 的环境变量前缀。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("envPrefix 不能被设置为空字符串 ''。这样会暴露所有的环境变量。Vite 检测到配置为 '' 时将会抛出错误。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);