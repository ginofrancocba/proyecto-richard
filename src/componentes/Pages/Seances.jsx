import React from 'react';

const Seances = () => {
      return (
        <>
         <section className="section1-seance">
        <div>
        <h1>SEANCES...</h1>
        <h2 className='h2-seances'>Ce que nous analysons lors de la consultation:</h2>
        </div>
        </section>
       <section className="section2-seance">
         <div className='section2-seance'>
        <img className="img-seances1" src="/img-home1.jpeg" alt="imagen-richard" />
          <p className='p1-seances'>Rendez-vous gratuit de 30mn nést pas une consultation mais un échange mutel afin de verifier ensemble si une formation en 
            Numerologie vous serait profitable sur le plan professionnel et personnel. Je vous donnerai les grands axes de votre date 
            de naissance et des conseils personnalisés qui vous aideront à prendre votre place. Quelle que soit la raison de votre appel,
            nous verrons ensemble comment la Numérologie c'est faire le choix d'une mèthode simple, accessible, efficate et rapide. </p>
        </div>
        </section>
        </>
      )
  };
  
  export default Seances;