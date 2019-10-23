(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{241:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"认识-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认识-flow"}},[t._v("#")]),t._v(" 认识 Flow")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://flow.org/en/docs/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flow"),a("OutboundLink")],1),t._v(" 是 facebook 出品的 JavaScript 静态类型检查工具。Vue.js 的源码利用了 Flow 做了静态类型检查，所以了解 Flow 有助于我们阅读源码。")]),t._v(" "),a("h2",{attrs:{id:"为什么用-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么用-flow"}},[t._v("#")]),t._v(" 为什么用 Flow")]),t._v(" "),a("p",[t._v("JavaScript 是动态类型语言，它的灵活性有目共睹，但是过于灵活的副作用是很容易就写出非常隐蔽的隐患代码，在编译期甚至看上去都不会报错，但在运行阶段就可能出现各种奇怪的 bug。")]),t._v(" "),a("p",[t._v("类型检查是当前动态类型语言的发展趋势，所谓类型检查，就是在编译期尽早发现（由类型错误引起的）bug，又不影响代码运行（不需要运行时动态检查类型），使编写 JavaScript 具有和编写 Java 等强类型语言相近的体验。")]),t._v(" "),a("p",[t._v("项目越复杂就越需要通过工具的手段来保证项目的维护性和增强代码的可读性。 Vue.js 在做 2.0 重构的时候，在 ES2015 的基础上，除了 ESLint 保证代码风格之外，也引入了 Flow 做静态类型检查。之所以选择 Flow，主要是因为 Babel 和 ESLint 都有对应的 Flow 插件以支持语法，可以完全沿用现有的构建配置，非常小成本的改动就可以拥有静态类型检查的能力。")]),t._v(" "),a("h2",{attrs:{id:"flow-的工作方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flow-的工作方式"}},[t._v("#")]),t._v(" Flow 的工作方式")]),t._v(" "),a("p",[t._v("通常类型检查分成 2 种方式：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型推断")]),t._v("：通过变量的使用上下文来推断出变量类型，然后根据这些推断来检查类型。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("类型注释")]),t._v("：事先注释好我们期待的类型，Flow 会基于这些注释来判断。")])])]),t._v(" "),a("h3",{attrs:{id:"类型推断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型推断"}},[t._v("#")]),t._v(" 类型推断")]),t._v(" "),a("p",[t._v("它不需要任何代码修改即可进行类型检查，最小化开发者的工作量。它不会强制你改变开发习惯，因为它会自动推断出变量的类型。这就是所谓的类型推断，Flow 最重要的特性之一。")]),t._v(" "),a("p",[t._v("通过一个简单例子说明一下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*@flow*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Flow 检查上述代码后会报错，因为函数 "),a("code",[t._v("split")]),t._v("\n期待的参数是字符串，而我们输入了数字。")]),t._v(" "),a("h3",{attrs:{id:"类型注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型注释"}},[t._v("#")]),t._v(" 类型注释")]),t._v(" "),a("p",[t._v("如上所述，类型推断是 Flow 最有用的特性之一，不需要编写类型注释就能获取有用的反馈。但在某些特定的场景下，添加类型注释可以提供更好更明确的检查依据。")]),t._v(" "),a("p",[t._v("考虑如下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*@flow*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Flow 检查上述代码时检查不出任何错误，因为从语法层面考虑， "),a("code",[t._v("+")]),t._v(" 既可以用在字符串上，也可以用在数字上，我们并没有明确指出 "),a("code",[t._v("add()")]),t._v(" 的参数必须为数字。")]),t._v(" "),a("p",[t._v("在这种情况下，我们可以借助类型注释来指明期望的类型。类型注释是以冒号 "),a("code",[t._v(":")]),t._v(" 开头，可以在函数参数，返回值，变量声明中使用。")]),t._v(" "),a("p",[t._v("如果我们在上段代码中添加类型注释，就会变成如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*@flow*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("现在 Flow 就能检查出错误，因为函数参数的期待类型为数字，而我们提供了字符串。")]),t._v(" "),a("p",[t._v("上面的例子是针对函数的类型注释。接下来我们来看看 Flow 能支持的一些常见的类型注释。")]),t._v(" "),a("h4",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*@flow*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\narr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("数组类型注释的格式是 "),a("code",[t._v("Array<T>")]),t._v("，"),a("code",[t._v("T")]),t._v(" 表示数组中每项的数据类型。在上述代码中，arr 是每项均为数字的数组。如果我们给这个数组添加了一个字符串，Flow 能检查出错误。")]),t._v(" "),a("h4",{attrs:{id:"类和对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类和对象"}},[t._v("#")]),t._v(" 类和对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*@flow*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x 是字符串")]),t._v("\n  y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// y 可以是字符串或者数字")]),t._v("\n  z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("类的类型注释格式如上，可以对类自身的属性做类型检查，也可以对构造函数的参数做类型检查。这里需要注意的是，属性 "),a("code",[t._v("y")]),t._v(" 的类型中间用 "),a("code",[t._v("|")]),t._v(" 做间隔，表示 "),a("code",[t._v("y")]),t._v(" 的类型即可以是字符串也可以是数字。")]),t._v(" "),a("p",[t._v("对象的注释类型类似于类，需要指定对象属性的类型。")]),t._v(" "),a("h4",{attrs:{id:"null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[t._v("#")]),t._v(" Null")]),t._v(" "),a("p",[t._v("若想任意类型 "),a("code",[t._v("T")]),t._v(" 可以为 "),a("code",[t._v("null")]),t._v(" 或者 "),a("code",[t._v("undefined")]),t._v("，只需类似如下写成 "),a("code",[t._v("?T")]),t._v(" 的格式即可。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*@flow*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),a("p",[t._v("此时，"),a("code",[t._v("foo")]),t._v(" 可以为字符串，也可以为 "),a("code",[t._v("null")]),t._v("。")]),t._v(" "),a("p",[t._v("目前我们只列举了 Flow 的一些常见的类型注释。如果想了解所有类型注释，请移步 Flow 的"),a("a",{attrs:{href:"https://flow.org/en/docs/types/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"flow-在-vue-js-源码中的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flow-在-vue-js-源码中的应用"}},[t._v("#")]),t._v(" Flow 在 Vue.js 源码中的应用")]),t._v(" "),a("p",[t._v("有时候我们想引用第三方库，或者自定义一些类型，但 Flow 并不认识，因此检查的时候会报错。为了解决这类问题，Flow 提出了一个 "),a("code",[t._v("libdef")]),t._v(" 的概念，可以用来识别这些第三方库或者是自定义类型，而 Vue.js 也利用了这一特性。")]),t._v(" "),a("p",[t._v("在 Vue.js 的主目录下有 "),a("code",[t._v(".flowconfig")]),t._v(" 文件， 它是 Flow 的配置文件，感兴趣的同学可以看"),a("a",{attrs:{href:"https://flow.org/en/docs/config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("。这其中的 "),a("code",[t._v("[libs]")]),t._v(" 部分用来描述包含指定库定义的目录，默认是名为 "),a("code",[t._v("flow-typed")]),t._v(" 的目录。")]),t._v(" "),a("p",[t._v("这里 "),a("code",[t._v("[libs]")]),t._v(" 配置的是 "),a("code",[t._v("flow")]),t._v("，表示指定的库定义都在 "),a("code",[t._v("flow")]),t._v(" 文件夹内。我们打开这个目录，会发现文件如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("flow\n├── compiler.js        # 编译相关\n├── component.js       # 组件数据结构\n├── global-api.js      # Global API 结构\n├── modules.js         # 第三方库定义\n├── options.js         # 选项相关\n├── ssr.js             # 服务端渲染相关\n├── vnode.js           # 虚拟 node 相关\n")])])]),a("p",[t._v("可以看到，Vue.js 有很多自定义类型的定义，在阅读源码的时候，如果遇到某个类型并想了解它完整的数据结构的时候，可以回来翻阅这些数据结构的定义。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("通过对 Flow 的认识，有助于我们阅读 Vue 的源码，并且这种静态类型检查的方式非常有利于大型项目源码的开发和维护。类似 Flow 的工具还有如 TypeScript，感兴趣的同学也可以自行去了解一下。")])])}),[],!1,null,null,null);s.default=r.exports}}]);