import React, { Component } from 'react';
import GitCard from './GitCard'
class GithubSearch extends Component {
    constructor() {
        super();

        this.state = {
            searchText: "",
            user: null
        }
    }

    handleSearch = () => {
        // console.log(this.state.searchText)
        let username = this.state.searchText;
        let url = `https://api.github.com/users/${username}`;
        // console.log(url);
        fetch(url).then(response => {
            var promise = response.json();
            promise.then(data => {
                this.setState({
                    user: data
                })
            })
        })
    }

    handleEvent = (event) => {
        this.setState({ searchText: event.target.value })
    }


    render() {

        return (
            <div style={{backgroundColor:'grey',minHeight:'657px'}}>
                <div className='container'>
                    <div style={{ borderRadius: "10px" }} className='bg-dark d-flex justify-content-center py-3'>
                        <input placeholder='enter Username' className='form-control w-50' type="text" onChange={this.handleEvent} id="search-value" />
                        <button className='btn btn-danger' onClick={this.handleSearch}>Search</button>
                    </div>
                    <div className='text-center'>
                        {this.state.user == null ? <h1 className='display-4 text-white' style={{ marginTop: '20%' }}>Enter username of Github profile</h1> : <GitCard data={this.state.user} />}

                    </div>
                </div>
            </div>
        );

    }
}

export default GithubSearch;