import '../styles/_blogspage.scss'
import allBlogs from '../Components/allBlogs'
import Title from '../Components/Title.js'

import React from 'react'

function BlogsPage() {
  return (
    <div>
      <div className="b-title">
        <Title title={'My Blogs'} span={'My Blogs'} />
      </div>
      <div className="BlogsPage">
        {
          allBlogs.map((blog) => {
            return <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
                <div className="date-con">
                  <p>{blog.date}</p>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default BlogsPage