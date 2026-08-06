# Yifei Zhang — Personal Site

一个基于纯 HTML/CSS/JS 的静态个人主页，无需任何构建工具，可以直接用 GitHub Pages 托管。

## 本地预览

直接双击 `index.html` 用浏览器打开即可，不需要安装任何东西、不需要启动本地服务器。

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 所有页面结构和文字内容都在这里，改文字直接在这个文件里找对应段落改 |
| `style.css` | 样式和配色。想换主题色，改文件最上面 `:root` 里的 `--accent` 变量即可 |
| `script.js` | 少量交互效果（移动端导航、滚动高亮），一般不需要动 |
| `assets/` | 放照片等图片资源，见 `assets/README.md` |

## 常见修改

- **改文字**：在 `index.html` 里搜索对应内容直接改，每个板块都有 `<!-- ===== xxx ===== -->` 或说明性注释帮你定位
- **新增一条经历 / 一篇论文 / 一个奖项**：对应板块里都留了注释，例如 `<!-- 新增一段工作经历：复制上面任意一个 .entry 整块，改文字内容即可 -->`，照着复制粘贴改文字就行，不用动 CSS
- **换照片**：见 `assets/README.md`
- **换配色**：改 `style.css` 顶部 `:root` 里的 `--accent`（主色）等变量
- **补上 GitHub / LinkedIn / Google Scholar / CV 链接**：在 `index.html` 的 Hero 区域，把 `.hero-links` 里几个 `href="#"` 换成你自己的实际链接

## 发布到 GitHub Pages

1. 在 GitHub 上新建一个仓库
   - 如果想要 `https://<你的用户名>.github.io` 这种个人主页地址，仓库名必须叫 `<你的用户名>.github.io`
   - 也可以用任意仓库名，届时地址会是 `https://<你的用户名>.github.io/<仓库名>/`
2. 把这个文件夹的内容推送到该仓库的 `main` 分支
3. 打开仓库 Settings → Pages，Source 选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`
4. 保存后等 1–2 分钟，页面就会在对应地址上线

（这一步涉及创建仓库和推送代码，具体执行时我会跟你确认 GitHub 用户名和仓库名之后再进行。）
