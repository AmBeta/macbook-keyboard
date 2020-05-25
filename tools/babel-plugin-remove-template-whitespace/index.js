// Ref: https://github.com/oliverfindl/babel-plugin-remove-template-literals-whitespace
const PATTERN_WHITESPACE_NON_BREAKABLE_SPACE = /[\s\uFEFF]*\xA0[\s\uFEFF]*/g;
const PATTERN_WHITESPACE_EXCEPT_SPACE = /[\r\n\t\f\v\uFEFF\xA0]+/g;
const PATTERN_WHITESPACE = /[\s\uFEFF\xA0]+/g;

const removeWhitespace = (string = '') => string
  .toString()
  .replace(PATTERN_WHITESPACE_NON_BREAKABLE_SPACE, '&nbsp;')
  .replace(PATTERN_WHITESPACE_EXCEPT_SPACE, '')
  .replace(PATTERN_WHITESPACE, ' ');

const visitTemplateLiteralNode = (node) => {
  const { quasis } = node;

  for (const elem of quasis) {
    const { value } = elem;
    const { raw, cooked } = value;

    value.raw = removeWhitespace(raw);
    value.cooked = removeWhitespace(cooked);
  }
};

module.exports = function () {
  return {
    visitor: {
      TemplateLiteral(path) {
        visitTemplateLiteralNode(path.node);
      },

      TaggedTemplateExpression(path) {
        visitTemplateLiteralNode(path.node.quasi);
      },
    },
  };
}
