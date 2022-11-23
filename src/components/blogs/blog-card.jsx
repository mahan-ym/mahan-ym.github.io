import "./blog.css";

const BlogCard = (props) => {
    return (
    <div class="card">
       <div class="face1">
         <div class="content">
            <img src={props.thumbnail} alt={props.title} class="thumbnail"/>           
         </div>
       </div>
       <div class="middle-face">
          <img src={props.avatar} alt="author" class="avatar"/>
       </div>
       <div class="face2">
         <div class="content">
           <h3>{props.title}</h3>
           <br/>
           <p>{props.date}</p>
           <a href={props.link} type="button">Read More</a>
         </div>
       </div>
    </div>
    );
}

export default BlogCard;
