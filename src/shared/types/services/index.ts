export interface BlogResponse {
   data: Post[]
}

export interface Post {
   id: number
   created_at: string
   title: string
   description: string
   picture: string
   comments: PostComment[]
   tags: PostTag
   post_text: string
}

export type PostTag = string[]

export interface PostComment {
   id: number
   post_id: number
   created_at: string
   picture: string
   text: string
   user: string
}
