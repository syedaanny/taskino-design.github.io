// import Navbar from '@/component/Navbar


import Image from 'next/image'
import Navbar from 'src/component/Navbar'

export default function Home() {
  return (
<div className='hero-section'>


<div className='rectengle-demo'>
<Image className='rectangle-img2  img-fluid' src="/img/left_rectangle.png" width="265" height="451"  />

</div>



<Navbar/>



<div className='Container' >

  <div className="row justify-content-md-center home-section-row ">

    <div className="col col-lg-5 col-md-6  left-side-col">
      <div className='left-side justify-content-center '>
        <div className='left-title-dec'>
        <h1>
          <span className='taskino'>Taskino:</span> <br/>
          Master your day and <br/>Achieve more!

        </h1>
        <p className='left-dec'>
        Maximize Productivity with Taskino! Plan, Organize, and Execute Your Tasks Effortlessly. Stay on Top of Your Day with Intuitive Tools for Efficient Task Management
        </p>
        </div>

        <div className='left-title-btn'>
        <button type="button" className="btn signup-btn btn-lg rounded">
      <a href="#"> Sign up </a></button>
         
        
         <a href="#"> <Image className='googleplay-img' src="/img/googleplay.png" width="102" height="110"  />
           </a> 



        </div>
        <div className='review-box'>
          <Image  className='review-img' src="/img/review.png" width="1000" height="290"  />

        </div>
        
      </div>



    </div>







    {/* RIGHT SIDE  */}
    <div className="col col-lg-7 col-md-6 right-side ">
    <Image className='hero-mobile-svg' src="/img/mobile-bg.svg" width="265" height="451"  />

<div className='mobile-background'>
{/* <!-- SVG wave generated from https://codepedia.info/svg-wave-generator --> */}






<div className='right-images '>

<div className='circle'>
<Image src="/img/ellipse_bg.png" width="802" max-width="320" height="410" className=' img-fluid right-side-img-4' />

</div>

<Image src="/img/group_phone.png" width="1000"  height="410" className=' img-fluid right-side-img-2 display-right-images' />
<Image src="/img/ellipse-end.png" width="502" height="310" className=' img-fluid right-side-img-1 image' /> 
<Image src="/img/group_task_timer.png" width="502"  height="310" className='  img-fluid right-side-img-3 image' /> 
</div>  

</div>



    {/* END OD RIGNT SIDE */}










    
    </div>
   

</div>
</div>
</div>
  
  )
}
