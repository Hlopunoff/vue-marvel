<script setup lang="ts">
import type { ICharacter } from '@/models/ICharacter'

const props = defineProps<ICharacter>()
</script>

<template>
  <div class="card">
    <div class="card__img">
      <img :src="props.thumbnail.path" :alt="props.name" />
    </div>
    <div class="card__info">
      <h3 class="card__title">{{ props.name }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/funcs.scss';
.card {
  height: 100%;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    margin-top: to-em(-9);
    filter: drop-shadow(0px 5px 20px #9f0013);
  }

  &__img {
    max-height: to-em(200);
    height: 100%;
  }

  &__info {
    max-height: to-em(118);
    height: 100%;
    padding: to-em(15);
    background-color: var(--dark);
  }

  &__title {
    text-transform: uppercase;
    color: var(--white);
    font-size: to-rem(22);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
