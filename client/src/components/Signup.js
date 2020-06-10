import React, {Component} from 'react'
import {Add_User} from '../gql/mutations'
import {Mutation} from 'react-apollo'
import { Form, Input, Button, Checkbox } from 'antd';



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};


class Signup extends Component{
    render(){

        
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
        let name, email;
        return(
          <Mutation mutation={Add_User} onCompleted={() => this.props.history.push('/')}>
              {(addUser, {loading, error}) => (
                  <div>
                      Create new user
                    <Form {...layout} initialValues={{remember: true,}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed} onSubmit= {e=>{e.preventDefault(); 
                        addUser({variables: {name: name.value, email: email.value}})
                        name.value = ""
                        email.value = ""
                        }}>

                    <Form.Item label="Name" name="name" ref={node => { name = node}} rules={[{
                        required: true, message: 'Please input your name!',},
                    ]}>
                    <Input />
                    </Form.Item>

                    <Form.Item label="Email" name="email" ref={node => { email = node}} rules={[{
                    required: true, message: 'Please input your email!',
                    },
                ]}>
                    <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>


                     {/* <input type="text" name="name" ref={node => { name = node}} placeholder ="NAME"/> 
                     <input type="text" name="email" ref={node => { email = node}} placeholder ="EMAIL"/> 
                     <input type="submit" value="Submit" /> */}
                  </Form>

                 {loading && <p>Loading...</p>}
                 {error && <p>Error : Please try again </p>}
                  </div>
                  
              )}
          </Mutation>
        )
    }
}

export default Signup 

