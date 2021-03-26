/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  Modal, Button, Form, Row, Col, Container,
} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { createPost, updatePost, deletePost } from '../redux/postSlice'

const ModalForm = props => {
  const getPost = useSelector(state => state.posts)

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    // dispatch(updateImage(image))
    // dispatch(updateDescription(description))
    dispatch(createPost({
      title, image, description, id: 0,
    }))

    setTitle('')
    setImage('')
    setDescription('')
    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="flex-fill" onSubmit={onSubmit}>
          <Form.Group controlId="formBodyTitle">
            <Form.Label className="float-left">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBodyImage">
            <Form.Label className="float-left">Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              value={image}
              onChange={e => setImage(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBodyDescription">
            <Form.Label className="float-left">Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Form.Group>
          <Container>
            <Row>
              <Col xs>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Col>
              <Col xs>
                <Button
                  variant="info"
                  onClick={() => {
                    props.onHide()
                    setImage('')
                    setDescription('')
                    setTitle('')
                  }}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Container>

        </Form>
      </Modal.Body>

    </Modal>
  )
}

export default ModalForm
