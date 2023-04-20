
import '../Css/Home.css'
import Navbar from './Navbar';

const Home = () => {
    return ( 
        <div>
<Navbar/>            
    <div className='imagecontenar  mx-auto mt-2 d-flex'>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://thumbs.dreamstime.com/b/healthy-breakfast-yogurt-granola-berries-bowl-44442559.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://c0.wallpaperflare.com/preview/988/942/526/united-states-portland-breakfast-restaurant.jpg" alt="Third slide" />
    </div>
  </div>
</div>
             
            
               <div className='innercontenar  bg-warning'>
                     <center className='mt-5'>
                     <p className='par1'>FEATURED POSTS</p>  
                     <h1 className=''>
                    
                         <p class="font">Love The </p>
                             <p class="font">Delicious & </p>  
                               <p class="font"> Tasty Food </p> 
                         </h1>
                    <input className='inline'/>
                    <p className='par'> A small river named Duden flows</p>
                    <p className='par'> by ther placxe and supplies it with </p>
                    <p className='par3'> the necessary regelialia </p>

                    <button className='btn bg-b'>Read More <i class='bx bx-right-arrow-alt'></i> </button>
                     </center>
                     <button className='btn   btn-lg' > Fount <i class='bx bx-left-arrow-alt' ></i> </button>
                     <button className='btn  btn-lg' > backend  <i class='bx bx-right-arrow-alt'></i></button>
               </div>
    </div> 


{/* /====================page 2-------------------/ */}


<div className='hhhhhhhhhh mt-5 w-100' >

<h1 className='txxxxxt'>Recent Stories.</h1>
            <div className='cont2 d-flex '>
                


 <div className='items'> 

 <div class="card w-50 h-25 ">
  <img class="card-img-top" src="https://c0.wallpaperflare.com/preview/988/942/526/united-states-portland-breakfast-restaurant.jpg" 
  alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">bulk of the card's content.</p>
    <a class="btn ">Go somewhere</a><br/>
    <button  class="btn ">Go somewhere  <i class='bx bx-right-arrow-alt'></i></button>
  </div>
</div>
<div class="card w-50 h-25">
  <img class="card-img-top " src="https://assets.cntraveller.in/photos/624bda7b70dfbaa2826f0b86/16:9/pass/ramzan-food-mumbai-lead1.jpg"
   alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">bulk of the card's content.</p>
    <a href="#" class="btn ">Go somewhere</a><br/>
    <button  class="btn ">Go somewhere  <i class='bx bx-right-arrow-alt'></i></button>
  </div>
</div>
<div class="card w-50 h-25">
  <img class="card-img-top" src="https://media.istockphoto.com/id/641845826/photo/english-breakfast.jpg?b=1&s=612x612&w=0&k=20&c=STfXueZzoiEYx65uTmARv3tguzwvXKJgOl88H6y-9Wk="
   alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">bulk of the card's content.</p>
    <a href="#" class="btn ">Go somewhere</a><br/>
    <button  class="btn">Go somewhere  <i class='bx bx-right-arrow-alt'></i></button>
  </div>
</div>
<div class="card w-50 h-25">
  <img class="card-img-top " src="https://c4.wallpaperflare.com/wallpaper/931/748/847/sausage-breakfast-scrambled-eggs-english-beans-hd-wallpaper-preview.jpg"
   alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">bulk of the card's content.</p>
    <a href="#" class="btn ">Go somewhere  </a><br/>
    <button  class="btn">Go somewhere  <i class='bx bx-right-arrow-alt'></i></button>
  </div>
</div>
 </div>
<div className='singleitems'>
   <p></p>
    {/* <p className='texth6   text-warning'>Food</p> */}
    <p className='Home2text text-white'>Tasty & Delecious Food</p>
    
   
   
     </div>
    </div>
  
  
</div>

{/* /====================page 3-------------------/ */}


<div className='hhhhhhhhhh mt-5'>
  
<h1>Featured Posts</h1>
            <div className='mainContenar'>            
                <div className="contenar d-flex">
                    <div class="cardMain w-25 m-3">
  <img class="card-img-top" src="https://preview.colorlib.com/theme/stories/images/blog-1.jpg" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text"> up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="cardMain w-25 m-3">
  <img class="card-img-top" src="https://preview.colorlib.com/theme/stories/images/blog-2.jpg" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text"> up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="cardMain w-25 m-3">
  <img class="card-img-top" src=" https://preview.colorlib.com/theme/stories/images/blog-3.jpg" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text"> up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card w-25 h-25 lastcard">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <img className=" rounded-circle        card-img-top" src=" https://preview.colorlib.com/theme/stories/images/author.jpg" alt="Card image cap" />
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">
                                 Hi! My name is Cathy Deon, behind the word mountains,
                          far from the countries Vokalia and Consonantia, 
                            there live the blind texts. 
                            Separated they live in Bookmarksgrove right at the coast of the Semantics,
                             a large language ocean.</p>
                            
                        </div>
                        </div>
            </div>
                <div>
                     
                </div>
                </div>
</div>

{/*=========================================home4=================== */}
<div>
<div className='home4   d-flex' >
 
  <center>
  
<div  className='lllll bg-dark'>
<div>
<h6  className='WatchVideo text-secondary '>Watch Video
<i class='bx bxs-right-arrow '></i>
</h6>

  </div>
<p className='fonts text-white mt-5'>Roger</p>
<p className=' fonts  text-white'>BOsch</p>
<center>
  <h6 className=' text-secondary justify-content-around'>
    A small river named Duden
     flows by their place and 
     supplies it with the 
     necessary regelialia. Far far 
     away, behind the word
      mountains, far from the 
      countries Vokalia and
       Consonantia, there live the 
        blind texts.
        </h6></center>
</div>
</center>
<div>
  <img className='home4img mt-5' src='https://i.shgcdn.com/0e8a93b9-51e8-40de-8537-e7b05f08a9fb/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='not found'></img>
</div>


</div>



</div>


{/* ============================page5 =================*/}

<div className='home5  d-flex'>
  <div>
      <img  className='home5image' src='https://img1.wallspic.com/previews/6/7/3/8/6/168376/168376-food-ingredient-recipe-cooking-tableware-360x780.jpg'></img>
  </div>

  <div className='allcards  '>
    <h1>About Stories</h1>
    <h6>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h6>
  <div className='recards'>
  <div class="card ">
    
  <h4>10</h4>
  <h6>Years of Experienced</h6>  
  </div>
  <div class="card ">
  <h4>200</h4>
  <h6> Food </h6>  
  </div>
  <div class="card ">
  <h4>300</h4>
  <h6> Lifestyle</h6>  
  </div>
  <div class="card ">
  <h4>40</h4>
  <h6>Happy Customers</h6>  
  </div>
  </div>
  
  
  </div>
</div>
{/* /=======================page last===============/ */}
<div className='lastpage    d-flex  justify-content-around bg-dark'>
      <div className='mt-5    w-25 '>
<h1   className='text-white'  >Stories</h1>
<p>
Far far away, behind the
 word mountains,
 far from the 
countries Vokalia and
 Consonantia,
 there live the blind texts.
</p>
<div>
<i class='bx bxl-twitter'></i>
<i class='bx bxl-facebook-square'></i>

</div>
      </div>
      <div className='mt-5 '>
        <h3 className='text-white'>Information</h3>
     <h3 className='text-secondary'>Tearms of Users</h3>
     <h3 className='text-secondary'>Information</h3>
     <h3 className='text-secondary'>Tearms of Users</h3>
     <h3 className='text-secondary'>Tearms of Users</h3>
     
      </div>
      <div  className='mt-5 '>
        <h2 className='text-white'> Categoriess</h2>
        <h3 className='text-secondary'>Food</h3>
        <h3 className='text-secondary'>Restaurant</h3>
        <h3 className='text-secondary'>Food</h3>
        <h3 className='text-secondary'>Restaurant</h3>
        <h3 className='text-secondary'>Food</h3>
        <h3 className='text-secondary'>Restaurant</h3>
      </div>
</div>

    </div>
    );
}
 
export default Home;