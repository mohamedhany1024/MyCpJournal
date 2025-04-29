marked.setOptions({
    highlight: function(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    },
    langPrefix: 'hljs language-'
  });

  // Add KaTeX support for $...$ (inline) and $$...$$ (block)
  marked.use({
    extensions: [
      // Inline math ($...$)
      {
        name: 'inlineMath',
        level: 'inline',
        start(src) { return src.indexOf('$'); },
        tokenizer(src) {
          const match = src.match(/^\$([^$\n]+?)\$/);
          if (match) {
            return {
              type: 'inlineMath',
              raw: match[0],
              text: match[1].trim()
            };
          }
        },
        renderer(token) {
          try {
            return katex.renderToString(token.text, { displayMode: false, throwOnError: false });
          } catch (e) {
            return `<span style="color: red;">${e.message}</span>`;
          }
        }
      },
      // Block math ($$...$$)
      {
        name: 'blockMath',
        level: 'block',
        start(src) { return src.indexOf('$$'); },
        tokenizer(src) {
          const match = src.match(/^\$\$([^$]+?)\$\$/);
          if (match) {
            return {
              type: 'blockMath',
              raw: match[0],
              text: match[1].trim()
            };
          }
        },
        renderer(token) {
          try {
            return `<div class="math-block">${katex.renderToString(token.text, { displayMode: true, throwOnError: false })}</div>`;
          } catch (e) {
            return `<div style="color: red;">${e.message}</div>`;
          }
        }
      }
    ]
  });

function renderContenr(content) {
    let htmlContent = marked.parse(content);
    return htmlContent;
}