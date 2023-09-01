<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ICharacter } from '../models/ICharacter.ts';
import Button from '../UI/AppButton.vue'

import thumbnailImage from '../assets/images/thumbnail.png'

const char = ref<ICharacter>()
const randomId = ref(Math.floor(Math.random() * (1011400 - 1011000)) + 1011000);
</script>

<template>
  <section class="random">
    <div class="container">
      <div class="random__wrap">
        <div class="random__info info">
          <div class="info__content">
            <div class="info__img">
              <img :src="thumbnailImage" alt="Random character picture" />
            </div>
            <div class="info__description">
              <h2 class="info__name">thor</h2>
              <p class="info__text">
                As the Norse God of thunder and lightning, Thor wields one of the greatest weapons
                ever made, the enchanted hammer Mjolnir. While others have described Thor as an
                over-muscled, oafish imbecile, he's quite smart and compassionate...
              </p>
              <div class="info__btns">
                <Button color="primary" bgColor="primary">Homepage</Button>
                <Button color="secondary" bgColor="primary">Wiki</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="random__cla cla">
          <div class="cla__content">
            <h2 class="cla__slogan">
              Random character for today!<br />
              Do you want to get to know him better?
            </h2>
            <h3 class="cla__subslogan">Or choose another one</h3>
            <Button color="primary" bgColor="secondary" :sx="{ marginTop: '13px' }">try it</Button>
          </div>
          <div class="cla__decoration"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/style/funcs.scss';
.random {
  &__wrap {
    display: flex;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: to-em(710)) {
      flex-direction: column;
    }
  }

  &__info {
    width: 50%;
    background-color: var(--white);
    color: var(--black);

    @media (max-width: to-em(710)) {
      width: 100%;
    }
  }

  &__cla {
    position: relative;
    width: 50%;
    background-color: var(--dark);
    color: var(--white);

    @media (max-width: to-em(710)) {
      width: 100%;
    }
  }

  .info {
    &__content {
      display: flex;
      padding: clamp(to-em(15), 3vw, to-em(35)) clamp(to-em(15), 3vw, to-em(40));
      column-gap: to-em(10);
      justify-content: space-between;
      align-items: center;
    }

    &__img {
      max-width: to-em(180);
      min-width: to-em(100);
      width: 100%;
      max-height: to-em(180);
      min-height: to-em(100);
      height: 100%;
    }

    &__description {
      max-width: to-em(265);
      display: flex;
      flex-direction: column;
      row-gap: to-em(10);
    }

    &__name {
      text-transform: uppercase;
      font-size: clamp(to-rem(18), 3vw, to-rem(22));
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: var(--black);
    }

    &__text {
      font-size: to-rem(14);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    &__btns {
      display: flex;
      align-items: center;
      column-gap: clamp(to-em(10), 3vw, to-em(30));
    }
  }

  .cla {
    &__content {
      padding: clamp(to-em(15), 3vw, to-em(35)) clamp(to-em(15), 3vw, to-em(40));
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;

      @media (max-width: to-em(710)) {
        position: static;
      }
    }

    &__slogan {
      font-size: clamp(to-rem(18), 2vw, to-rem(24));
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    &__subslogan {
      margin-top: clamp(to-em(10, 18), 2.3vw, to-em(33, 24));
      font-size: clamp(to-em(18), 2vw, to-rem(24));
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    &__decoration {
      position: absolute;
      max-width: clamp(to-em(120), 25vw, to-em(190));
      max-height: clamp(to-em(100), 30vw, to-em(200));
      width: 100%;
      height: 100%;
      bottom: 0;
      right: 0;
      background-image: url('../assets/images/decoration.png');
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
}
</style>
