<template>
  <div class="single-post-page">
      Post : {{ $route.params.id }}
      <section class="post">
          <h1>Title of the post</h1>
          <div class="post-details">
              <div>Last updated on XXX</div>
              <div>Writen by NAME</div>
              <p>Content of the post</p>
          </div>
      </section>
      <section class="post-feedback">
          <p>Let me know what you think about the post, send a mail too <a href="mailto:somemail@com">somemail@com"</a></p>
      </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>


</style>
