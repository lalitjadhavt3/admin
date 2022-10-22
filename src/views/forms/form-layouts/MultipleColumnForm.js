// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

const MultipleColumnForm = () => {
  const [enteredId, setId] = useState('');
  const [enteredName, setName] = useState('');
  const [enteredFile, setFile] = useState('');



  const submitHandler = (event) => {
    event.preventDefault();

    setId('');
    setName('');

    // const formData = new FormData();
    // formData.append("name", enteredName);
    // formData.append("Id", enteredId);
    // formData.append("file", enteredFile);
    // axios({
    //   method: 'post',
    //   url: 'https://lalitjadhav.in/adminapi/createProperty.php',
    //   data: formData,
    //   headers: { 'Content-Type': 'multipart/form-data' }
    // })
    //   .then(function (response) {

    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Add Demo</CardTitle>
      </CardHeader>

      <CardBody>
        <Form onSubmit={submitHandler}>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                ID
              </Label>
              <Input type="number" value={enteredId} onChange={() => setId(event.target.value)} placeholder='ID' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='select-basic'>
                Basic Select
              </Label>
              <Input type='select' name='select' id='select-basic'>
                <option>Pulp Fiction</option>
                <option>Nightcrawler</option>
                <option>Donnie Darko</option>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Name
              </Label>
              <Input type="text" value={enteredName} onChange={() => setName(event.target.value)} placeholder=' Name' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                File
              </Label>
              <Input type="file" onChange={() => setFile(event.target.files[0])} placeholder=' Select File' />
            </Col>

            <Col sm='12' className='text-center'>
              <div className='d-flex'>
                <Button className='me-1' color='success' type='submit'>
                  Submit
                </Button>
                <Button outline color='secondary' type='reset'>
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default MultipleColumnForm
