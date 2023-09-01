<script setup lang="ts">
import Button from '../UI/AppButton.vue'

import tempImage from '../assets/images/loki.jpg'
</script>

<template>
  <aside class="aside">
    <div class="aside__top">
      <div class="aside__img">
        <img :src="tempImage" alt="Loki image" />
      </div>
      <div class="aside__cla">
        <h3 class="aside__name">Loki</h3>
        <div class="aside__btns">
          <Button color="primary" bgColor="primary">homepage</Button>
          <Button color="secondary" bgColor="primary">wiki</Button>
        </div>
      </div>
      <p class="aside__description">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and
        Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the
        father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the
        father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave
        birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is
        referred to as the father of Váli in the Prose Edda.
      </p>
    </div>
    <div class="aside__bottom">
      <h3 class="aside__subtitle">Comics:</h3>
      <ul class="aside__comics">
        <li class="aside__comic">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li class="aside__comic">Alpha Flight (1983) #50</li>
        <li class="aside__comic">Amazing Spider-Man (1999) #503</li>
        <li class="aside__comic">Amazing Spider-Man (1999) #504</li>
        <li class="aside__comic">
          AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
        </li>
        <li class="aside__comic">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
        <li class="aside__comic">
          Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
        </li>
        <li class="aside__comic">Vengeance (2011) #4</li>
        <li class="aside__comic">Avengers (1963) #1</li>
        <li class="aside__comic">Avengers (1996) #1</li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import '../assets/style/funcs.scss';
.aside {
  width: to-prc(425, 1188);
  height: max-content;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 10;
  padding: to-em(25);
  background-color: var(--white);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &__top {
    display: grid;
    grid-template-columns: to-em(150) 1fr;
    grid-template-rows: to-em(150) auto;
    column-gap: to-em(25);
    row-gap: to-em(15);
  }

  &__name {
    font-size: to-rem(22);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--black);
    text-transform: uppercase;
  }

  &__btns {
    margin-top: to-em(35);
    display: flex;
    flex-direction: column;
    row-gap: to-em(10);
  }

  &__description {
    grid-column-start: span 2;
    font-size: to-rem(14);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black);
  }

  &__bottom {
    margin-top: to-em(10);
  }

  &__subtitle {
    font-size: to-rem(18);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--black);
  }

  &__comics {
    margin-top: to-em(14);
    display: flex;
    flex-direction: column;
    row-gap: to-em(10);
  }

  &__comic {
    padding: to-em(4) to-em(10);
    font-size: to-rem(14);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: var(--white);
    color: var(--black);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
}
</style>
