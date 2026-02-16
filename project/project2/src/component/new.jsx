import './new.css'
import img1 from '../assets/salim.jpg'
import img2 from '../assets/sulaiman.jpg'
import img3 from '../assets/dj.jpg'
import img4 from '../assets/rahul.jpg'
import img5 from '../assets/search.svg'
import img6 from '../assets/right.svg'
function New() {


  return (
    <>
    <div className='main'>
      <div className='head'>
        <div className='h1'><h5><p>Brand</p> 
        <p>Enquiry</p></h5></div>
        <div className='h2'><h5><p>Our Brand</p>
         <p>Endorsement</p></h5></div>
        <div className='h3'>
          <input type="button" value="Our Services^"className='h33' />
        </div>
        <div className='h4'><h5>Blogs</h5></div>
        <div className='h5'><h5><p>Track </p>
        <p>order</p></h5></div>
        <div className='h6'>
          <button className='h66'>
            enter celebrity name
            <img src={img5} alt=""srcSet=''className='search' />
          </button>
        </div>
        <div className='h7'>
          <h5><p>enroll as</p>
          <p>celebrity</p></h5>
        </div>
        <div className='h8'><h5><p>sign</p>
        <p>up</p></h5></div>
        <div className='h9'><h5><p>/ login</p></h5></div>
      </div>
      <div className='top'>
        <div className='t-l'><h4>ALL</h4></div>
        <div className='t-r'>
          <div className='tr-l'><h4>Home</h4></div>
          <div className='tr-m'> </div>
          <div className='tr-r'><h4>Celebrities</h4></div>
        </div>
      </div>
      <div className='middle'>
        <button className='m-1'>All</button>
        <button className='m-2'>Author</button>
        <button className='m-3'>Movie Star</button>
        <button className='m-4'>TV Star</button>
        <button  className='m-5'>Music World</button>
        <button className='m-6'>Influencer</button>
        <button className='m-7'>More</button>
      </div>
      <div className='bottom'>
        <div className='b-1'>
          <div className='b1-t'><img src={img1} alt=""srcSet=''className='salim' />
          <div className='b11'>$14999</div>
          </div>
          <div className='b1-b'><p>Salim Merchant</p>
          <p>Music World</p></div>
        </div>
        <div className='b-2'>
          <div className='b1-t'><img src={img2} alt=""srcSet=''className='sulaiman' />
          <div className='b12'>$12900</div></div>
          <div className='b2-b'><p>Sulaiman Merchant</p>
          <p>Music World</p></div>
        </div>
        <div className='b-3'>
          <div className='b1-t'><img src={img3} alt=""srcSet=''className='dj' />
          <div className='b13'>$49900</div></div>
          <div className='b3-b'><p>DJ Aqeel</p>
          <p>Music World</p></div></div>
        <div className='b-4'>
          <div className='b1-t'><img src={img4} alt=""srcSet=''className='rahul' />
          <div className='b14'>$499</div></div>
          <div className='b4-b'><p>Rahul Baweja</p>
          <p>Music World</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default New

