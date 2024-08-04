const BlogList = ({ blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={'blog_' + blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}.</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;