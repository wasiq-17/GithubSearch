import React from 'react';
const GitCard = (props) => {
    return (
        <div  className='mt-4' >
            <div className="card m-auto" style={{width:'18rem'}} >
                <img className="card-img-top" src={props.data.avatar_url} alt=" Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">USER-ID: {props.data.login}</h5>
                        <p className="card-text">Created at : {props.data.created_at}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">URL : {props.data.html_url}</li>
                        <li className="list-group-item">No of Repos : {props.data.public_repos}</li>
                        <li className="list-group-item">Last Updated at : {props.data.updated_at}</li>
                    </ul>
                    <div className="card-body">
                        <a href={props.data.html_url} className="card-link">Visit to Profile</a>
                        
                    </div>
            </div>
        </div>
     );
}
 
export default GitCard;