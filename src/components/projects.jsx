function Projects(){
    return(
        <div id="project-back"> 
            <div id="proj-cont"><a href="#" id="Portfolio"></a>
            <div className="project-parentDiv">
                <div className="project-1   ">
                    <div className="project-img">
                    <a href="https://www.example.com">
                        <img className="img-project"  src="/src/assets/rsz_6536f7a0b2700.png"/>
                    </a>
                    </div>
                    <div className="project-description"><p>Header </p>
                        <h3>React Dashboard</h3>
                        <p>Data Dashboard Built using React Functional Components, Props and Material UI.</p>
                        <a href="https://www.example.com">Click here to visit Example.com</a>
                    </div>
                </div>
                <div className="project-1">
                    <div className="project-img">
                    <img className="img-project" src="/src/assets/2 ezgif-5-1ba6ea9c67.gif"/>
                    </div>
                    <div className="project-description">
                        <h3>Dynamic Image Weather App</h3>
                        <p>Weather app that displays dynamic images based correlating to weather patterns Fullstack weather app. Built using API JavaScript Fetch method.
                        </p>
                    </div>
                </div>
                <div className="project-1"> 
                    <div className="project-img">
                        {/* <img></img> */}
                    </div>
                    <div className="project-description">
                        <h3 className="rebelh3">Meh</h3>
                        <p>Lorem Ipsum jekajade lo si ode. Iwo na mo wipe mo feran re.
                            Inu mi ma tutu ti o ba sowipe o nbo wa si odo mi.
                        </p>
                    </div>
                </div>
                <div className="project-1">
                    <div className="project-img">
                        {/* <img></img> */}
                    </div>
                    <div className="project-description">
                        <h3>Meh</h3>
                        <p>Lorem Ipsum jekajade lo si ode. Iwo na mo wipe mo feran re.
                            Inu mi ma tutu ti o ba sowipe o nbo wa si odo mi.
                        </p>
                    </div>
                </div>
                
            </div>    
            </div>
        </div>

    )
}

export default Projects;
