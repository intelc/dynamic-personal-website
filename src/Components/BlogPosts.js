import React, {useState}  from 'react'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {createPost,updatePost,deletePost} from '../redux/postSlice'
import Post from './Post'


const BlogPosts = ({show}) => {
    const [editOn, setEditOn] = useState(false)
    const getPost= useSelector(state=>state.post.posts)
    
    const dispatch = useDispatch()
    return (
        <div > 
            <Container style= {{marginTop:40}}>
            <Row>
                <Col> 
                <h1 className='float-left' style={{color:'rgb(60, 180, 178)',
                fontFamily:'Karla, sans-serif',fontWeight:700}}>
                    Blog Posts</h1>
                </Col>  

                <Col>
                    {!editOn && <Button variant='primary' className='float-right' 
                    onClick={show}>Add Post</Button>}
                </Col>   
            </Row>
            <br/>
            <Row>

            {
                getPost.map((post)=>(
                    <div key={post.id}>
                    {console.log(post.id)}
                    <Post key={post.id} idS={post.id}imageS={post.image} titleS={post.title} descriptionS={post.description}/>
                    </div>
                ))
            }

            </Row>
            </Container>
        </div>
    )
}

export default BlogPosts
