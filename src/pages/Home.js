import React, {useState} from 'react'
import {Container, Form} from 'react-bootstrap'

const Home = () => {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <Container>
                <Form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control"
                            
                            value={name.firstName}
                            id="firstName"
                            placeholder="First Name"
                            onChange={
                                e => setName({...name, firstName: e.target.value})
                            }/>
                             <p>{name.firstName}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text"
                            
                            className="form-control"
                            value={name.lastName}
                            id="lastName"
                            placeholder="Another label"
                            onChange={
                                e => setName( {...name, lastName: e.target.value})
                            }/>
                         <p>{name.lastName}</p>
                    </div>
                </Form>

            </Container>
        </div>
    )
}

export default Home
