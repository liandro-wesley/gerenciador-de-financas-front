<template>
  <div>
    <section
      v-if="cards.type === 'total'"
      class="card"
    >
      <div class="card__structure">
        <div class="card__structure card__structure__row">
            <div class="card__structure__row card__structure__row__col">
              <h2>{{cards.title}}</h2>
            </div>
        </div>
        <div class="card__structure card__structure__row">
            <div class="card__structure__row card__structure__row__col">
              <p>{{cards.value}}</p>
            </div>
        </div>
      </div>
    </section>
    <section
      v-if="cards.type === 'entradas'"
      class="card card__resume--entradas"
    >
      <div class="card__structure">
        <div class="card__structure card__structure__row">
            <div class="card__structure__row card__structure__row__col">
              <h2>{{cards.title}}</h2>
              <img src="@/assets/images/entradas.png" alt="Entradas">
            </div>
        </div>
        <div class="card__structure card__structure__row">
            <div class="card__structure__row card__structure__row__col">
              <p>+{{cards.value}}</p>
            </div>
        </div>
      </div>
    </section>
    <section
      v-if="cards.type === 'saidas'"
      class="card card__resume--saidas"
    >
      <div class="card__structure">
        <div class="card__structure card__structure__row">
            <div class="card__structure__row card__structure__row__col">
              <h2>{{cards.title}}</h2>
              <img src="@/assets/images/saidas.png" alt="Entradas">
            </div>
        </div>
        <div class="card__structure card__structure__row">
            <div class="card__structure__row card__structure__row__col">
              <p>- {{cards.value}}</p>
            </div>
        </div>
      </div>
    </section>
    <section
      v-if="cards.type === 'agendados'"
      class="card card__resume--agendados"
    >
      <div class="card__structure">
        <div class="card__structure card__structure__row">
            <div class="card__structure__row card__structure__row__col">
              <h2>{{cards.title}}</h2>
              <img src="@/assets/images/saidas-agendadas.png" alt="Entradas">
            </div>
        </div>
        <div class="card__structure card__structure__row">
            <div class="card__structure__row card__structure__row__col">
              <p>- {{cards.value}}</p>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    cards: {
      type: Object,
      title: Object,
      value: Object,
      icon: Object,
    },
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/colors.scss';
  @import '@/assets/scss/breakpoints.scss';
  body[current-theme="dark"]{
    .card {
      width: 100%;
      height: 150px;
      border-radius: 8px;
      color: $white;
      background-color: $pink;
      text-transform: uppercase;
      margin-bottom: 10px;
      @media screen  and (min-width: $md){
        width: 350px;
        margin-left: 10px;
      }

      &__structure {

        &__row {
          display: flex;

          &__col {
            padding-top: 28px;
            padding-left: 15px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            img {
              padding-right: 12px;
            }
            p {
              font-weight: 600;
              font-size: 30px;
            }

          }
        }

      }
      &__resume {
        &--entradas {
          box-shadow: 0px 1px 4px -2px rgba(75, 15, 211, 0.25);
          background-color: $card-dark-mode;
          color: $green;
        }
        &--saidas {
          box-shadow: 0px 1px 4px -2px rgba(75, 15, 211, 0.25);
          background-color: $card-dark-mode;
          color: $red;
        }
        &--agendados {
          box-shadow: 0px 1px 4px -2px rgba(75, 15, 211, 0.25);
          background-color: $card-dark-mode;
          color: $yellow;
        }
      }

    }
  }
  body[current-theme="light"]{
    .card {
      width: 100%;
      height: 150px;
      border-radius: 8px;
      color: $white;
      background-color: $pink;
      text-transform: uppercase;
      margin-bottom: 10px;
      @media screen  and (min-width: $md){
        width: 350px;
        margin-left: 10px;
      }

      &__structure {

        &__row {
          display: flex;

          &__col {
            padding-top: 28px;
            padding-left: 15px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            img {
              padding-right: 12px;
            }
            p {
              font-weight: 600;
              font-size: 30px;
            }

          }
        }

      }
      &__resume {
        &--entradas {
          box-shadow: 0px 1px 4px -2px rgba(75, 15, 211, 0.25);
          background-color: $white;
          color: $green;
        }
        &--saidas {
          box-shadow: 0px 1px 4px -2px rgba(75, 15, 211, 0.25);
          background-color: $white;
          color: $red;
        }
        &--agendados {
          box-shadow: 0px 1px 4px -2px rgba(75, 15, 211, 0.25);
          background-color: $white;
          color: $yellow;
        }
      }

    }
  }
</style>
