
import TApp from '@/components/TApp.vue'
import TBreadcrumb from '@/components/TBreadcrumb.vue'
import TButton from '@/components/TButton.vue'
import TCard from '@/components/TCard.vue'
import TCheckbox from '@/components/TCheckbox.vue'
import TContainer from '@/components/TContainer.vue'
import TContent from '@/components/TContent.vue'
import THeadBar from '@/components/THeadBar.vue'
import TIcon from '@/components/TIcon.vue'
import TInput from '@/components/TInput.vue'
import TInputSearch from '@/components/TInputSearch.vue'
import TLoadingBar from '@/components/TLoadingBar.vue'
import TMain from '@/components/TMain.vue'
import TPagination from '@/components/TPagination.vue'
import TSelect from '@/components/TSelect.vue'
import TSideBar from '@/components/TSideBar.vue'
import TTable from '@/components/TTable.vue'
import TToast from '@/components/TToast.vue'


const venus = {
  install(Vue) {
    Vue.component('TApp',  TApp)
Vue.component('TBreadcrumb',  TBreadcrumb)
Vue.component('TButton',  TButton)
Vue.component('TCard',  TCard)
Vue.component('TCheckbox',  TCheckbox)
Vue.component('TContainer',  TContainer)
Vue.component('TContent',  TContent)
Vue.component('THeadBar',  THeadBar)
Vue.component('TIcon',  TIcon)
Vue.component('TInput',  TInput)
Vue.component('TInputSearch',  TInputSearch)
Vue.component('TLoadingBar',  TLoadingBar)
Vue.component('TMain',  TMain)
Vue.component('TPagination',  TPagination)
Vue.component('TSelect',  TSelect)
Vue.component('TSideBar',  TSideBar)
Vue.component('TTable',  TTable)
Vue.component('TToast',  TToast)

  },
}

export default venus
