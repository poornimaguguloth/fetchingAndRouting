// Write your JS code here
import {Component} from 'react'
import Loader from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner/loader.css'

classBlogItemDetails extends Component {
    state = {blogData:{}, isLoading: true}

    componentDidMount(){
        this.getBlogItemData()
    }
    getBlogItemData = async () => {
        const {match} = this.props  
        const {params} = match 
        const {id} = params 
        const response =await fetch(`https://apis.ccbpian.in/bloggs/${id}`) 
        const data = await response.json() 

        const formattedData = {
            title: data.title,
            imageUrl: data.image_url, 
            content: data.content,
            avatarUrl: data.avatar_url, 
            author: data.author
        }
        this.setState({blogData: formattedData, isLoading: false})
    }
    renderBlogItemDetails = () =>{
        const {blogData} = this.state 
        const {title, imageUrl, content, avatarUrl, author} = blogData 
        return (
            <div className="blog-info">
                <h1 className="log-details-title">{title}</h1>
                <div className="author-details">
                    <img className="author-pic" src={avatarUrl} alt={author}/> 
                    <p className="details-author-name">{author}</p>
                </div>
                <img className="blog-image" src={imageUrl} alt={title} />
                <p className="blog-content">{content}</p>
            </div>
        )
    }
    render(){
        const {isLoading} = this.state 
        return (
            <div className="blog-container" >
                {isLoading ? (
                    <div data-testid="loader">
                         <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
                    </div>
                   
                ) : (
                    this.renderBlogItemDetails()
                )}
            </div>
        )
    }
}
export default BlogItemDetails