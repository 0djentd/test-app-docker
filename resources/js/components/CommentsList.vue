<template>
  <v-sheet rounded="lg" elevation="2">
    <v-data-table
      :loading="!comments"
      :headers="headers"
      :items="comments"
      :items-per-page="3"
      :footer-props="{ 'items-per-page-options': [3, 5, 10, 30, -1] }"
      sort-by="id"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon small @click="deleteComment(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name", sortable: false },
        { text: "Text", value: "text", sortable: false },
        { text: "Date", value: "date" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    comments() {
      return this.$store.state.comments.comments;
    },
  },
  methods: {
    deleteComment(comment) {
      this.$store.commit("deleteComment", comment.id);
    },
  },
  mounted() {
    this.$store.commit("getComments");
  },
};
</script>
