<template>
  <div class="dialog">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MyAlert',
}
</script>


<style scoped lang="sass">
.dialog 
  background: rgb(192, 83, 83)
  display: flex
  border-radius: 12px
  padding: 20px
  margin-bottom: 15px

.content 
  margin: auto
  color: white
  min-height: 30px
  max-width: 200px

</style>