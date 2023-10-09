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
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Campos do Formulário' }],
      route: 'field',
      fatherField: 'idForm',
      father: null,
      headers: [
        { text: 'ID', value: 'id', classes: 'w-8' },
        { text: 'Nome', value: 'name' },
      ],
    },
  }),
  mounted() {
    this.config.father = this.$route.params.idFather
  },
}
</script>
