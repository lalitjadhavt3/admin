// ** React Imports
import { useState } from 'react'

// ** Third Party Components

// ** Reactstrap Imports
import { Card, CardHeader, CardBody, CardTitle, CardText, Col } from 'reactstrap'

const dragItems = [
  {
    id: '1',
    title: 'Draggable Card 1',
    content:
      'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.'
  },
  {
    id: '2',
    title: 'Draggable Card 2',
    content:
      'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.'
  },
  {
    id: '3',
    title: 'Draggable Card 3',
    content:
      'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.'
  },
  {
    id: '4',
    title: 'Draggable Card 4',
    content:
      'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.'
  }
]

const DndCards = () => {
  // ** State
  const [cardsArr, setCardsArr] = useState(dragItems)

  return (
    ''
  )
}

export default DndCards
