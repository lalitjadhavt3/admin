// ** React Imports
import { Fragment } from 'react'
import MultipleColumnForm from '../forms/form-layouts/MultipleColumnForm';

// ** Custom Components

// ** Reactstrap Imports
var iframes = document.querySelectorAll('iframe');
for (var i = 0; i < iframes.length; i++) {
    iframes[i].parentNode.removeChild(iframes[i]);
}
const addProperty = () => {
    return (
        <Fragment>
            <MultipleColumnForm />
        </Fragment>
    )
}

export default addProperty;
