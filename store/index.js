import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vueContext, context) {
                return new Promise((resolve, reject) => {
                    vueContext.commit("setPosts", [
                        {
                            isAdmin: true,
                            id: "1",
                            title: "First post",
                            previewText: "Some preview TExt",
                            thumbnail:
                                "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        },
                        {
                            isAdmin: true,
                            id: "2",
                            title: "Second Post",
                            previewText: "Some 2 preview TExt",
                            thumbnail:
                                "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        },
                        {
                            isAdmin: true,
                            id: "3",
                            title: "bla Post",
                            previewText: "Some 3 preview TExt",
                            thumbnail:
                                "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        }
                    ]);

                    resolve();
                }).catch(er => console.log(er));
            },
            setPosts(context, posts) {
                context.commit("setPosts", posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    });
};

export default createStore;
