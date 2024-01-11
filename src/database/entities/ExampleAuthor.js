const { EntitySchema } = require('typeorm');
const ExampleAuthor = new EntitySchema({
  name: 'ExampleAuthor',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
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
    posts: {
      target: 'ExamplePost',
      type: 'one-to-many',
      inverseSide: 'author',
      cascade: true,
    },
  },
});

module.exports = ExampleAuthor;
