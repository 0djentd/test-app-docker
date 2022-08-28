<template>
  <v-sheet v-if="newComment" rounded="lg" elevation="2">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="newComment.name"
              :rules="nameRules"
              label="Name"
              dense
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="newComment.text"
              :rules="textRules"
              label="Text"
              dense
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-label for="datepicker">Date</v-label>
            <date-picker
              id="datepicker"
              v-model="newComment.date"
              type="datetime"
            ></date-picker>
          </v-col>
        </v-row>
        <v-row>
          <v-btn @click.prevent="clear">Clear</v-btn>
          <v-btn @click.prevent="post">Post</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  data() {
    return {
      newEmptyComment: {
        text: "",
        name: "",
        date: "",
      },
      newComment: null,
      nameRules: [(v) => !!v || "This field is required"],
      textRules: [(v) => !!v || "This field is required"],
      dateRules: [(v) => !!v || "This field is required"],
    };
  },
  components: { DatePicker },
  methods: {
    clear() {
        this.newComment = {...this.newEmptyComment};
    },
    post() {
        this.$store.commit("postComment", this.newComment);
        this.clear();
    },
  },
  mounted() {
    this.clear();
  }
};
</script>
