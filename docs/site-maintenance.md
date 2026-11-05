# 网站内容维护

- 首页介绍与研究方向：`_pages/about.md`。
- 工作、教育和研究经历：`_pages/cv.md`。页面上的 Print / Save as PDF 使用浏览器打印功能，可选择保存为 PDF。
- 姓名、单位、邮箱、学术主页、网站描述：`_config.yml`。修改后需要重启本地 Jekyll 服务。
- 顶部导航：`_data/navigation.yml`。Blog Posts 入口保持显示，归档页为 `_pages/year-archive.html`，没有文章时显示空状态。
- 博客文章：已发布的 Markdown 文件放在 `_posts/`，文件名使用 `YYYY-MM-DD-article-slug.md`。草稿放在 `_drafts/`，默认不会发布。中文原文可以先保留，英文译稿待内容准备好后逐篇添加。
- 论文：在 `_publications/` 中新增或编辑 Markdown 文件。首页、论文列表和详情页共用这里的数据。

论文头部字段：

```yaml
title: "论文完整标题"
collection: publications
category: manuscripts # 预印本使用 preprints
permalink: /publication/unique-paper-name
date: 2026-01-01 # 使用真实日期；已有公开链接不要随意修改
venue: "期刊名称"
short_title: "项目简称"
authors: '**Yaofeng Cheng**, Other Authors'
excerpt: '一句话介绍研究贡献。'
selected: true # true 会出现在首页代表作列表；不设置则只出现在完整列表
paperurl: 'https://...'
codeurl: 'https://...'
projecturl: 'https://...'
```

`arxivurl`、`slidesurl`、`bibtexurl`、`citation`、`author_note` 都是可选字段，缺少时不会显示对应入口。论文详情正文可继续填写研究介绍。

本地预览与构建：

```sh
bundle install
npm install
npm run build:js
bundle exec jekyll serve
bundle exec jekyll build
```

修改 `assets/js/_main.js` 或导航脚本后执行 `npm run build:js`，同时保留生成的 `assets/js/main.min.js`。只修改文字或样式无需重新打包 JavaScript。

默认页面不加载 MathJax、Plotly、Mermaid。确有需要时，在相应页面的头部增加 `mathjax: true`、`plotly: true` 或 `mermaid: true`。

模板示例保留在源码中，但已从网站输出中排除。新页面需要上线时，先确认其中的资料是真实内容，再调整 `_config.yml` 的 `exclude` 和 collection `output`。

本地修改不会自动更新 GitHub Pages。检查后将改动提交并推送到仓库的发布分支，网站才会重新部署。
