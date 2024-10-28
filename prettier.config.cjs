module.exports = {
  // 每行代码的最大长度
  printWidth: 80, // 默认值: 80

  // 每个缩进级别的空格数
  tabWidth: 2, // 默认值: 2

  // 是否使用制表符进行缩进
  useTabs: false, // 默认值: false

  // 是否在语句末尾添加分号
  semi: false, // 默认值: true

  // 是否使用单引号
  singleQuote: true, // 默认值: false

  // 对象、数组等的末尾是否添加逗号
  trailingComma: "none", // 默认值: 'none'
  // 选项:
  // - 'none'：不添加逗号
  // - 'es5'：在 ES5 中有效的位置添加逗号（例如数组和对象的最后一个元素）
  // - 'all'：在所有可能的位置添加逗号（包括函数参数）

  // 对象字面量的大括号内是否添加空格
  bracketSpacing: true, // 默认值: true

  // JSX 中的闭合标签是否和最后一行的内容在同一行
  jsxBracketSameLine: false, // 默认值: false

  // 箭头函数参数的括号使用方式
  arrowParens: "always", // 默认值: 'always'
  // 选项:
  // - 'avoid'：只有一个参数时，省略括号（例如 `(x) => x`）
  // - 'always'：始终添加括号（例如 `(x) => x`）

  // 行尾的换行符
  endOfLine: "auto", // 默认值: 'lf'
  // 选项:
  // - 'auto'：维持文件原有的换行符
  // - 'lf'：换行符（`LF`，适用于类 Unix 系统）
  // - 'crlf'：回车换行符（`CRLF`，适用于 Windows 系统）
  // - 'cr'：回车符（`CR`）

  // 是否在 HTML、SVG 和 Vue 文件中的自闭合标签后添加换行符
  htmlWhitespaceSensitivity: "css", // 默认值: 'css'
  // 选项:
  // - 'css'：基于 CSS 的显示方式
  // - 'strict'：严格模式，不允许任何额外的空格
  // - 'ignore'：忽略空格

  // 是否在 JSX 中使用单引号而非双引号
  jsxSingleQuote: false, // 默认值: false

  // 是否在 Vue 文件中强制使用 `@vue/eslint-config` 预设
  vueIndentScriptAndStyle: false, // 默认值: false

  // 是否自动修复 Prettier 的格式问题
  // eslint-plugin-prettier 插件将 Prettier 作为 ESLint 的规则进行处理
  // 注意：该选项在 Prettier 配置中不直接存在，而是通过 ESLint 配置的插件进行设置
  // 配置在 .eslintrc.js 中
  // 示例:
  // {
  //   "plugins": ["prettier"],
  //   "extends": ["prettier"],
  //   "rules": {
  //     "prettier/prettier": "error"
  //   }
  // }
};
