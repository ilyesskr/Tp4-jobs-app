<template>
  <div class="edit">
    <h1>Ici vous pouvez modifier les détails des emplois (date et salaire)</h1>
    <form>
      <h4>Entrer le nom de l'emploi que vous souhaitez modifier:</h4>
      <input type="text" v-model="jobname" required />
      <h4>Entrer le nouveau salaire:</h4>
      <input type="number" v-model="new_salary" required />
      <h4>Entrer une nouvelle date:</h4>
      <input type="date" v-model="new_date" required />
      <p></p>
      <button type="submit" @click.prevent="sauvegarder">Sauvegarder</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobname: "",
      new_salary: 0,
      new_date: "",
    };
  },
  methods: {
    sauvegarder() {
      if (!this.jobname || !this.new_salary || !this.new_date) {
        alert("Veuillez remplir tous les champs.");
        return;
      }
      this.$emit("sauv-change", this.jobname, this.new_salary, this.new_date);
      this.jobname = "";
      this.new_salary = 0;
      this.new_date = "";
    },
  },
};
</script>

<style scoped>
.edit {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6e;
}
</style>
