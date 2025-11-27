# vite-plugin-vue v5.2.2+ Named Export Scoped CSS Bug Reproduction

Minimal reproduction for: **Scoped CSS completely missing from named exports in Options API components**

## The Bug

`@vitejs/plugin-vue` v5.2.2+ drops scoped CSS from Options API components using named exports.

- **Regression introduced:** v5.2.2
- **Last working version:** v5.2.1
- **Currently broken:** v5.2.2 through v6.0.2

## Quick Start

```bash
npm install
npm run build
```

Then check for CSS:
```bash
grep "background.*blue" dist/assets/*.css
```

**Expected:** CSS found (works in v5.2.1)
**Actual:** No results (broken in v5.2.2+)

## Test Different Versions

```bash
# Test working version
npm install -D @vitejs/plugin-vue@5.2.1
npm run build
grep "TestComponent.*background" dist/assets/*.css  # ✅ CSS found

# Test broken version
npm install -D @vitejs/plugin-vue@5.2.2
npm run build
grep "TestComponent.*background" dist/assets/*.css  # ❌ CSS missing
```

## The Component

See `src/TestComponent.vue` - uses named export with scoped styles:

```vue
<script>
export const TestComponent = defineComponent({...})  // Named export
</script>
<style scoped>
.TestComponent { background: blue; }
</style>
```

## The Issue

**Named exports lose scoped CSS:**
```javascript
export const X = defineComponent({...})  // ❌ CSS missing in v5.2.2+
```

**Default exports work:**
```javascript
export default defineComponent({...})  // ✅ CSS present
```

## Environment

- **@vitejs/plugin-vue:** 6.0.2 (installed)
- **vite:** 7.2.4
- **vue:** 3.5.22
- **Node:** v22

## Related Issue

[Link to GitHub issue]
