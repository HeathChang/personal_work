<template>
  <main>
    <base-card>
      <h2>Find Your Coach</h2>
      <span class="option">
        <input type="checkbox" id="frontend" checked @change="setFilter" />
        <label for="frontend">frontend</label>
      </span>
      <span class="option">
        <input type="checkbox" id="backend" @change="setFilter" />
        <label for="backend">backend</label>
      </span>
      <span class="option">
        <input type="checkbox" id="career" @change="setFilter" />
        <label for="career">Career</label>
      </span>
    </base-card>
  </main>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      // eslint-disable-next-line no-console
      console.log("event: ", event);
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>