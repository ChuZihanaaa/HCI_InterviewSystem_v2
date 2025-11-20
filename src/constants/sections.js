export const sectionTree = [
  {
    id: 'interview',
    label: '面试',
    children: [
      {
        id: 'basic-skills',
        label: '基础能力',
        children: [
          { id: 'special-a', label: '专项A' },
          { id: 'special-b', label: '专项B' },
          { id: 'special-c', label: '专项C' },
        ],
      },
      {
        id: 'human-machine',
        label: '人机练习',
        children: [
          { id: 'one-vs-one', label: '1v1' },
          { id: 'group-discussion', label: '多人讨论' },
        ],
      },
      {
        id: 'mock',
        label: '模拟面试',
        children: [
          { id: 'structured', label: '结构化面试' },
          { id: 'leadership', label: '领导小组面试' },
        ],
      },
    ],
  },
  { id: 'written', label: '笔试' },
  { id: 'quality', label: '素质能力提升' },
];

const flattenTree = (nodes, acc = []) => {
  nodes.forEach((node) => {
    acc.push({ id: node.id, label: node.label });
    if (Array.isArray(node.children)) {
      flattenTree(node.children, acc);
    }
  });
  return acc;
};

export const flatSections = flattenTree(sectionTree);

export const sectionLabelMap = flatSections.reduce((map, section) => {
  map[section.id] = section.label;
  return map;
}, {});

