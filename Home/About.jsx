import '../Css/About.css'


const About = () => {

    return ( 
    
    <div>

        <div className='Firstimage'>

        </div>

   
    
    <div className=' maincont  d-flex '>
        <div className="imagediv">
<img     src="https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFuY2FrZXN8ZW58MHx8MHx8&w=1000&q=80" alt="not"></img>
        </div>
        <div className='Forms'>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Author</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Author" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Title</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Title" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Summaray</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
 
  <button type="submit" class=" mt-5 btn btn-primary">Submit</button>
</form>
        </div>
    </div>
   
    </div>
     );
}
 
export default About;












{/* <form>
<label>Author</label>
<input placeholder="Author" type="text"></input>
<label>Author</label>
<input placeholder="Author" type="text"></input>
<label>Author</label>
<input placeholder="Author" type="text"></input>
<label>Author</label>
<input placeholder="Author" type="text"></input>
<label>Author</label>
<input placeholder="Author" type="text"></input>
</form> */}