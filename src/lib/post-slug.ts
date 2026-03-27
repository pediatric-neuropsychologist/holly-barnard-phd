export function getPostSlug(post: { slug?: string; id: string }) {
  return post.slug ?? post.id.replace("src/content/posts/", "").replace(/\.md$/, "");
}
