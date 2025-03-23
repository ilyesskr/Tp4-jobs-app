<template>
  <div class="home">
    <div
      v-for="(item, index) in jobs"
      :key="index"
      class="job"
      v-show="item.titre.startsWith(userinput)"
    >
      <div class="a">
        <router-link :to="`/details/${item.id}`">
          {{ item.titre }}
        </router-link>
      </div>
      <button @click="supprimer(index)">suprimer cet emploi</button>
    </div>
    <p style="font-weight: bold">Filtrer les emplois</p>
    <input
      type="text"
      v-model="userinput"
      style="
        border-radius: 7px;
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
      "
    />
  </div>
</template>
<style scoped>
.home {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  left: 50px;
}
.a {
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  text-align: center;
  align-content: center;
}
.a a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 15px;
  text-decoration: none;
}
.job {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.job button {
  background-color: orange;
  color: black;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
}
</style>
<script>
export default {
  name: "HomeView",
  props: ["jobs"],
  data() {
    return {
      userinput: "",
    };
  },
  methods: {
    supprimer(index) {
      this.$emit("supprimer-job", index);
    },
  },
};
</script>
