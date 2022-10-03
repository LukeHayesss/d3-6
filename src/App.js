import './App.css';
import { useData } from './useData';
import { Marks } from './Marks';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { SideBar } from './SideBar';
import { FaGlobe } from 'react-icons/fa';
const width = 960;
const height = 500;

function App() {
  const data = useData();

  if (!data) {
   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" rel="stylesheet" />
   return <pre className='text'>Loading...</pre>;
  }

  return (
    <>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" rel="stylesheet"/>
    <Container fluid className='star bg-black'>
      <Row>
        <Col xs={1}><SideBar/></Col>
        <Col xs lg="12" className="text-center">
          <svg width="80vw" height="100vh" viewBox='40 0 900 500' className='d-block m-auto'>
            <Marks
            data={data}
            />
          </svg>
        </Col>
      </Row>
 
      <Navbar style={{ backgroundColor: '#ededed', fontSize: 'large', fontWeight: '800'}} fixed="bottom">
        <Container style={{ justifyContent: 'center'}} className="m-auto">
          <Row>
            <Col lg='12' className='m-auto text-center'>
              <Navbar.Brand>
                <a href='https://www.currentlyhq.com'>
                <FaGlobe
                width='30'
                height='30'
                className='d-inline-block align-top'
                /></a>{' '}Global Extremes</Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>

    </Container>
    </>
  );
}

export default App;
