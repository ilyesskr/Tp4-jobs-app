<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/addjob">Add Job</router-link> |
      <router-link to="/editjob">Edit Job</router-link>
    </nav>
    <router-view
      :jobs="jobs"
      @add-job="addJob"
      @supprimer-job="SupprimerJob"
      @sauv-change="SauvegarderGhangement"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  methods: {
    fetchJobs() {
      fetch("/jobs.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Fetched data:", data); // Log the fetched data
          this.jobs = data; // Store the fetched data
        })
        .catch((error) => console.error("Erreur:", error));
    },
    addJob(newJob) {
      this.jobs.push(newJob);
    },
    SupprimerJob(index) {
      const userChoice = confirm("Do you really want to delete this job?");
      if (userChoice) {
        this.jobs.splice(index, 1);
      } else {
        return;
      }
    },
    SauvegarderGhangement(jobname, new_salary, new_date) {
      for (let element of this.jobs) {
        if (element.titre.trim() === jobname.trim()) {
          element.salaire = new_salary;
          element.date = new_date;
        }
      }
    },
  },
  mounted() {
    this.fetchJobs();
  },
};
</script>

<style>
body {
  background-color: antiquewhite;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
nav {
  padding: 20px;
  background-color: #f5f5f5;
  margin-bottom: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 15px;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #42b983;
}
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
