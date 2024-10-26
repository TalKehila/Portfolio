
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import py from '../assets/img/py.svg'
import cs from '../assets/img/cs.svg'
import linux from '../assets/img/linux.svg'
import js from '../assets/img/js.svg'
import react from '../assets/img/react.svg'
import ang from '../assets/img/angular.svg'
import node from '../assets/img/node.svg'
import net from '../assets/img/dotnet.svg'
import az from '../assets/img/az.svg'
import mgg from '../assets/img/mongo.svg'
import dbsql from '../assets/img/dbsql.svg'









export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Experienced backend developer skilled in C#, .NET, Python, JavaScript, and Node.js.  in React, and Angular.<br></br> Expertise in Azure, SQL, NoSQL, and MongoDB. Continually learning networking, Linux, and virtualization (Kubernetes, Docker).</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={net} alt="Image" />
                 
                </div>
                <div className="item">
                  <img src={py} alt="Image" />
                  {/* <h5>Cloud Servies & Data Bases</h5> */}
                </div>
                <div className="item">
                  <img src={cs} alt="Image" />
                  {/* <h5>Frontend Development</h5> */}
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  {/* <h5>Web Development</h5> */}
                </div>
                <div className="item">
                  <img src={linux} alt="Image" />
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                </div>
                <div className="item">
                  <img src={ang} alt="Image" />
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                </div>
                <div className="item">
                  <img src={az} alt="Image" />
                </div>
                <div className="item">
                  <img src={mgg} alt="Image" />
                </div>
                <div className="item">
                  <img src={dbsql} alt="Image" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
