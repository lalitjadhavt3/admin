import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
} from "reactstrap";
import { useState } from "react";
import axios from "axios";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";

const MultipleColumnForm = () => {
  const [bName, setBorrowerName] = useState("");
  const [city, setBorrowerCity] = useState("");
  const [state, setBorrowerState] = useState("");
  const [natureofproperty, setNatureofProperty] = useState("");
  const [areaproperty, setAreaofProperty] = useState("");
  const [uom, setUnitofMeasurement] = useState("");
  const [agebuilding, setAgeofBuilding] = useState("");
  const [floors, setFloors] = useState("");
  const [totalfloors, setTotalFloors] = useState("");
  const [boundarywall, setBoundaryWall] = useState("");
  //const [specifications, setSpecifications] = useState("");
  const [noofbalcony, setBalcony] = useState(0);
  const [noofbathroom, setBathroom] = useState(0)
  const [noofbedroom, setBedroom] = useState(0);

  // const [amenities, setAmenities] = useState("");
  const [lift, setLift] = useState(false);
  const [swimmingpool, setSp] = useState(false);
  const [parkingarea, setPa] = useState(false);
  const [Indoorgames, setIg] = useState(false);

  const [distance_hospital, setDH] = useState(0);
  const [distance_school, setDSchool] = useState(0);
  const [distance_railway, setDRs] = useState(0);
  const [distance_airport, setDAir] = useState(0);
  const [distance_atm, setDAtm] = useState(0);
  //const [distance, setDistance] = useState(0);
  //const [encum, setEncum] = useState("");
  const [ourprice, setOurPrice] = useState(0);
  const [marketvalue, setMarketValue] = useState(0);
  const [muncipaldue, setMuncipalD] = useState(0);
  const [otherdue, setOtherDue] = useState(0);

  const [newimages, setImages] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(boundarywall);


    const formData = new FormData();
    formData.append("borrowername", bName);
    formData.append("borrowercity", city);
    formData.append("borrowerstate", state);
    formData.append("natureofproperty", natureofproperty);
    formData.append("areaproperty", areaproperty);
    formData.append("unitofmeasurement", uom);
    formData.append("ageofbuilding", agebuilding);
    formData.append("areaofproperty", areaproperty);

    formData.append("floors", floors);
    formData.append("totalfloors", totalfloors);
    formData.append("boundarywall", boundarywall);
    //formData.append("specifications",specifications);
    formData.append("noofbalcony", noofbalcony);
    formData.append("noofbathroom", noofbathroom);
    formData.append("noofbedroom", noofbedroom);

    // formData.append("amenities",amenities);
    formData.append("lift", lift);
    formData.append("swimmingpool", swimmingpool);
    formData.append("parkingarea", parkingarea);
    formData.append("Indoorgames", Indoorgames);

    formData.append("distance_hospital", distance_hospital);
    formData.append("distance_school", distance_school);
    formData.append("distance_railway", distance_railway);
    formData.append("distance_airport", distance_airport);
    formData.append("distance_atm", distance_atm);
    //formData.append("distance",distance);
    //formData.append("encum",encum);
    formData.append("ourprice", ourprice);
    formData.append("marketvalue", marketvalue);
    formData.append("muncipaldue", muncipaldue);
    formData.append("otherdue", otherdue);
    for (let i = 0; i < newimages.length; i++) {
      formData.append("prop_images[]", newimages[i]);
    }

    axios({
      method: 'post',
      url: 'https://lalitjadhav.in/adminapi/createProperty.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(function (response) {

      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Add Property</CardTitle>
      </CardHeader>

      <CardBody>
        <Form onSubmit={submitHandler}>
          <Row>
            <Col md="4" sm="12" className="mb-1">
              <Label className="form-label" for="nameMulti">
                Borrower Name
              </Label>
              <Input
                type="text"
                name="borrowername"
                onChange={(e) => setBorrowerName(e.target.value)}
                placeholder="Borrower Name"
              />
            </Col>

            <Col md="4" sm="12" className="mb-1">
              <Label className="form-label" for="nameMulti">
                City
              </Label>
              <Input
                type="text"
                name="borrowercity"
                onChange={(e) => setBorrowerCity(e.target.value)}
                placeholder="City"
              />
            </Col>

            <Col md="4" sm="12" className="mb-1">
              <Label className="form-label" for="nameMulti">
                State
              </Label>
              <Input
                type="text"
                name="borrowerstate"
                onChange={(e) => setBorrowerState(e.target.value)}
                placeholder="State"
              />
            </Col>

            <Col md="4" sm="12" className="mb-1">
              <Label className="form-label" for="select-basic">
                Nature of Property
              </Label>
              <Input
                type="select"
                name="natureofproperty"
                onChange={(e) => setNatureofProperty(e.target.value)}
              >
                <option value="flat">Flat</option>
                <option value="land">Land</option>
                <option value="house">House</option>
                <option value="office">Office</option>
                <option value="shop">Shop</option>
                <option value="other">Other</option>
              </Input>
              {/* <Input type='select' name='natureofproperty'  onChange={(e) => setNatureofProperty(e.target.value)}  placeholder='Nature of Property'/> */}
            </Col>

            <Col md="4" sm="12" className="mb-1">
              <Label className="form-label" for="nameMulti">
                Area of Property
              </Label>
              <Input
                type="number"
                name="areaofproperty"
                onChange={(e) => setAreaofProperty(e.target.value)}
                placeholder="Area of Property"
              />
            </Col>

            <Col md="4" sm="12" className="mb-1">
              <Label className="form-label" for="select-basic">
                Unit of Measurement
              </Label>
              <Input
                type="select"
                name="unitofmeasurement"
                onChange={(e) => setUnitofMeasurement(e.target.value)}
              >
                <option value="sqft">SqFt</option>
                <option value="sqmtr">SqMtr</option>
                <option value="yard">Yard</option>
                <option value="guntha">Guntha</option>
                <option value="other">Other</option>
              </Input>
              {/* <Input type='text' name='unitofmeasurement'  onChange={(e) => setUnitofMeasurement(e.target.value)}  placeholder='State' /> */}
            </Col>

            <Col md="4" sm="12" className="mb-1">
              <Label className="form-label" for="nameMulti">
                Age of Building
              </Label>
              <Input
                type="number"
                name="ageofbuilding"
                onChange={(e) => setAgeofBuilding(e.target.value)}
                placeholder="Age of Building
                "
              />
            </Col>

            <Col md="4" sm="12" className="mb-1">
              <Label className="form-label" for="nameMulti">
                Floors
              </Label>
              <Input
                type="number"
                name="floors"
                onChange={(e) => setFloors(e.target.value)}
                placeholder="Floors"
              />
            </Col>

            <Col md="4" sm="12" className="mb-1">
              <Label className="form-label" for="nameMulti">
                Total no of Floors
              </Label>
              <Input
                type="number"
                name="totalfloors"
                onChange={(e) => setTotalFloors(e.target.value)}
                placeholder="Total no of Floors"
              />
            </Col>

            <Col md="6" sm="12" className="mb-1">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Boundary Wall</CardTitle>
                </CardHeader>
                <CardBody>

                  <div className="demo-inline-spacing">
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active"
                        name="ex1"
                        value={'yes'}
                        required
                        onChange={(e) => setBoundaryWall(e.target.value)}
                      />
                      <Label className="form-check-label" for="ex1-active">
                        Yes
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input type="radio" name="ex1" id="ex1-inactive" required value={'no'}
                        onChange={(e) => setBoundaryWall(e.target.value)} />
                      <Label className="form-check-label" for="ex1-inactive">
                        No
                      </Label>
                    </div>
                  </div>

                </CardBody>
              </Card>
              {/* <Input type='text' name='boundarywall'  onChange={(e) => setBoundaryWall(e.target.value)}  placeholder='State' /> */}
            </Col>

            <Col md="6" sm="12" className="mb-1">
              <CardHeader>
                <CardTitle tag="h5">Specifications</CardTitle>
              </CardHeader>
              <div className="demo-inline-spacing">
                <div>
                  <Label className="checkbox-inline" for="min-max-number-input">
                    No of Bedrooms
                  </Label>
                  <InputNumber
                    min={0}
                    max={20}
                    defaultValue={0}
                    upHandler={<Plus />}
                    downHandler={<Minus />}
                    onChange={value => setBedroom(value)}
                  />
                </div>
                <div>
                  <Label className="checkbox-inline" for="min-max-number-input">
                    No of Bathrooms
                  </Label>
                  <InputNumber
                    min={0}
                    max={20}
                    defaultValue={0}
                    upHandler={<Plus />}
                    downHandler={<Minus />}
                    onChange={value => setBathroom(value)}
                  />
                </div>
                <div>
                  <Label className="checkbox-inline" for="min-max-number-input">
                    No of Balcony
                  </Label>
                  <InputNumber
                    min={0}
                    max={20}
                    defaultValue={0}
                    upHandler={<Plus />}
                    downHandler={<Minus />}
                    onChange={value => setBalcony(value)}
                  />
                </div>
              </div>
              {/* <Input type='text' name='specifications'  onChange={(e) => setSpecifications(e.target.value)}  placeholder='State' /> */}
            </Col>

            <Col md="12" sm="12" className="mb-1">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Amenities</CardTitle>
                </CardHeader>
                <CardBody>

                  <div className="demo-inline-spacing">
                    <div className="form-check form-check-inline">
                      <Input
                        type="checkbox"



                        onChange={(e) => setLift(e.target.value)}
                      />
                      <Label
                        for="basic-cb-checked"
                        className="form-check-label"

                      >
                        Lift
                      </Label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Input type="checkbox"
                        onChange={(e) => setSp(e.target.value)} />
                      <Label
                        for="basic-cb-unchecked"
                        className="form-check-label"

                      >
                        Swimming Pool
                      </Label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Input type="checkbox" onChange={(e) => setIg(e.target.value)} />
                      <Label
                        for="basic-cb-unchecked"
                        className="form-check-label"

                      >
                        Indoor Game
                      </Label>
                    </div>

                    <div className="form-check form-check-inline">
                      <Input type="checkbox" onChange={(e) => setPa(e.target.value)} />
                      <Label
                        for="basic-cb-unchecked"
                        className="form-check-label"

                      >
                        Parking Area
                      </Label>
                    </div>
                  </div>

                </CardBody>
              </Card>
              {/* <Input type='text' name='amenities'  onChange={(e) => setAmenities(e.target.value)}  placeholder='State' /> */}
            </Col>

            <Col md="6" sm="12" className="mb-1">
              <CardHeader>
                <CardTitle tag="h4">Distance from key Facility</CardTitle>
              </CardHeader>

              <Label className="form-label" for="nameMulti">
                Hospital
              </Label>
              <Input
                type="text"
                name="distance"
                onChange={(e) => setDH(e.target.value)}
              />
              <Label className="form-label" for="nameMulti">
                School
              </Label>
              <Input
                type="text"
                name="distance"
                onChange={(e) => setDSchool(e.target.value)}
              />
              <Label className="form-label" for="nameMulti">
                Railway Station
              </Label>
              <Input
                type="text"
                name="distance"
                onChange={(e) => setDRs(e.target.value)}
              />
              <Label className="form-label" for="nameMulti">
                Airport
              </Label>
              <Input
                type="text"
                name="distance"
                onChange={(e) => setDAir(e.target.value)}
              />
              <Label className="form-label" for="nameMulti">
                ATM
              </Label>
              <Input
                type="text"
                name="distance"
                onChange={(e) => setDAtm(e.target.value)}
              />
            </Col>

            <Col md="6" sm="12" className="mb-1">
              <CardHeader>
                <CardTitle tag="h4">Encumbrances</CardTitle>
              </CardHeader>
              <Label className="form-label" for="nameMulti">
                Our Price
              </Label>
              <Input
                type="number"
                name="ourprice"
                onChange={(e) => setOurPrice(e.target.value)}
              />
              <Label className="form-label" for="nameMulti">
                Market Value
              </Label>
              <Input
                type="text"
                name="marketvalue"
                onChange={(e) => setMarketValue(e.target.value)}
              />
              <Label className="form-label" for="nameMulti">
                Muncipal Dues
              </Label>
              <Input
                type="text"
                name="muncipaldue"
                onChange={(e) => setMuncipalD(e.target.value)}
              />
              <Label className="form-label" for="nameMulti">
                Any Other Dues
              </Label>
              <Input
                type="text"
                name="otherdue"
                onChange={(e) => setOtherDue(e.target.value)}
              />

              {/* <Input type='number' name='encum'  onChange={(e) => setEncum(e.target.value)}  placeholder='State' /> */}
            </Col>

            <Col sm="12" className="text-center">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Input File</CardTitle>
                </CardHeader>

                <CardBody>
                  <Row>
                    <Col md="6" sm="12">
                      <Label className="form-label" for="inputFile">
                        Select Multiple Images (600x400 px. max 5mb per image)
                      </Label>
                      <Input type="file" multiple id="inputFile" name="images" onChange={(e) => setImages(e.target.files)} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col sm="12" className="text-center">
              <div className="d-flex">
                <Button className="me-1" color="success" type="submit">
                  Submit
                </Button>
                <Button outline color="secondary" type="reset">
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};
export default MultipleColumnForm;
