<script setup>
// Import as named export - this triggers the bug
import { TestComponent } from './TestComponent.vue'
</script>

<template>
  <div class="App">
    <h1>Bug Reproduction Test</h1>
    <p>The component below uses Options API with scoped styles.</p>
    <p>Using NAMED EXPORT ONLY (no default import) - JSONForms pattern</p>
    <TestComponent />
  </div>
</template>

<style scoped>
.App {
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

p {
  color: #666;
  margin-bottom: 0.5rem;
}
</style>
