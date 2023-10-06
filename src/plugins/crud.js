import axios from 'axios'
const { baseApiUrl } = require('./global')
import store from '@/store'

axios.defaults.withCredentials = true

const sendError = () => {
  store.dispatch('setToasted', {
    active: true,
    text: 'Tem algo errado aí fera.',
    icon: 'fa-bomb',
    color: '#ff0000',
  })
}

const get = async (route, params = {}) => {
  let url = `${baseApiUrl}/${route}`

  const result = await axios
    .get(url, params)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      sendError()
      return err
    })

  return result
}

const search = async (route, objectParams) => {
  let url = `${baseApiUrl}/${route}`

  const result = await axios
    .get(url, { params: objectParams })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      sendError()
      return err
    })
  return result
}

const insert = async (route, object) => {
  const url = `${baseApiUrl}/${route}`
  const result = await axios
    .post(url, object)
    .then((res) => {
      return res
    })
    .catch((err) => {
      sendError()
      return err
    })

  return result
}

const update = async (route, id, object) => {
  const url = `${baseApiUrl}/${route}/${id}`
  const result = await axios
    .patch(url, object)
    .then((res) => {
      return res
    })
    .catch((err) => {
      sendError()
      return err
    })

  return result
}

const remove = async (route, id) => {
  let url = `${baseApiUrl}/${route}/${id}`
  const result = await axios
    .delete(url)
    .then(() => {
      return true
    })
    .catch((err) => {
      sendError()
      return err
    })

  return result
}

const validateCurrentPassword = async (route, object) => {
  const url = `${baseApiUrl}/${route}`
  const result = await axios
    .post(url, object)
    .then((res) => {
      return res
    })
    .catch((err) => {
      sendError()
      return err
    })

  return result
}

const insertFile = async (route, object) => {
  const url = `${baseApiUrl}/${route}`

  const formData = new FormData()

  if (Array.isArray(object.file)) {
    object.file.forEach((file) => {
      formData.append('file', file)
    })
  } else {
    formData.append('file', object.file)
  }

  delete object.file

  Object.keys(object).forEach((el) => {
    formData.append(el, object[el])
  })

  const result = await axios
    .post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      sendError()
      return err
    })

  return result
}

const getFile = async (route, object, glosa) => {
  let url = ''

  if (glosa) {
    url = `${baseApiUrl}/${route}?startDate=${object.startDate}&endDate=${object.endDate}`
  } else {
    url = `${baseApiUrl}/${route}?tableName=${object.tableName}&startDate=${object.startDate}&endDate=${object.endDate}${object.service}`
  }

  const result = await axios({
    url: url,
    method: 'GET',
    responseType: 'blob',
  })
    .then((res) => {
      const href = URL.createObjectURL(res.data)

      const link = document.createElement('a')

      link.href = href
      link.setAttribute('download', `${glosa ? 'glosa' : object.tableName}_${object.startDate}_${object.endDate}.xlsx`)
      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)

      URL.revokeObjectURL(href)

      return res
    })
    .catch((err) => {
      sendError()
      return err
    })

  return result
}

const crud = {
  get,
  search,
  update,
  remove,
  insert,
  validateCurrentPassword,
  insertFile,
  getFile,
}

export default {
  install(app) {
    app.config.globalProperties.$crud = crud
  },
}
