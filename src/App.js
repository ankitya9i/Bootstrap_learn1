import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navbar/nav'
import SimpleImageSlider from "react-simple-image-slider";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const images = [
  { url: "https://uploads-ssl.webflow.com/5fa2f1a99eac342b40a20eef/5fa9a825aebd095da532e105_RCM_Forefront%20of%20sustainability.jpg"},
  { url: "https://blog.saginfotech.com/wp-content/uploads/2017/08/e-waste.jpg" },
  { url: "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/2428/2016/08/plastics-from-e-waste-from-national-geographic-photographer.jpg" },

];
const imag=["https://media.gettyimages.com/photos/hand-holding-recycle-symbol-on-green-bokeh-background-eco-and-save-picture-id1023963786",
'https://media.gettyimages.com/photos/electronics-waste-bin-concept-garbage-electrical-waste-ready-for-old-picture-id1188193159',
'https://li-cycle.com/wp-content/uploads/2020/10/1-s2.0-S2589004220302662-fx1_lrg_tyqab8.jpg']
const content=["Recycling is the process of converting waste materials into new materials and objects. This concept often includes the recovery of energy from waste materials. The recyclability of a material depends on its ability to reacquire the properties it had in its original state. It is an alternative to conventional waste disposal that can save material and help lower greenhouse gas emissions. It can also prevent the waste of potentially useful materials and reduce the consumption of fresh raw materials, reducing energy use, air pollution and water pollution.","Electronic waste or e-waste describes discarded electrical or electronic devices. It is also commonly known as waste 'electrical and electronic equipment or end-of-life electronics. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered e-waste. Informal processing of e-waste in developing countries can lead to adverse human health effects and environmental pollution. The growing consumption of electronic goods due to the digital revolution and innovations in science and technology, such as bitcoin, has led to a global e-waste problem and hazard. The rapid exponential increase of e-waste is due to frequent new model releases and unnecessary purchases of electrical and electronic equipment, short innovation cycles and low recycling rates, and a drop in the average life span of computers.",
"Battery recycling is a recycling activity that aims to reduce the number of batteries being disposed as municipal solid waste. Batteries contain a number of heavy metals and toxic chemicals and disposing of them by the same process as regular household waste has raised concerns over soil contamination and water pollution.[1]"];
const titles=["why do we need recycling ","Recycling Process of e waste","Recycing process of lli batteries"]
function App() {
  return (
    <div className="App">
      <Nav />
      <div className='cointainer'>
      <SimpleImageSlider 
        width={"100vw"}
        height={"60vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={0.9}
      />
      </div>     
    <div class="centered">
      <span>Recycling </span>
      <h1>For Better Future</h1>
          </div>
  
      <div className='cards'>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx} xs={12} sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src={imag[idx]} />
            <Card.Body>
              <Card.Title>{titles[idx]}</Card.Title>
              <Card.Text>
              {content[idx]}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </div>
      <footer className='footer' id='bottom'>
      <div className='foot1'>
      contact Us:
      <div>
      director@remine.in
      </div>
      </div>
      <div className='foot2'>
        <a className='logo1'>
        <InstagramIcon fontSize="large" />
        
        </a>
       <a className='logo1'>
       <FacebookIcon fontSize="large"/>
       </a>
      <a className='logo1'>
      <LinkedInIcon fontSize="large"/>
      </a>
      </div>
      </footer>
    </div>
    
   
  );
}

export default App;
