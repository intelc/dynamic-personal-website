import React, { useState } from 'react'
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types'
import { createPost, updatePost, deletePost } from '../redux/postSlice'
import Post from './Post'

const BlogPosts = ({ show }) => {
  const [editOn, setEditOn] = useState(false)
  const [counter, setCounter] = useState(1)
  const getPost = useSelector(state => state.post.posts)

  const dispatch = useDispatch()
  return (
    <div>
      <Container style={{ marginTop: 40 }}>
        <Row>
          <Col>
            <h1
              className="float-left"
              style={{
                color: 'rgb(60, 180, 178)',
                fontFamily: 'Karla, sans-serif',
                fontWeight: 700,
              }}
            >
              Blog Posts

            </h1>
          </Col>

          <Col>
            {!editOn && (
              <Button
                variant="primary"
                className="float-right"
                onClick={show}
              >
                Add Post
              </Button>
            )}
          </Col>
        </Row>
        <br />
        <Row>

          {
                getPost.map(post => (
                  <div key={post.id} style={{ padding: 10 }}>

                    <Post
                      idS={post.id}
                      imageS={post.image}
                      titleS={post.title}
                      escriptionS={post.description}
                      counter={getPost.length}
                    />

                  </div>
                ))
            }

        </Row>
      </Container>
    </div>
  )
}
BlogPosts.defaultProps = {
  show: false,
}

BlogPosts.propTypes = {
  show: PropTypes.bool,
}

export default BlogPosts
