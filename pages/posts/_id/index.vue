<template>
  <div class="single-post-page">
    Post id Client : {{ $route.params.id }} Post id Server :
    {{ loadedPost.id }} User {{ loadedPost.title }}
    <section class="post">
      <h1>Title of the post</h1>
      <div class="post-details">
        <div>Last updated on {{ loadedPost.date }}</div>
        <div>Writen by NAME</div>
        <p>Content of the post</p>
      </div>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail too
        <a href="mailto:somemail@com">somemail@com"</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPost: {
            isAdmin: true,
            id: `${context.params.id}`,
            title: "First post",
            previewText: "Some preview TExt",
            date: new Date(),
            thumbnail:
              "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }
        });
      }, 0);
    })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>
