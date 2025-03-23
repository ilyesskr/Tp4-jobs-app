<template>
  <div class="details">
    <h1>Job Details</h1>
    <div v-if="job">
      <h2>{{ job.titre }}</h2>
      <p><strong>Description:</strong> {{ job.description }}</p>
      <p><strong>Salaire:</strong> {{ job.salaire }}</p>
      <p><strong>Date de création:</strong> {{ job.date }}</p>
    </div>
    <div v-else>
      <p>Job not found.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsView",
  props: {
    jobId: {
      type: String,
      required: true,
    },
    jobs: {
      type: Array,
      required: true,
    },
  },
  computed: {
    job() {
      // Find the job with the matching ID
      return this.jobs.find((job) => job.id === parseInt(this.jobId));
    },
  },
};
</script>

<style scoped>
.details {
  text-align: center;
}
</style>
