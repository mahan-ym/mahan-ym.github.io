import React, {useEffect, useState} from 'react';
import axios from 'axios';

function getBlogImage(blogDescription) {
    return blogDescription.toString().match(/<img[^>]+src="([^">]+)"/)[1]
}

function Publications() {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [blogs, setBlogs] = useState();
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mahan-yt";

    const getBlogs = async() => {
        await axios.get(mediumURL)
            .then((data) => {
                if(data.status === 200) {
                    setBlogs(data.data.items)
                }
            }).catch(error => {
                console.log(error)
            })
    }

    const handleMouseMove = (event) => {
        const {clientX, clientY, currentTarget} = event;
        const box = currentTarget.getBoundingClientRect();
        const x = clientX - box.left;
        const y = clientY - box.top;

        const centerX = box.width / 2;
        const centerY = box.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        setRotate({ x: rotateX, y: rotateY });
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div className="relative flex flex-col w-screen">
            <h1>Publications:</h1>
            <div className="flex flex-col w-full items-center text-white md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                {blogs && blogs.map((blog) => {
                    return (
                        <a href={blog.link} target="_blank" rel="noopener noreferrer" key={blog.guid}
                           onMouseMove={handleMouseMove}
                           style={{
                               transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                               transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                           }}>
                            <div className="cursor-pointer bg-gray-900 rounded-xl m-4 shadow-inner shadow-white">
                                <img src={getBlogImage(blog.description)} alt={blog.title} className="rounded-xl"/>
                                <h2>{blog.title}</h2>
                                <p className="text-lg m-2">{new Date(blog.pubDate).toDateString()}</p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    )
}

export default Publications;
