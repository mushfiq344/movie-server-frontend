import React from "react";
import { now } from "moment";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', description: '', rating: 1, date: (new Date()).toISOString().substr(0, 10) };

        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);

        this.handleDate = this.handleDate.bind(this);

        this.handleRating = this.handleRating.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        this.setState({ name: event.target.value });
    }
    handleDescription(event) {
        this.setState({ description: event.target.value });
    }
    handleDate(event) {
        this.setState({ date: event.target.value });
    }

    handleRating(event) {
        this.setState({ rating: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        alert('A description was submitted: ' + this.state.description);
        alert('A date was submitted: ' + this.state.date);
        event.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <form className="theme-form mega-form" onSubmit={this.handleSubmit}>
                        <div className="card">
                            <div className="card-header">
                                <h5>Create Movie</h5>
                            </div>
                            <div className="card-body">


                                <div className="form-group">
                                    <label className="col-form-label">Name</label>
                                    < input className="form-control" type="text" value={this.state.name} onChange={this.handleName} required />
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Description</label>
                                    < input className="form-control" type="text" value={this.state.description} onChange={this.handleDescription} />
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Date</label>
                                    <input className="form-control" type="date" placeholder="Enter date" onChange={this.handleDate} value={this.state.date} />
                                </div>

                                <div className="form-group">
                                    <label className="col-form-label">Release Date</label>
                                    <input className="form-control" type="date" placeholder="Enter date" value={(new Date()).toISOString().substr(0, 10)} />
                                </div>
                                <hr className="mt-4 mb-4" />

                                <div className="form-group">
                                    <label className="col-form-label">Rating</label>
                                    <input className="form-control" type="number" step="1" value={this.state.rating} onChange={this.handleRating} min="1" max="5" placeholder="Insert Rating " />
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Website</label>
                                    <input className="form-control" type="text" placeholder="Website" />
                                </div>

                                <hr className="mt-4 mb-4" />
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary mr-1">Submit</button>

                            </div>
                        </div>
                    </form>
                </div>

            </div>
            // <form onSubmit={this.handleSubmit} className="form-inline theme-form mt-3 billing-form">
            //     <div className="container">
            //         <div className="row">

            //             <div className="col-12">
            //                 <label className="form-control"> Name: </label>
            //                 < input className="form-control" type="text" value={this.state.name} onChange={this.handleName} />

            //             </div>

            //             <div className="col-12">
            //                 <label className="form-control"> description: </label>
            //                 < input className="form-control" type="text" value={this.state.description} onChange={this.handleDescription} />

            //             </div>
            //             <div className="col-12">

            //                 <input className="form-control" type="submit" value="Submit" />

            //             </div>
            //         </div>

            //     </div>
            // </form >

        );
    }
}

export { Create };
