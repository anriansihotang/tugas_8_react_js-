import React, { Component } from "react";
import { Container ,Row,DropdownButton,
	Col ,Dropdown,Image,
	Breadcrumb,Carousel,ListGroup,
	Button,Modal,Form,InputGroup,Figure,FormControl} from "react-bootstrap";
	
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			setShow: false
		}
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}
	handleOpen(){
		this.setState({ setShow: true });
	}
	handleClose(){
		this.setState({ setShow: false });
	}
	handleSave(){
		this.setState({ setShow: false });
		alert("Saved Succesfully")
	}
	render() {
		return ( 
		<Container fluid>
			<Row className="bg-dark">
				<Col md={2}>
					<Dropdown>
						<DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
							<Dropdown.Item href="/">Indonesia</Dropdown.Item>
							<Dropdown.Item href="/">English</Dropdown.Item>
						</DropdownButton>
					</Dropdown>
				</Col>
				<Col md={{ span: 2, offset: 8 }}>
					<Image className="d-flex mx-auto" src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" roundedCircle width={50} ></Image>
					<p className="text-light text-center">Alan Saputra</p>
				</Col>
			</Row>
			<br/>
			<Row >
				<Col md={{span:2,offset:10}}>
					<Breadcrumb className="bg-light">
						<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
						<Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
						<Breadcrumb.Item href="#" active>Bola</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
			</Row>
			<Row>
				<Col md={7} className="mx-auto">
				<Carousel>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
					alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
					alt="Second slide"
					/>

					<Carousel.Caption>
					<h3>Neymar Mendiskusikan Perpanjangan Kontrak Dengan PSG</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
					alt="Third slide"
					/>

					<Carousel.Caption>
					<h3>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h3>
					</Carousel.Caption>
				</Carousel.Item>
				</Carousel>
				</Col>
			</Row>
			<br/>
			<Row>
				<Col md={2}>
					<ListGroup>
					<ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
					<ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
					<ListGroup.Item>Divisi Primera</ListGroup.Item>
					<ListGroup.Item>Serie A</ListGroup.Item>
					<ListGroup.Item>Bundles Liga</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col className="Jumbotron p-5 mb-4 bg-light rounded-3" md={6}>
					<h1>DIVISI PRIMERA</h1>
					<p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
					<Button>Read More</Button>
				</Col>
				<Col className="ml-1">
          <Figure className="w-100 text-center">
            <Figure.Image
              roundedCircle
              src="https://www.pngitem.com/pimgs/m/111-1114675_user-login-person-man-enter-person-login-icon.png"
              width={50}
              height={50}
              alt="Image"
            />
            <h6 className="text-center">Silahkan Login</h6>
          </Figure>
          <Form>
            <InputGroup>
              <FormControl
                placeholder="Masukan Email"
                type="email"
              />
            </InputGroup>
            <br></br>
            <InputGroup>
              <FormControl
                placeholder="Password"
                type="password"
              />
            </InputGroup>
            <br></br>
            <InputGroup>
              <Form.Check
              type="checkbox"
              label="Term & Condition"
              />
            </InputGroup>
            <br></br>
            <Button varian="primary" onClick={this.handleOpen}>Login</Button>

            <Modal show={this.state.setShow} onHide={this.handleClose}>
              <Modal.Header closeButton>
                Login
              </Modal.Header>
              <Modal.Body>
                Anda Berhasil Login
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                <Button variant="primary" onClick={this.handleSave}>Save Username & Password</Button>
              </Modal.Footer>
            </Modal>

          </Form>
        </Col>
			</Row>
		</Container>
		);
	}
}

export default App;
