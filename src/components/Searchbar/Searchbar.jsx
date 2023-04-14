import { Component } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Field, Form, Formik, LabelSubmit, Submit, Wrapper } from "./Searchbar.styled";

class Searchbar extends Component {

    state = {
        valueQuery: '',
    };

    handleField = e => {
        const valueQuery = e.currentTarget.value;
        this.setState({ valueQuery });
    };

    handleSubmit = () => {
        const { valueQuery } = this.state;
        const { onSubmit } = this.props;

        const normalizedValueQuery = valueQuery.toLocaleLowerCase();

        onSubmit(normalizedValueQuery);
        this.setState({ valueQuery: '', });

    };

    render () {
        const { valueQuery } = this.state;

        return (
            <Wrapper>
                <Formik 
                initialValues={{
                    query: '',
                  }} 
                onSubmit={this.handleSubmit} >
                    <Form>
                        <Submit type="submit">
                            <BiSearchAlt size="2em" />
                            <LabelSubmit>Search</LabelSubmit>
                        </Submit>
                        <Field  
                            type="text"
                            name="query"
                            value={valueQuery}
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos" 
                            onChange={this.handleField}
                        />
                    </Form>
                </Formik>
            </Wrapper>
        );
    };
};

export default Searchbar;
