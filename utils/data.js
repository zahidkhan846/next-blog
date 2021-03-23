export const posts = [
  {
    id: "1",
    createdAt: "03-22-2021",
    title: "Card tricks are fun. Hello world!",
    author: "Zahid Khan",
    tags: ["NextJs"],
    isFeatured: true,
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
    quidem. Unde officia ipsa nulla magnam voluptatem vel ut nemo,
    debitis aut laborum cumque eveniet quod alias obcaecati porro
    molestiae quibusdam minima veritatis et aliquam non in facere sed!
    Nemo ipsam deleniti reprehenderit, nesciunt veritatis ullam minus
    blanditiis consequatur placeat quisquam!`,
    slug: "1-card-tricks-are-fun-hello-world",
  },
  {
    id: "2",
    createdAt: "03-10-2021",
    title: "Card tricks are fun. Hello world!",
    author: "Rashid Khan",
    tags: ["ReactJs"],
    isFeatured: true,
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
    quidem. Unde officia ipsa nulla magnam voluptatem vel ut nemo,
    debitis aut laborum cumque eveniet quod alias obcaecati porro
    molestiae quibusdam minima veritatis et aliquam non in facere sed!
    Nemo ipsam deleniti reprehenderit, nesciunt veritatis ullam minus
    blanditiis consequatur placeat quisquam!`,
    slug: "2-card-tricks-are-fun-hello-world",
  },
];

export const findBySlug = (slug) => {
  const singlePost = posts.find((post) => post.slug === slug);
  return singlePost;
};
