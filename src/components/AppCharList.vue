<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CharCard from './AppCharCard.vue'
import Button from '../UI/AppButton.vue'

import tempCharImage from '../assets/images/loki.jpg'

import type { ICharacter } from '@/models/ICharacter'

let data = ref<ICharacter[]>([]);

onMounted(() => {
  const getData = async () => {
    try {
      const response = await fetch(
        'https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=2c8a14a356572e1c302e1a3d414636c4'
      )

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }

      data.value = (await response.json()).data.results
      console.log(data.value[0].thumbnail);
    } catch (error) {
      console.error((error as Error).message)
    }
  }

  getData()
})

// const data: ICharacter[] = [
//   {
//     id: 1,
//     name: 'Loki',
//     description: 'Some description',
//     thumbnail: {
//       path: tempCharImage,
//       extension: 'jpg'
//     }
//   },
//   {
//     id: 2,
//     name: 'Loki',
//     description: 'Some description',
//     thumbnail: {
//       path: tempCharImage,
//       extension: 'jpg'
//     }
//   },
//   {
//     id: 3,
//     name: 'Loki',
//     description: 'Some description',
//     thumbnail: {
//       path: tempCharImage,
//       extension: 'jpg'
//     }
//   },
//   {
//     id: 4,
//     name: 'Loki',
//     description: 'Some description',
//     thumbnail: {
//       path: tempCharImage,
//       extension: 'jpg'
//     }
//   },
//   {
//     id: 5,
//     name: 'Loki',
//     description: 'Some description',
//     thumbnail: {
//       path: tempCharImage,
//       extension: 'jpg'
//     }
//   },
//   {
//     id: 6,
//     name: 'Loki',
//     description: 'Some description',
//     thumbnail: {
//       path: tempCharImage,
//       extension: 'jpg'
//     }
//   },
//   {
//     id: 7,
//     name: 'Loki',
//     description: 'Some description',
//     thumbnail: {
//       path: tempCharImage,
//       extension: 'jpg'
//     }
//   },
//   {
//     id: 8,
//     name: 'Loki',
//     description: 'Some description',
//     thumbnail: {
//       path: tempCharImage,
//       extension: 'jpg'
//     }
//   },
//   {
//     id: 9,
//     name: 'Loki',
//     description: 'Some description',
//     thumbnail: {
//       path: tempCharImage,
//       extension: 'jpg'
//     }
//   }
// ]
</script>

<template>
  <section class="char-list">
    <div class="char-list__content">
      <CharCard
        v-for="{ id, name, description, thumbnail } in data"
        :key="id"
        :thumbnail="thumbnail"
        :name="name"
        :description="description"
        :id="id"
      />
    </div>
    <div class="char-list__btn-wrap">
      <Button color="primary" bgColor="primary" :sx="{ marginTop: '45px' }">load more</Button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/style/funcs.scss';
.char-list {
  width: to-prc(650, 1188);

  &__content {
    display: grid;
    grid-template-columns: repeat(3, clamp(to-em(100), 14vw, to-em(200)));
    grid-template-rows: repeat(3, clamp(to-em(200), 22vw, to-em(318)));
    grid-auto-rows: clamp(to-em(200), 22vw, to-em(318));
    justify-content: space-between;
    column-gap: to-em(5);
    row-gap: to-em(30);
  }

  &__btn-wrap {
    text-align: center;
  }
}
</style>
