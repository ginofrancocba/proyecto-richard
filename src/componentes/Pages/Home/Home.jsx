import React from 'react';
import { Layout } from '../../Layout/Layout';

const Home = () => {
      return (
          <Layout>   
            <div>
              <section className='section1'>
                <img class="img-header" src="/img-header2.png" alt="image-richard" ></img>
              </section>
              <section className='section2'>
                <div className='p2-home'>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, culpa animi, aliquamñl kglghñrtjnh gñojtnrh gñjesn vo</p>
                </div>
                <div className='form'>               
                </div>
              </section>
              <section className='section3'>
                <div>
                  <h1>Próximos cursos</h1>
                </div>
                <div>
                  <img class="img-curso" src="/img-curso.jpeg" alt="image-curso" ></img>   
                  <img class="img-libro" src="/img-libro.JPG" alt="image-libro" ></img>
                </div>
              </section>
              <section className='section4'>
                <div className='p4-home'>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, culpa animi, aliquamñl kglghñrtjnh gñojtnrh gñjesn vo</p>
                  <img class="img-home1" src="/img-home1.jpeg" alt="image-richard" ></img>  
                </div>
                <div> 
                             
                </div>
              </section>
            </div>
          </Layout>
      );
  };
  
  export default Home;