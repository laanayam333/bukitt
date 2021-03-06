export default {
  name: 'experienceFeaturesSection',
  type: 'object',
  title: 'Features Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [{ type: 'feature' }],
    },
  ],
  options: { collapsible: true, collapsed: true },
};
