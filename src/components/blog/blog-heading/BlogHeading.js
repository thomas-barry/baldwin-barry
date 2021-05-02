import React from 'react'

const BlogHeading = ({ title, date }) => (
    <div className="blog-heading">
        <h2>{title}</h2>
        <div className="blog-date">{date}</div>
    </div>
)

export default BlogHeading
