// ** React Imports
import { Fragment } from 'react'
import MultipleColumnForm from '../../forms/form-layouts/MultipleColumnForm';

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Alert } from 'reactstrap'
var iframes = document.querySelectorAll('iframe');
for (var i = 0; i < iframes.length; i++) {
  iframes[i].parentNode.removeChild(iframes[i]);
}
const LayoutEmpty = () => {
  return (
    <Fragment>
      <MultipleColumnForm />
    </Fragment>
  )
}

export default LayoutEmpty
