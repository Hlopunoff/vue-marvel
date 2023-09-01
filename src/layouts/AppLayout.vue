<script setup lang="ts">
import Header from '../components/AppHeader.vue'
import RandomChar from '../components/AppRandomChar.vue'
import CharList from '../components/AppCharList.vue'
import AppCharInfo from '../components/AppCharInfo.vue'
</script>

<template>
  <Header />
  <main style="padding: 45px">
    <RandomChar />
    <section>
      <div class="container">
        <div class="content__wrap">
          <CharList />
          <AppCharInfo />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.content__wrap {
  position: relative;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
}
</style>
