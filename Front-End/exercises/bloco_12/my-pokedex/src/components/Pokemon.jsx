import React from 'react';

class Pokemon extends React.Component {
    render(){
        const { pokemon: { name, type, averageWeight:{ value, measurementUnit }, image} } = this.props;
        return (
            <section className='pokeBox'>
                <div className='textContent'>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>Avarage weight: {value} {measurementUnit}</p>
                </div>
                <div className='image'>
                    <img src={image} alt={name}/>
                </div>
            </section>
        )
    }
}

export default Pokemon;
