<template>
  <div class="posts-page">
    <section class="intro">
      <h1>get the latest teck news</h1>
      <PostList :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList";
export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>
