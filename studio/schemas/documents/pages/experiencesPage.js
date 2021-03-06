import { IoHomeOutline } from 'react-icons/io5';

export default {
  name: 'experiencesPage',
  title: 'Experiences Page',
  icon: IoHomeOutline,
  type: 'document',
  initialValue: {
    title: 'experiences',
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Experiences page title.',
      validation: (Rule) => [
        Rule.required()
          .min(2)
          .error('A title of min. 2 characters is required.'),
        Rule.max(50).warning(
          'Shorter titles (less than 50 characters) are usually better.'
        ),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug of the page.',
      options: {
        source: 'title',
        maxLength: 30,
      },
      validation: (Rule) => [
        Rule.required().error('A slug must be generated.'),
      ],
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      description: 'Page meta info for SEO.',
    },
  ],
};
