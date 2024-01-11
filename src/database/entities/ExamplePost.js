const { EntitySchema } = require('typeorm');
const ExamplePost = new EntitySchema({
  name: 'ExamplePost',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    authorId: {
      type: 'int',
    },
    title: {
      type: 'varchar',
    },
    text: {
      type: 'text',
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
    },
  },
  relations: {
    author: {
      target: 'ExampleAuthor',
      type: 'many-to-one',
      inverseSide: 'posts',
      onDelete: 'CASCADE',
    },
  },
});
module.exports = ExamplePost;
