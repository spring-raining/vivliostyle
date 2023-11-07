import { visit } from 'unist-util-visit';

export default () => (ast: any) => {
  visit(ast, 'code', (node, index, parent) => {
    if (typeof node.meta === 'string') {
      const wrappedNode = {
        type: 'paragraph',
        data: {
          hName: 'figure',
        },
        children: [
          {
            type: 'paragraph',
            data: {
              hName: 'figcaption',
            },
            children: [
              {
                type: 'text',
                value: node.meta,
              },
            ],
          },
          node,
        ],
      };
      parent.children.splice(index, 1, wrappedNode);
    }
  });
};
