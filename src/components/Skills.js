
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Skills.css";
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
import aws from '../assets/img/aws.svg'
import github from '../assets/img/github.svg'
import docker from '../assets/img/docker.svg'
import vm from '../assets/img/vm.svg'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
  };

  const items = [
    { src: net, name: ".NET" },
    { src: py, name: "Python" },
    { src: cs, name: "C#" },
    { src: js, name: "JavaScript" },
    { src: linux, name: "Linux" },
    { src: react, name: "React" },
    { src: ang, name: "Angular" },
    { src: node, name: "Node.js" },
    { src: az, name: "Azure" },
    { src: mgg, name: "MongoDB" },
    { src: dbsql, name: "SQL" },
    { src: aws, name: "AWS" },
    { src: docker, name: "Docker" },
    { src: github, name: "GitHub" },
    { src: vm, name: "Virtualization" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx" data-aos="fade-up">
              <div className="skill-head">
                <span className="section-kicker">My Stack</span>
                <h2 className="section-title">Skills &amp; Tools</h2>
                <p className="skill-sub">
                  The tech I reach for across backend, cloud, and embedded work.
                </p>
              </div>

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2200}
                transitionDuration={700}
                customTransition="transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"
                arrows={true}
                swipeable={true}
                draggable={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {items.map((it) => (
                  <div className="item" key={it.name}>
                    <div className="skill-tile">
                      <div className="skill-tile-glow"></div>
                      <img src={it.src} alt={it.name} />
                      <span className="skill-tile-name">{it.name}</span>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
