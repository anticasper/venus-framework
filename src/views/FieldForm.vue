<template>
  <TForm :config="config"> </TForm>
</template>

<script>
import TForm from '@/layout/TForm'
export default {
  components: {
    TForm,
  },
  data: () => ({
    config: {
      head: 'Campos',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Campos do Formulário' }],
      route: 'field',
    },
  }),
  mounted() {},
}
</script>
