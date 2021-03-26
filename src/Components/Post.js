import React, {useState} from 'react'
import {Modal, Button, Form, Row, Col, Container} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {createPost,updatePost,deletePost} from '../redux/postSlice'

const Post = ({idS,imageS,titleS,descriptionS,counter}) => {
    const [show,setShow]=useState(false)
    const [title, setTitle] = useState(titleS)
    const [image, setImage] = useState(imageS)
    const [description, setDescription] = useState(descriptionS)

    const getPost= useSelector(state=>state.posts)
    
    const dispatch = useDispatch()

    const onSubmit = (e)=>{
        
        e.preventDefault()

       // dispatch(updateImage(image))
       // dispatch(updateDescription(description))
        dispatch(updatePost({title:title,image:image,description:description,id:idS}))
        
        setTitle('')
        setImage('')
        setDescription('')
        setShow(false)


    }
    return (
        <div className="container border" style={{padding:30}}>
            {!show &&
            <>
                <img src={imageS}/>
                <h3>{`Post # ${counter}: ${titleS}`}</h3>
                <p>{descriptionS}</p>
                <Button variant='warning' onClick={()=>setShow(true)}>Edit Post</Button>
            </>
            }
            {show&&
            <Form className='flex-fill' onSubmit={onSubmit}>
                    <Form.Group controlId="formBodyTitle">
                        <Form.Label className='float-left'>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter image url" 
                        value={title} onChange={(e)=>setTitle(e.target.value)}/>          
                    </Form.Group>

                    <Form.Group controlId="formBodyImage">
                        <Form.Label className='float-left'>Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter image url" 
                        value={image} onChange={(e)=>setImage(e.target.value)}/>          
                    </Form.Group>

                    <Form.Group controlId="formBodyDescription">
                        <Form.Label className='float-left'>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" 
                        value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    </Form.Group>
                    <Container >
                        <Row>
                            <Col xs>
                                <Button variant="success" type="submit">
                                    Submit
                                </Button>
                            </Col>
                            <Col xs>
                                <Button variant="info" onClick={()=>{setShow(false)
                                setImage('')
                                setDescription('')
                                setTitle('')
                                }
                                }>
                                    Cancel
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                        <Button variant="danger" onClick={()=>{dispatch(deletePost({id:idS}))
                                
                                }
                                }>
                                    Delete Post
                                </Button>
                        </Row>
                    </Container>
                    
                </Form>
                }
        </div>
        
    )
}

export default Post
