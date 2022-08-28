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

<style>
.v-sheet {
padding: 20px;
margin: 20px 0;
}
.v-btn {
margin: 0 4px;
}
</style>
