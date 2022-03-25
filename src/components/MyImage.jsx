import img1 from '../assets/bandmember.jpg';

function MyImage() {
  return (
    <div className='card'>
      <h4>Name</h4>
      <img src={img1} alt='' />
    </div>
  );
}

export default MyImage;
