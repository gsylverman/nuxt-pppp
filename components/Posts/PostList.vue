<template>
  <section class="post-list">
    <PostPreview
      thumbnail="https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      id="1"
      :is-admin="isAdmin"
      title="Title"
      previwText="Some text"
    />
    <PostPreview
      thumbnail="https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      id="2"
      title="Title"
      :is-admin="isAdmin"
      previwText="Some text"
    />
    <PostPreview
      thumbnail="https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      id="3"
      title="Title"
      :is-admin="isAdmin"
      previwText="Some text"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostsPreview";
export default {
  components: {
    PostPreview
  },
  props:{
    isAdmin:{type:Boolean,default:false}
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
