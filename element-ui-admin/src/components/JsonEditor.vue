<template>
  <div class="json-editor">
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script>
export default {
    name: 'jsonEditor',
    data() {
        return {
            jsonEditor: false
        }
    }
}
</script>
