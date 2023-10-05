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
      head: 'Campos do Formulário',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Formulários' }],
      route: 'field',
      fatherField: 'idForm',
      father: null,
    },
  }),
  mounted() {
    this.config.father = this.$route.params.idFather
  },
}
</script>
