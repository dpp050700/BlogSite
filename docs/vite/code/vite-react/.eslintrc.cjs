module.exports = {
    // 环境提供预定义的全局变量。
    "env": {
        "browser": true, // 浏览器全局变量
        "es2021": true // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12。
    },
    // 需要继承的 eslint 规则集
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    // 解析器 用来解析 typescript
    "parser": "@typescript-eslint/parser",
    // 解析器选项
    "parserOptions": {
        // 表示想使用的额外语言特性
        "ecmaFeatures": {
            "jsx": true
        },
        // es6 版本
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    // 配置 eslint 插件 这里只是扩展来 eslint 规则，但此时并没有开启规则，需要配置 extends 或者 rule 开启规则
    "plugins": [
        "react",
        "@typescript-eslint", // 添加 TS 规则 @typescript-eslint/eslint-plugin，可省略 `eslint-plugin`
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/react-in-jsx-scope": "off", // 关掉此规则后 不需要引入 react
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error", // error 或 2 表示开启，违背规则后抛出 error； warn 或 1 表示开启，违背规则后警告； off 或 0 表示关闭
            "always" // always 表示必须； never 表示从不
        ]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
