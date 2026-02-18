import'./Now.css'
import img1 from '../assets/style.png'
import img2 from '../assets/what.png'
function Now() {


  return (
    <>
    <div className="main">
        <div className="top">
            <div className='t-l'>
                <img src={img1} alt=""className='style' />
            </div>
            <div className='t-m'><h4><p>Fan</p>
            <p>wishes</p></h4></div>
            <div className='t-r'>
                <input type="buttan" value="promate My Business" className='tr-3'/>
            </div>
        </div>
        <div className="bottom">
            <div className='b-t'>
                <div className='bt-1'><h4>Product</h4></div>
                <div  className='bt-2'>
                    <input type="checkbox" />Personalised Video msg
                </div>
                <div className='bt-3'>
                    <input type="checkbox" />Meet & Greet
                </div>
                <div className='bt-4'>
                    <input type="checkbox" />Video Call
                </div>
                <div className='bt-5'>
                    <input type="checkbox" />Social media Pro
                </div>
            </div>
            <div className='b-b'>
                <div className='bb-1'><h4>Sort By</h4></div>
                <div className='bb-2'>
                    <input type="radio" />Popular
                </div>
                <div className='bb-3'>
                    <input type="radio" />Lowest_Price
                </div>
                <div className='bb-4'>
                    <input type="radio" />Highest_Price
                </div>
                <img src={img2} alt=""className='p1' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Now