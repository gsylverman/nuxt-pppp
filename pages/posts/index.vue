<template>
  <div class="posts-page">
    <section class="intro">
      <h1>get the latest teck news</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList";
export default {
  components: {
    PostList
  },
  data(){
    return {
      loadedPosts : [
        {
          id: "1",
          title: "First post",
          previewText: "Some preview TExt",
          thumbnail:
            "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
          id: "2",
          title: "Second Post",
          previewText: "Some 2 preview TExt",
          thumbnail:
            "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
          id: "3",
          title: "bla Post",
          previewText: "Some 3 preview TExt",
          thumbnail:
            "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
      ]
    }
  }
};
</script>
