import axios from "axios";

const baseUrl = `https://jsonplaceholder.typicode.com`

type BlogPost = {
  userId: number
  id: number
  title: string
  body: string
}

export async function fetchAllPosts(): Promise<BlogPost[]> {
  const allBlogPosts = await axios.get(`${baseUrl}/posts`)

  return allBlogPosts.data
}

export async function fetchIndividualPost(postId: string): Promise<BlogPost> {
  const blogPost = await axios.get(`${baseUrl}/posts/${postId}`)

  return blogPost.data
}
