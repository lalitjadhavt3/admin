import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

const data = [
  {
    responsive_id: '',
    id: 1,
    avatar: '10.jpg',
    full_name: "Korrie O'Crevy",
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    start_date: '09/23/2016',
    salary: '$23896.35',
    age: '61',
    experience: '1 Year',
    status: 2
  },
  {
    responsive_id: '',
    id: 2,
    avatar: '1.jpg',
    full_name: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    start_date: '05/20/2018',
    salary: '$13633.69',
    age: '63',
    experience: '3 Years',
    status: 2
  },

]

mock.onGet('/api/datatables/initial-data').reply(() => {
  return [200, data]
})

mock.onGet('/api/datatables/data').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1 } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.filter(
    item =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      item.full_name.toLowerCase().includes(queryLowered) ||
      item.post.toLowerCase().includes(queryLowered) ||
      item.email.toLowerCase().includes(queryLowered) ||
      item.age.toLowerCase().includes(queryLowered) ||
      item.salary.toLowerCase().includes(queryLowered) ||
      item.start_date.toLowerCase().includes(queryLowered)
  )
  /* eslint-enable  */

  return [
    200,
    {
      allData: data,
      invoices: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})
