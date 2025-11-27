<script>
import { defineComponent } from 'vue'

// Named export - this triggers the bug in v6.0.2
export const TestComponent = defineComponent({
  name: 'TestComponent',
  data() {
    return {
      message: 'Hello'
    }
  }
})
</script>

<template>
  <div class="TestComponent">
    <div class="TestComponent-header">{{ message }}</div>
  </div>
</template>

<style scoped>
.TestComponent {
  background: blue;
}

.TestComponent-header {
  color: white;
  padding: 1rem;
}

.TestComponent-footer {
  font-size: 0.875rem;
}
</style>
