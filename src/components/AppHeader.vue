<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <h1 class="header__title">
          <b class="header__title_diff-word">Marvel</b>
          <span>information portal</span>
        </h1>
        <ul class="header__links">
          <li class="header__link header__link_active"><a href="#">Characters</a></li>
          <b class="header__links-sep">/</b>
          <li class="header__link"><a href="#">Comics</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/style/funcs.scss';
.header {
  margin: clamp(to-em(20), 5vw, to-em(50)) 0;

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: to-em(10);

    @media (max-width: to-em(400)) {
      flex-direction: column;
      row-gap: to-em(5);
      text-align: center;
    }
  }

  &__title {
    display: flex;
    align-items: center;
    column-gap: to-em(10, 28);
    font-size: clamp(to-rem(20), 5vw, to-rem(28));
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--black);

    &_diff-word {
      color: var(--red);
    }
  }

  &__links {
    display: flex;
    align-items: center;
    column-gap: to-em(8);

    &-sep {
      font-size: clamp(to-rem(18), 5vw, to-rem(24));
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: var(--black);
    }
  }

  &__link {
    font-size: clamp(to-rem(18), 4vw, to-rem(24));
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--black);

    &_active {
      color: var(--red);
    }
  }
}
</style>
