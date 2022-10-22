// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

const MultipleColumnForm = () => {
  const [bName, setBorrowerName] = useState('');
  const [city, setBorrowerCity] = useState('');
  const [state, setBorrowerState] = useState('');
  const [nature, setNatureofProperty] = useState('');
  const [area, setAreaofProperty] = useState('');
  const [unit, setUnitofMeasurement] = useState('');
  const [age, setAgeofBuilding] = useState('');
  const [floors, setFloors] = useState('');
  const [totalfloors, setTotalFloors] = useState('');
  const [boundarywall, setBoundaryWall] = useState('');
  const [specifications, setSpecifications] = useState('');
  const [amenities, setAmenities] = useState('');
  const [distance, setDistance] = useState('');
  const [encum, setEncum] = useState('');
  const [enteredFile, setFile] = useState('');



  const submitHandler = (event) => {
    event.preventDefault();

    
    setBorrowerName('');

    // const formData = new FormData();
    // formData.append("borrowername", bName);
    // formData.append("borrowercity", city);
    // formData.append("borrowerstate", state);
    // formData.append("natureofproperty", nature);    
    // formData.append("areaofproperty", area);
    // formData.append("unitofmeasurement", unit);
    // formData.append("ageofbuilding", age);
    // formData.append("areaofproperty", area);
    // formData.append("floors", floors);
    // formData.append("totalfloors", totalfloors);
    // formData.append("boundarywall", boundarywall);
     // formData.append("specifications", specifications);
       // formData.append("amenities", amenities);
        // formData.append("distance", distance);
        // formData.append("encum", encum);
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
          <Col md='4' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Borrower Name
              </Label>
              <Input type='text' name='borrowername'  onChange={() => setBorrowerName(event.target.value)}  placeholder='Borrower Name' />
            </Col>
            <Col md='4' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                City
              </Label>
              <Input type='text' name='borrowercity'  onChange={() => setBorrowerCity(event.target.value)}  placeholder='City' />
            </Col>
            <Col md='4' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                State
              </Label>
              <Input type='text' name='borrowerstate'  onChange={() => setBorrowerState(event.target.value)}  placeholder='State' />
            </Col>
            <Col md='4' sm='12' className='mb-1'>
            <Label className='form-label' for='select-basic'>
                Nature of Property
              </Label>
              <Input type='select' name='select'  id='select-basic'>
                <option value="flat">Flat</option>
                <option value="land">Land</option>
                <option value="house">House</option>
                <option value="office">Office</option>
                <option value="shop">Shop</option>
                <option value="other">Other</option>
              </Input>
              <Input type='text' name='natureofproperty'  onChange={() => setNatureofProperty(event.target.value)}  placeholder='State' />
            </Col>

            <Col md='4' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Area of Property
              </Label>
              <Input type='number' name='areaofproperty'  onChange={() => setAreaofProperty(event.target.value)}  placeholder='State' />
            </Col>

            <Col md='4' sm='12' className='mb-1'>
              <Label className='form-label' for='select-basic'>
                Unit of Measurement
              </Label>
              <Input type='select' name='select'  id='select-basic'>
                <option value="sqft">SqFt</option>
                <option value="sqmtr">SqMtr</option>
                <option value="yard">Yard</option>
                <option value="guntha">Guntha</option>
                <option value="other">Other</option>
              </Input>
              <Input type='text' name='unitofmeasurement'  onChange={() => setUnitofMeasurement(event.target.value)}  placeholder='State' />
            </Col>


            <Col md='4' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Age of Building
              </Label>
              <Input type='number' name='ageofbuilding'  onChange={() => setAgeofBuilding(event.target.value)}  placeholder='State' />
            </Col>

            <Col md='4' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Floors
              </Label>
              <Input type='text' name='floors'  onChange={() => setFloors(event.target.value)}  placeholder='State' />
            </Col>

            <Col md='4' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Total no of Floors
              </Label>
              <Input type='number' name='totalfloors'  onChange={() => setTotalFloors(event.target.value)}  placeholder='State' />
            </Col>

            <Col md='4' sm='12' className='mb-1'>
            <CardTitle tag='h4'>Boundary Wall</CardTitle>
            <Label className='form-check-label' for='ex1-active'>
                Yes
              </Label>
              <Label className='form-check-label' for='ex1-active'>
                No
              </Label>
              <Input type='text' name='boundarywall'  onChange={() => setBoundaryWall(event.target.value)}  placeholder='State' />
            </Col>

            <Col md='6' sm='12' className='mb-1'>
              <CardTitle tag='h4'>Specifications</CardTitle>
              <div>
               <Label className='form-label' for='basic-number-input'>
                 No of Bedrooms
                </Label>
            <InputNumber id='basic-number-input' defaultValue={1} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <div>
               <Label className='form-label' for='basic-number-input'>
                 No of Bathrooms
                </Label>
            <InputNumber id='basic-number-input' defaultValue={1} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <div>
               <Label className='form-label' for='basic-number-input'>
                 No of Balcony
                </Label>
            <InputNumber id='basic-number-input' defaultValue={1} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <Input type='text' name='specifications'  onChange={() => setSpecifications(event.target.value)}  placeholder='State' />
             </Col>

            <Col md='6' sm='12' className='mb-1'>
            <CardTitle tag='h4'>Amenities</CardTitle>
            <Label className='form-check-label' for='ex1-active'>
                Swimming Pool
              </Label>
              <Label className='form-check-label' for='ex1-active'>
                Lift
              </Label>
              <Label className='form-check-label' for='ex1-active'>
                Indoor Games
              </Label>
              <Label className='form-check-label' for='ex1-active'>
                Parking Area
              </Label>
              <Input type='text' name='amenities'  onChange={() => setAmenities(event.target.value)}  placeholder='State' />
            </Col>


            <Col md='6' sm='12' className='mb-1'>
            <CardTitle tag='h4'>Distance From key Facilities</CardTitle>
              <div>
               <Label className='form-label' for='basic-number-input'>
                 Hospital
                </Label>
            <InputNumber id='basic-number-input' defaultValue={100} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <div>
             <Label className='form-label' for='basic-number-input'>
                 School
                </Label>
            <InputNumber id='basic-number-input' defaultValue={10} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <div>
             <Label className='form-label' for='basic-number-input'>
                 Airport
                </Label>
            <InputNumber id='basic-number-input' defaultValue={10} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <div>
             <Label className='form-label' for='basic-number-input'>
                 Railway Station
                </Label>
            <InputNumber id='basic-number-input' defaultValue={10} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <div>
             <Label className='form-label' for='basic-number-input'>
                 ATM
                </Label>
            <InputNumber id='basic-number-input' defaultValue={10} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <Input type='text' name='distance'  onChange={() => setDistance(event.target.value)}  placeholder='State' />
            </Col>

            <Col md='6' sm='12' className='mb-1'>
            <CardTitle tag='h4'>Encumbrances</CardTitle>
              <div>
               <Label className='form-label' for='basic-number-input'>
                 Our Price
                </Label>
            <InputNumber id='basic-number-input' defaultValue={100} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <div>
             <Label className='form-label' for='basic-number-input'>
                Market Value
                </Label>
            <InputNumber id='basic-number-input' defaultValue={10} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <div>
             <Label className='form-label' for='basic-number-input'>
                 Muncipal Dues
                </Label>
            <InputNumber id='basic-number-input' defaultValue={10} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <div>
             <Label className='form-label' for='basic-number-input'>
                 Any other Dues
                </Label>
            <InputNumber id='basic-number-input' defaultValue={10} upHandler={<Plus />} downHandler={<Minus />} />
             </div>
             <Input type='number' name='encum'  onChange={() => setEncum(event.target.value)}  placeholder='State' />
             </Col>

             <Col sm='12' className='text-center'>
             <Label className='form-label' for='exampleMultipleFileBrowser'>
              Multiple files input
            </Label>
            {/* <Input type='file' id='exampleMultipleFileBrowser' name='MultipleFiles' multiple /> */}
            <Input type="text" onChange={() => setFile(event.target.files[0])} placeholder=' Select File' />

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
