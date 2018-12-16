import React, { Component } from 'react';
import { Alert, CustomInput, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
class Answers extends Component {
  onClick = event => {
    let box = document.getElementById(event.target.id);
    // alert(event.target.id + ' ' + box.checked);
    this.props.setCheckBoxTrueHandler(event.target.id, box.checked);
  };
  render() {
    return (
      <div>
        {this.props.answersHandler.map((answer, index) => {
          return (
            <FormGroup check key={answer.id}>
              <Label check className="col-12">
                {this.props.checkBoxEnabled === 'enabled' ? (
                  <div className="row">
                    <CustomInput
                      className=""
                      type="checkbox"
                      id={answer.id}
                      onClick={this.onClick}
                    />
                    <Alert color="dark" className="col-10 ml-4">
                      {answer.answer}
                    </Alert>
                  </div>
                ) : (
                  <div className="row">
                    <CustomInput
                      className=""
                      type="checkbox"
                      id={answer.id}
                      disabled
                      checked={this.props.answer[index].result}
                    />

                    <Alert
                      color={answer.result ? 'success' : 'danger'}
                      className="col-10 ml-4"
                    >
                      {answer.answer}
                    </Alert>
                  </div>
                )}
              </Label>
            </FormGroup>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  answer: state.reducer1.answer
});
export default connect(
  mapStateToProps,
  null
)(Answers);
