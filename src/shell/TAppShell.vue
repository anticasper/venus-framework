<template>
  <TApp>
    <THeadBar>
      <div class="flex content-center items-center">
        <div class="w-2 px-4">
          <TIcon name="fa-bars" color="black" regular button @click="navbar = !navbar" />
        </div>
        <div class="flex-grow px-4">
          <img src="../assets/logo-venus.png" class="h-16" />
        </div>
        <div class="w-2/12 p-4 text-right">
          <slot name="header-right"></slot>
        </div>
      </div>
    </THeadBar>
    <TMain>
      <TSideBar :active="navbar">
        <template #content>
          <TButton v-for="(item, i) in menuModel" :key="i" :to="item.to" block class="mb-1"> <TIcon :name="item.icon" class="mr-2 fa-sm" solid />{{ item.text }} </TButton>
        </template>
        <template #footer>
          <TButton block class="text-center" @click="logoff()">Sair</TButton>
        </template>
      </TSideBar>
      <TContent class="p-4">
        <slot></slot>
      </TContent>
    </TMain>
  </TApp>
</template>

<script>
import TApp from '@/components/TApp'
import THeadBar from '@/components/THeadBar'
import TMain from '@/components/TMain'
import TSideBar from '@/components/TSideBar'
import TContent from '@/components/TContent'

import TButton from '@/components/TButton'
import TIcon from '@/components/TIcon'

export default {
  name: 'App',
  components: {
    TApp,
    THeadBar,
    TMain,
    TSideBar,
    TContent,
    TButton,
    TIcon,
  },
  props: {},
  data: () => ({
    var1: null,
    navbar: true,
    menuModel: [
      { text: 'Home', to: '/', icon: 'fa-user' },
      { text: 'Usuários', to: '/usuarios', icon: 'fa-user' },
      { text: 'Planos', to: '/plan', icon: 'fa-user' },
      { text: 'Grupos', to: '/group', icon: 'fa-user' },
      { text: 'Programas', to: '/program', icon: 'fa-user' },
    ],
  }),
  methods: {
    async logoff() {
      const res = await this.$crud.insert('logout', this.object)
      if (res) {
        this.$router.push('/login')
        this.$store.dispatch('setUserInfo', null)
      }
    },
  },
}
</script>
