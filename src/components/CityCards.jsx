import CityCard from './CityCard';

const traveLData = [
  { title: 'New York', image: '/img/Ny.jpg', date: '2018-06-12' },
  { title: 'Paris', image: '/img/paris.jpg', date: '2019-05-13' },
  { title: 'San Francisco', image: '/img/tokyo.jpg', date: '2020-03-15' },
];

function CityCards() {
  return (
    <div className='black-container'>
      <div className='container city-cards'>
        <CityCard
          title={traveLData[0].title}
          image={traveLData[0].image}
          date={traveLData[0].date}
          description='ny Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis autem quam sit itaque magni at a ipsum excepturi sint'
        />
        <CityCard
          title={traveLData[1].title}
          image={traveLData[1].image}
          date={traveLData[1].date}
          description='paris Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis autem quam sit itaque magni at a ipsum excepturi sint'
        />
        <CityCard
          title={traveLData[2].title}
          image={traveLData[2].image}
          date={traveLData[2].date}
          description='sanfran amet cumque nihil accusantium, cum saepe veniam id! Deleniti, nostrum vel.'
        />
      </div>
    </div>
  );
}

export default CityCards;
