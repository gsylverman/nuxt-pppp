<template>
  <div class="posts-page">
    <section class="intro">
      <h1>get the latest teck news</h1>
    </section>
    <PostList />
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList";
export default {
  components: {
    PostList
  }
};
</script>
