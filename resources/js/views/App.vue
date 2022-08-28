<template>
  <v-app>
    <v-main>
      <v-container>
        <CommentsList />
        <CommentsEditor />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const default_layout = "default";
import CommentsList from "../components/CommentsList.vue"
import CommentsEditor from "../components/CommentsEditor.vue"
export default {
  name: "App",
  components: { CommentsList, CommentsEditor }
};
</script>
