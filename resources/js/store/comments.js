import axios from "axios";

const api_url = "/api/";

export default {
    state: {
        comments: [],
    },
    mutations: {
        async getComments(state) {
            const comments = axios({
                url: `${api_url}comments/`,
                method: "GET",
            })
                .then((res) => res.data)
                .catch((err) => {
                    console.log(err)
                    return [];
                });
            state.comments = await comments;
        },
        async deleteComment(state, comment) {
            const removed = axios({
                url: `${api_url}comments/${comment.id}/`,
                method: "DELETE",
            })
                .then((res) => true)
                .catch((err) => {
                    console.log(err);
                    return false;
                })
            if (!removed) {
                return;
            }
            const index = state.comments.indexOf(comment);
            state.comments.splice(index, 1);
        },
        async postComment(state, comment) {
            const newComment = await axios({
                url: `${api_url}comments/`,
                method: "POST",
                data: comment,
            })
                .then((res) => res.data)
                .catch((err) => {console.error(err); return null})
            if (newComment) {
                state.comments.push(newComment);
            }
        },
    },
};
