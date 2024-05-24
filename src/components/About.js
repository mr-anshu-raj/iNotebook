import React from 'react'

const About = () => {
    return (
        <div>
            <div className="media">
                {/* <img className="align-self-center mr-3" src={""} alt="Generic placeholder image" /> */}
                <div className="media-body">
                    <h5 className="mt-0">About iNotebook</h5>
                    <p>This is an online notebook web application to store your personal notes online. This website is made with Reactjs and Bootstrap. The backened service used in this website is MongoBD.</p>
                    <p className="mb-0">All your data is stored securely and no-one see and modify your notes other than yourself.</p>
                </div>
            </div>
        </div>
    )
}

export default About