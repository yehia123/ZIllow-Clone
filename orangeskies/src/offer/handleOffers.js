import React from 'react';
import './offerlist.css'
import { Button, Table, Pagination } from 'react-bootstrap';
import Navigation from '../navigation/navigation.js'

class HandleOffer extends React.Component {
    render(){
        return(
            <div>
                <Navigation />
                <h2 class="header">Your Offers</h2>
                <Table className="handleoffer" pagination striped bordered hover>
                <thead>
                <tr>
                    <th>Buyer Email</th>
                    <th>Address</th>
                    <th>Price</th>
                    <th colSpan="3">Operation</th>
                
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Mark@gmail.com</td>
                    <td>1234 moon st,san jose, CA, 96503</td>
                    <td>$1,900/mo</td>
                    <td><Button variant="outline-success">Approve</Button>{' '}</td>
                    <td><Button variant="outline-warning">Reject</Button>{' '}</td>
                    
                </tr>
                <tr>
                    <td>Jacob@sjsu.edu</td>
                    <td>2674 sun rd, menlo park, ca, 93045</td>
                    <td>$1,900/mo</td>
                    <td><Button variant="outline-success">Approve</Button>{' '}</td>
                    <td><Button variant="outline-warning">Reject</Button>{' '}</td>
                </tr>
                <tr>
                    <td >Larry3222@gmail.com</td>
                    <td>1234 main ln, palo alto, ca, 94020</td>
                    <td>$1,900/mo</td>
                    <td><Button variant="outline-success">Approve</Button>{' '}</td>
                    <td><Button variant="outline-warning">Reject</Button>{' '}</td>
                </tr>
                </tbody>
            </Table>
            <Pagination class="pagination">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            </div>
        );
    };
}

export default HandleOffer;