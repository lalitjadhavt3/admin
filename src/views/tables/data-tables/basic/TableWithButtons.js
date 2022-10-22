// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { data } from '../data';
// ** Table Data & Columns
import { useEffect } from 'react'
// ** Add New Modal Component
import AddNewModal from './AddNewModal'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus, Avatar } from 'react-feather'
import axios from 'axios';
// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledButtonDropdown
} from 'reactstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef((props, ref) => (
  <div className='form-check'>

  </div>
))
var iframes = document.querySelectorAll('iframe');
for (var i = 0; i < iframes.length; i++) {
  iframes[i].parentNode.removeChild(iframes[i]);
}
const DataTableWithButtons = () => {
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([]);
  const [data2, setData] = useState({});
  const columns = [
    {
      name: 'ID',
      sortable: true,
      maxWidth: '100px',
      selector: row => row.id
    },
    {

      name: 'Image',
      maxWidth: '150px',
      sortable: row => row.borrowername,
      cell: row => (
        <div className='d-flex align-items-center'>

          <img src={row.image} style={{ width: '100px' }} />


        </div>
      )

    },
    {

      name: 'Name',

      sortable: row => row.borrowername,
      cell: row => (
        <div className='d-flex align-items-center'>

          <div className='user-info text-truncate ms-1'>
            <span className='d-block fw-bold text-truncate'>{row.borrowername}</span>

          </div>
        </div>
      )

    },
    {

      name: 'City',

      sortable: row => row.borrowercity,
      cell: row => (
        <div className='d-flex align-items-center'>

          <div className='user-info text-truncate ms-1'>
            <span className='d-block fw-bold text-truncate'>{row.borrowercity}</span>

          </div>
        </div>
      )

    },
    {

      name: 'Nature of Property',

      sortable: row => row.natureofproperty,
      cell: row => (
        <div className='d-flex align-items-center'>

          <div className='user-info text-truncate ms-1'>
            <span className='d-block fw-bold text-truncate'>{row.natureofproperty}</span>

          </div>
        </div>
      )

    },
    {

      name: 'Area',

      sortable: row => row.areaproperty,
      cell: row => (
        <div className='d-flex align-items-center'>

          <div className='user-info text-truncate ms-1'>
            <span className='d-block fw-bold text-truncate'>{row.areaproperty} [{row.unitofmeasurement}] </span>

          </div>
        </div>
      )

    },
    {

      name: 'Actions',

      sortable: row => row.areaproperty,
      cell: row => (
        <div className='d-flex align-items-center'>

          <div className='user-info text-truncate ms-1'>
            <a href={"editproperty/" + row.id} type='button' className='btn btn-info '>Edit</a>
          </div>
        </div>
      )

    },



  ];
  useEffect(() => {
    async function getToken() {
      axios.get('https://lalitjadhav.in/adminapi/getProperty.php').then(response => {
        setData(response.data['data']);

      })
    }
    getToken();
  }, [])



  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    const status = {
      1: { title: 'Current', color: 'light-primary' },
      2: { title: 'Professional', color: 'light-success' },
      3: { title: 'Rejected', color: 'light-danger' },
      4: { title: 'Resigned', color: 'light-warning' },
      5: { title: 'Applied', color: 'light-info' }
    }

    if (value.length) {
      updatedData = data2.filter(item => {

        const startsWith =
          item.borrowername.toLowerCase().startsWith(value.toLowerCase()) ||
          item.id.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.borrowername.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? Math.ceil(filteredData.length / 7) : Math.ceil(data.length / 7) || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      nextLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextClassName='page-item next-item'
      previousClassName='page-item prev-item'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
    />
  )

  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(data[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach(item => {
      let ctr = 0
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement('a')
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    link.click()
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Property List</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            <UncontrolledButtonDropdown>
              <DropdownToggle color='secondary' caret outline>
                <Share size={15} />
                <span className='align-middle ms-50'>Export</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100'>
                  <Printer size={15} />
                  <span className='align-middle ms-50'>Print</span>
                </DropdownItem>
                <DropdownItem className='w-100' onClick={() => downloadCSV(data)}>
                  <FileText size={15} />
                  <span className='align-middle ms-50'>CSV</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Grid size={15} />
                  <span className='align-middle ms-50'>Excel</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <File size={15} />
                  <span className='align-middle ms-50'>PDF</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Copy size={15} />
                  <span className='align-middle ms-50'>Copy</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>

          </div>
        </CardHeader>
        <Row className='justify-content-end mx-0'>
          <Col className='d-flex align-items-center justify-content-end mt-1' md='4' sm='12'>
            <Label className='me-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter mb-50'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <div className='react-dataTable'>
          {console.log(data)}
          {console.log(data2)}
          {data2.length > 0 && (<DataTable
            noHeader
            pagination
            selectableRows
            columns={columns}
            paginationPerPage={7}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
            paginationDefaultPage={currentPage + 1}
            paginationComponent={CustomPagination}
            data={searchValue.length ? filteredData : data2}
            selectableRowsComponent={BootstrapCheckbox}
          />)}
        </div>
      </Card>
      <AddNewModal open={modal} handleModal={handleModal} />
    </Fragment>
  )
}

export default DataTableWithButtons
