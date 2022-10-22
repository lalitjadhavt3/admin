// ** React Imports
import { useState } from 'react'

// ** Third Party Components


// ** Images
import img1 from '@src/assets/images/portrait/small/avatar-s-12.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-4.jpg'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, ListGroupItem } from 'reactstrap'

const listItems = [
  {
    id: '1',
    img: img1,
    name: 'Mary S. Navarre',
    content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
  },
  {
    id: '2',
    img: img2,
    name: 'Samuel M. Ellis',
    content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
  },
  {
    id: '3',
    img: img3,
    name: 'Sandra C. Toney',
    content: 'Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa chupsake.'
  },
  {
    id: '4',
    img: img4,
    name: 'Cleveland C. Goins',
    content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
  },
  {
    id: '5',
    img: img5,
    name: 'Linda M. English',
    content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
  }
]

const DndListGroup = () => {
  // ** State
  const [listArr, setListArr] = useState(listItems)
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic List Group Sortable</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          The most basic list group is simply an unordered list with list items, and the proper classes.
        </CardText>

      </CardBody>
    </Card>
  )
}

export default DndListGroup
