import "./blog.css";
import axios from 'axios';
import Moment from 'moment';
import React, { useEffect, useState } from 'react';
import BlogCard from "./blog-card";


const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const [blogAvatar, setBlogAvatar] = useState();
  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mahan-yt";

  const getBlogs = async() => {
    await axios.get(mediumURL)
    .then((data) => {
      if(data.status === 200) {
        setBlogs(data.data.items)
        setBlogAvatar(data.data.feed.image)
      }
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="container blog-container">
      <h1 className="member-txt">Blogs</h1>
      <div className="blogs">
        {blogs && blogs.map((blog) => {
          return (
            <BlogCard 
            title = {blog.title} 
            description = {blog.description} 
            thumbnail = {blog.thumbnail} 
            date = {Moment(blog.pubDate).format('DD-MM-YYYY')} 
            link = {blog.link} 
            avatar = {blogAvatar}
            />
          );
        })}
      </div>
    </div>
  );
  }

export default Blogs;