import React, { Component, createRef } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Collapse,
  CardBody,
  Card,
  Container,
  Row,
  Col
} from "reactstrap";
import imgVenue1 from "../../../src/images/werrington.jpg";
import { getNearestVenue } from "./PostCodeLookup";

export default class PostCode extends Component {
  constructor(...params) {
    super(...params)
    this.inputRef = createRef()
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
    this.handleClick = this.handleClick.bind(this)
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  chooseVenue(userInput) {
    //console.log('INITIAL INPUT', { userInput })
    getNearestVenue(userInput)
    .then(nearestVenue => {
        if (!nearestVenue) {
          alert("Sorry, you are ineligible to sign")
      } else {
          alert("Your nearest venue is " + nearestVenue)
          this.toggle()
        }
      });
  }

  handleClick() {
    this.chooseVenue(this.inputRef.current.value)
    console.log(this.inputRef)
  }


  render() {
    return (
      <div className="p-t-30 p-b-30">
        <InputGroup>
          <InputGroupAddon addonType="prepend"> </InputGroupAddon>
          <Input id="postcode" ref={this.inputRef}  placeholder="Enter your postcode" />
          <InputGroupAddon addonType="append">
            <Button color="secondary" onClick={this.handleClick} >
              Kick Her Out!
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <br />
        
        <div>
          <Collapse isOpen={this.state.collapse}>
            <Container>
              <Row>
                <Col>
                  <Card>
                    <CardBody>
                      <img
                        src={imgVenue1}
                        style={{ width: 500, height: 350 }}
                        alt="venue"
                      />
                      Werrington Library
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardBody>
                      <iframe
                        title="venue map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.2072252188395!2d-0.2775134839955489!3d52.62009923655808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f6b4788e644b%3A0x4d7a3910928462c9!2sWerrington+Library!5e0!3m2!1sen!2suk!4v1552403945174"
                        width={500}
                        height={350}
                        frameborder={0}
                        style={{ border: 0 }}
                        //allowfullscreen
                      />
                      Werrington Library
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Collapse>
        </div>
      </div>
    );
  }
}

//export default PostCode;
