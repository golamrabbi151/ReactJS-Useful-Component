// import React, {useState,useEffect} from 'react'
import React, {useState} from 'react'
import {Container, Form,Row,Col} from 'react-bootstrap'
import { Icon } from 'react-icons-kit'
import {plusCircle} from 'react-icons-kit/fa/plusCircle'
import axios from 'axios'
const Home = () => {

    const [title, setTitle] = useState("")
    const [description, setDescriptions] = useState("")
    const [options, setOptions]= useState([])

    // use effect
    // useEffect(()=>{
    //     console.log(`First Name ${name.firstName}`)
    //     console.log(`Last Name ${name.lastName}`)
    // },[name])
    const handelSubmission = event => {
        event.preventDefault()
        // axios post poll data
// console.log(title,setDescriptions)

        axios.post('http://localhost:4000/create/', (title,description,options))
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
         

    }
    return (
        <div>
            <Container>
                {/* <h1>Dynamic input Form</h1> */}
                <Row>
                    <Col md={{span:6 ,offset:3}}>
             
                <div className="card" style={{width: '100%'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center font-weight-bold text-uppercase">Create Poll</h5>
                        <Form onSubmit={handelSubmission}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" value={ title } id="title" onChange={  e => setTitle( e.target.value ) }/>            
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descriptions</label>
                                <textarea className="form-control" id="description" rows="4"   value={description} onChange={ e => setDescriptions(e.target.value)} />
                            </div>
                            <div className="form-group">
                            <Row>
                                <Col md={10}>
                                    <input type="text" className="form-control" value={options} onChange={e =>setOptions(e.target.value)} />
                                </Col>
                                <Col md={2} >
                                    <button type="button" className="btn btn-primary text-center"><Icon size={20} icon={plusCircle}/></button>
                                </Col>
                            </Row>
                            </div>
                            <button className="btn btn-outline-primary" type="submit">Create</button>
                        </Form>
                    </div>
                </div>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
