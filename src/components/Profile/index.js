import React from "react"
import Footer from "../Footer"

function Profile() {
    return (
        <div>
            <div className="container" >
                <div className="row">
                    <div className="col-sm-12" id="content">
                        <h2>About Me</h2>
                        <div className="clearfix">
                            <img src="" alt="BigCo Inc. logo" />
                            <p className="first_paragraph">My name is Aman Kumar. Currently working as a Customer Support Representative with Ricoh. I have was born and raised in fiji. Currently im full time working while attending a fun and exciting bootcamp to further expend my skills. So far I have dived deep into world of web development where i have learnt HTML, CSS and Bootstrap. With the skills that i have learnt im making this responsive website as a starter project. I will be making more fun and interactive websites once I have learnt more skills.During my spare time, I really enjoy playing video games, watching movies, reading books listening to music, making lego and more I enjoy my time learning new coding skills. I also enjoy collecting old video games and video game consoles. My favorite console is Nintendo.</p>

                            <p className="second_paragraph"> You can contact me on many of my socials like <a href="https://www.linkedin.com/in/aman-kumar-a47046a9/">LinkedIn</a> <a href="https://github.com/amankmr4">github</a> and also on my <a href="https://www.twitch.tv/amuganx">Twitch</a>. If you have any would like to get in contact with me directly <a href="Contact_1.html">Click Here</a></p>


                        </div>

                    </div>

                </div>
            </div >
            <Footer />
        </div>)
};


export default Profile;
