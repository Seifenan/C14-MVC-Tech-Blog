const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 3
  },
  {
    title: 'Nunc purus.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 5
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 6
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 7
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 8
  },
  {
    title: 'Duis ac nibh.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 10
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
