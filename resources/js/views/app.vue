<template>
    <v-main>
        <CommentsList />
        <CommentsEditor />
    </v-main>
</template>

<script>
const default_layout = "default";
import CommentsList from "../components/CommentsList.vue"
import CommentsEditor from "../components/CommentsEditor.vue"
export default {
  components: { CommentsList, CommentsEditor }
};
</script>
