/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React from "react"
import Project from "./Projects"
import './App.css';


function ProjectCards() {
    return (
        <div class="container" id="content">
            <div class="row">

                {Project.map((each, i) => (<div class="col-md-4 card-container text-center" id={i}>
                    <div class="card-flip ml-4 mt-2">
                        <div class="card front">
                            <div class="card-body">

                                <h5 class="card-title">{each.title}</h5>
                                <img src={each.photo} class="card-img-top" alt="..."
                                    style={{ height: "150px", width: "200px", margin: 0 }} />
                            </div>
                        </div>
                        <div class=" card back">
                            <div class="card-body" style={{ margin: "auto" }}>
                                <ul class="list-group list-group-flush product-details">
                                    <li class="list-group-item">{each.title}</li>
                                    <li class="list-group-item"><a href={each.website}>
                                        Link To The Website</a>
                                    </li>
                                    <li class="list-group-item "><a
                                        href={each.website}>Link To The Github
                    Repository</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>))}





            </div>
        </div>


    )
}

export default ProjectCards;