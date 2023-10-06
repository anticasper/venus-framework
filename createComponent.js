const fs = require('fs')

const filelist = fs.readdirSync('./src/components')

let base = `
|lista|

const venus = {
  install(Vue) {
    |vuecomponents|
  },
}

export default venus
`

let list = ''
let list2 = ''
for (let i = 0; i < filelist.length; i++) {
  const element = filelist[i]
  const comp = element.replace('.vue', '')
  list += `import ${comp} from '@/components/${element}'\n`
  list2 += `Vue.component('${comp}',  ${comp})\n`
}

base = base.replace('|lista|', list)
base = base.replace('|vuecomponents|', list2)

fs.writeFileSync('./src/plugins/venus.js', base)
