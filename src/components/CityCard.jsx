import BuyButton from './BuyButton';

const data = {
  image: '/img/Ny.jpg',
  city: 'New York',
  date: 'Fri 27 Nov 2016',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
};

function CityCard(props) {
  return (
    <div className='city-card'>
      <img className='city-img' src={props.image} alt='' />
      <div className='card-text'>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <BuyButton />
      </div>
    </div>
  );
}

export default CityCard;
