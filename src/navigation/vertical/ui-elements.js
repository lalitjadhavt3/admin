// ** Icons Import
import { Type, Eye, CreditCard, Circle, Briefcase, Box, Layout } from 'react-feather'

export default [
  
 
  
  {
    id: 'Property',
    title: 'Property',
    icon: <Box size={20} />,
    children: [
      {
        id: 'addProperty',
        title: 'Add property',
        icon: <Circle size={12} />,
        navLink: '/addProperty'
      },
      {
        id: 'manageProperty',
        title: 'Manage Property',
        icon: <Circle size={12} />,
        navLink: '/property'
      },
      
    ]
  }
  
]
