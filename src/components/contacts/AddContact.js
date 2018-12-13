import React, { Component } from "react";

class AddContact extends Component {

    state = {
        name: "",
        email: "",
        phone: ""
    }

    onChange = e => this.setState({
        [e.target.name] : e.target.value
    })

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div className="card mb-3">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form onSubmit = {this.onSubmit}>
                            <div className="form-group">

                                <label htmlFor="name">Name</label>
                                <input
                                    onChange = {this.onChange}
                                    type="text"
                                    name="name"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Name"
                                />

                                <label htmlFor="email">Email</label>
                                <input
                                    onChange = {this.onChange}
                                    type="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email"
                                />

                                <label htmlFor="phone">Phone</label>
                                <input
                                    onChange = {this.onChange}
                                    type="text"
                                    name="phone"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Phone"
                                />

                            </div>
                            <input type="submit" value="Add Contact" className = "btn btn-block btn-success"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default AddContact;