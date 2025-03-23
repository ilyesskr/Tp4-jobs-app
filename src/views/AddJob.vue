<template>
  <div class="addjob">
    <h1>Ajout d'un emploi</h1>
    <div class="form">
      <form class="minform">
        <label>Id : </label>
        <input type="number" v-model="id1" /><br /><br />
        <label>Titre : </label>
        <input type="text" v-model="titre1" /><br /><br />
        <label>Description : </label>
        <input type="text" v-model="desc" /><br /><br />
        <label>Salaire : </label>
        <input type="number" v-model="sal" /><br /><br />
        <label>Date de création : </label>
        <input type="date" v-model="date1" />
      </form>
      <br /><br />
      <button @click="ajouterEmploi">Ajoutez un emploi</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id1: 0,
      titre1: "",
      desc: "",
      sal: 0,
      date1: 0 / 0 / 0,
    };
  },
  methods: {
    ajouterEmploi() {
      const newJob = {
        id: this.id1,
        titre: this.titre1,
        description: this.desc,
        salaire: this.sal,
        date: this.date1,
      };
      this.$emit("add-job", newJob);
      this.id1 = 0;
      this.titre1 = "";
      this.desc = "";
      this.sal = 0;
      this.date1 = "";
    },
  },
};
</script>
<style>
body {
  display: flex;
  justify-content: center;
}
</style>
<style scoped>
.form {
  border: 1px solid;
  width: 450px;
  height: 318px;
  border-radius: 20px;
  padding: 30px;
  background-color: white;
}
input {
  width: 250px;
}
button {
  height: 40px;
  width: 170px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: large;
  background-color: green;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}
</style>
