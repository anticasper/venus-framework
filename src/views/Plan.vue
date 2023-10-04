<template>
  <TCrud :config="config"> </TCrud>
</template>

<script>
import TCrud from '@/layout/TCrud'
export default {
  components: {
    TCrud,
  },
  data: () => ({
    config: {
      head: 'Planos',
      breadcrumb: [{ text: 'Home' }, { text: 'About' }, { text: 'Planos' }],
      route: 'plan',
    },
  }),
  mounted() {
    // const users = this.$crud.get('users')
    // console.log(users)
  },
}
</script>
