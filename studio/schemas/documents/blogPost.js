import { BsPencilSquare } from 'react-icons/bs';
import { blogPostCategories } from '../../data';

export default {
  name: 'blogPost',
  title: 'Blog Post',
  icon: BsPencilSquare,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'teamMember' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'imageCustom',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Destination category.',
      options: {
        list: [...blogPostCategories],
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
