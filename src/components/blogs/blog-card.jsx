import "./blog.css";

const BlogCard = (props) => {
    return (
    <div className="card">
       <div className="face1">
         <div className="content">
            <img src={props.thumbnail} alt={props.title} className="thumbnail"/>           
         </div>
       </div>
       <div className="middle-face">
          <img src={props.avatar} alt="author" className="avatar"/>
       </div>
       <div className="face2">
         <div className="content">
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
