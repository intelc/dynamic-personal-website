import React, {useState} from 'react'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { updateImage, updateDescription } from '../redux/tagLineSlice'
const Header = () => {
    const tagLine= useSelector(state=>state.tagLine.description)
    const imageUrl= useSelector(state=>state.tagLine.image)
    const dispatch = useDispatch()

    const [editOn, setEditOn] = useState(false)
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()

        dispatch(updateImage(image))
        dispatch(updateDescription(description))

        setEditOn(false)
        setImage('')
        setDescription('')

    }
    return (
        <div style={{padding:'3rem 10rem', background:'rgb(246,247,247'}}>
        <Container>
            <Row>
                <Col> 
                <h1 className='float-left'>Hey this is me</h1>
                </Col>  

                <Col>
                    {!editOn && <Button variant='warning' className='float-right' onClick={()=>setEditOn(!editOn)}>Edit</Button>}
                </Col>   
            </Row>
            <br/>
            <Row>
                {!editOn &&
                <>
                    <Col>
                        <img src={imageUrl}/>
                    </Col>

                    <Col>
                    {<h2 style ={{color:'gray'}}>{tagLine}</h2>}
                    </Col>
                    
                </>
                }
                {editOn && 
                <Form className='flex-fill' onSubmit={onSubmit}>
                    <Form.Group controlId="formTitleImage">
                        <Form.Label className='float-left'>Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter image url" 
                        value={image} onChange={(e)=>setImage(e.target.value)}/>          
                    </Form.Group>

                    <Form.Group controlId="formTitleDescription">
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
                                <Button variant="info" onClick={()=>{setEditOn(!editOn)
                                setImage('')
                                setDescription('')
                                }
                                }>
                                    Cancel
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                    
                </Form>
                }
            </Row>



        </Container> 
        </div>
    )
}

export default Header
