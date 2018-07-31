import React, {Component} from 'react';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, } from 'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';
import { withRouter } from "react-router-dom";
import Input from "../../UI/Form/Input/Input";

class ClientForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {};
    }

    handleSubmit(event, errors, values) {
        event.preventDefault();
        // this.setState( {  });

        this.setState({errors, values});
    }

    render() {
        return (
            <div>
                <form>
                    <Input inputType="input" type="text" name="firstName" placeholder="First name"/>
                    <Input inputType="input" type="text" name="lastName" placeholder="Last name"/>
                    <Input inputType="input" type="email" name="email" placeholder="Email"/>
                    <Input inputType="input" type="text" name="carPlate" placeholder="Car plate"/>
                    <Button btnType="Success" clicked={this }> Add Client</Button>
                    <Button onClick={this.props.history.goBack}>Cancel</Button>
                </form>

                {/*<AvForm onSubmit={this.handleSubmit}>*/}
                    {/*<AvGroup>*/}
                        {/*<AvField name="firstName" label="First name" required />*/}
                        {/*<AvInput name="lastName" label="Last name" required />*/}
                        {/*<AvFeedback>This is an error!</AvFeedback>*/}
                    {/*</AvGroup>*/}
                    {/*<AvGroup>*/}
                        {/*<AvField name="email" label="Email"/>*/}
                        {/*<AvFeedback>This is an error!</AvFeedback>*/}
                    {/*</AvGroup>*/}
                    {/*<AvGroup>*/}
                        {/*<AvInput name="carPlate" label="Car Plate"/>*/}
                        {/*<AvFeedback>This is an error!</AvFeedback>*/}
                    {/*</AvGroup>*/}
                    {/*<FormGroup>*/}
                        {/*<Button>Submit</Button>*/}
                        {/*/!*<Button onClick={this.props.history.goBack}>Cancel</Button>*!/*/}
                    {/*</FormGroup>*/}
                {/*</AvForm>*/}
                {/*{this.state.values && <div>*/}
                    {/*<h5>Submission values</h5>*/}
                    {/*Invalid: {this.state.errors.join(', ')}<br />*/}
                    {/*Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>*/}
                {/*</div>}*/}
            </div>
        );
    }
}
export default withRouter(ClientForm)