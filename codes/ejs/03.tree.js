const ejs = require('ejs');

const treeTemplate = ejs.compile(`\
<%= '  '.repeat(level) %><ul>
<% tree.forEach((item) => { -%>
<%    if (!item.children) { -%>
<%=     '  '.repeat(level + 1) %><li><%= item.label %></li>
<%    } else { -%>
<%=     '  '.repeat(level + 1) %><li>
<%=       '  '.repeat(level + 2) %><%= item.label %>
<%-       treeTemplate({ tree: item.children, treeTemplate, level: level + 2 }) -%>
<%=     '  '.repeat(level + 1) %></li>
<%    } -%>
<% }) -%>
<%= '  '.repeat(level) %></ul>
`);

const data = {
  treeTemplate,
  level: 0,
  tree: [
    { label: '1级节点A' },
    { 
      label: '1级节点B', 
      children: [
        { label: '2级节点A' },
        { label: '2级节点B' },
        { label: '2级节点C',
          children: [
            { label: '3级节点A' },
            { label: '3级节点B' },
          ]
        },
      ] 
    },
    { label: '1级节点C' },
  ]
};

const html = treeTemplate(data);

console.log(html);
/* =>
<ul>
  <li>1级节点A</li>
  <li>
    1级节点B
    <ul>
      <li>2级节点A</li>
      <li>2级节点B</li>
      <li>
        2级节点C
        <ul>
          <li>3级节点A</li>
          <li>3级节点B</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>1级节点C</li>
</ul>
*/