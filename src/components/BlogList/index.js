// Write your JS code here
import {Component} from 'react' 
import Loader from 'react-loader-spinner' 
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css' 
import BlogItem from '../BlogItem' 

class BlogsList extends Component {
state={isLoading: true, blogsData:[]}

    componentDidMount{
        this.getBlogsData()
    }
    getBlogsData = async() => {
        const response = await fetch("https://apis.ccbp.in/blogs")
        const data = await response.json()
        const updatedData = data.map(eachItem => ({
            id: eachItem.id,
            title: eachItem.title,
            imageUlr: eachItem.image_url,
            avatarUrl: eachItem.avatar_url,
            author: eachItem.author,
            topi: eachItem.topic,

        }))
        this.setState({blogsData:updatedData, isLoading: false})
    }
    render() {
        const {blogsData, isLoading} = this.state 
        return (
            <div className="blog-list-container" >
                {isLoading ? (
                    <div data-testid="loader">
                        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
                    </div>
                     
                ) : ( 
                    <ul>
                       {blogsData.map(item => ( 
                           <BlogItem blogData={item} key={item.id} />))}
                    </ul>
                    
                )}
            </div>
        )
    }
}
export default BlogsList