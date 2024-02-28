import Eu from '../../assets/Eu.png'

const About = () => {
    return (
      <div className="hero min-h-screen bg-1A1A1A">
          <div className="hero-content flex-col lg:flex-row">
              <img src={Eu} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                  <h1 className="text-5xl font-bold">Desenvolvedor Back-end</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn btn-primary">Fale comigo!</button>
              </div>
          </div>
      </div>
    );
  }
  
  export default About;
  
