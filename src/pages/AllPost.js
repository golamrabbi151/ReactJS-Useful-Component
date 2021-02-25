
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Row,Col,Card,Container } from 'react-bootstrap'
export default function Allpost(props) {
const [posts, setPosts] = useState([])
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res =>{
      console.log(res)
      setPosts(res.data)
  })
      .catch(error => {
          console.log(error)
      })
},[])


    return (
        <Container>
            <h1>All Posts</h1>
            <Row>
             {posts.map(post=>(
                 <Col md={3}>
                     <Card>
                    <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>{post.title}</Card.Title><Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                 </Col>
                
             ))}
           </Row>
        </Container>
    )
}
