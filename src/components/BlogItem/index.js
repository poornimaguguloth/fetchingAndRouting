// Write your JS code here
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <li className="blog-items">
      <Link to={`/blogs/${id}`} className="item-link">
        <div className="item-container">
          <img className="item-image" src={imageUrl} alt={`item${id}`} />
          <div className="item-info">
            <p className="item-topic">{topic}</p>
            <h1 className="item-title">{title}</h1>
            <div className="author-info">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
