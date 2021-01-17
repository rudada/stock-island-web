import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBPopover, MDBPopoverBody,
MDBPopoverHeader, MDBTooltip } from 'mdbreact';


class ModalPage extends Component {
state = {
  modal15: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(15)}>MDBModal</MDBBtn>
        <MDBModal isOpen={this.state.modal15} toggle={this.toggle(15)}>
          <MDBModalHeader toggle={this.toggle(15)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            This
            <MDBPopover component="button" placement="right" popoverBody="button" tag="span" className="btn btn-secondary">
              <MDBPopoverHeader>MDBPopover title</MDBPopoverHeader>
              <MDBPopoverBody>MDBPopover body content is set in this attribute.</MDBPopoverBody>
            </MDBPopover>
            triggers a popover on click.
            <hr />
            <MDBTooltip placement="top" tag="a" component="span" tooltipContent="MDBTooltip">
              This link
            </MDBTooltip>
            and
            <MDBTooltip placement="top" tag="a" component="span" tooltipContent="MDBTooltip">
              that link
            </MDBTooltip>
            have tooltips on hover.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(15)}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;