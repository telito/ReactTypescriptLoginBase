import { Col, Row, Form, Input, Button, message} from 'antd'
import React from "react"
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../../context/AuthProvider/useAuth"

export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    async function onFinish(values: {account:string, password:string}){
        try{
            await auth.authenticate(values.account, values.password)
        
            navigate('/profile', {replace: true})
        }catch(error){
            message.error('invalid account or password')
            console.log(error)
        }
    }

    return(
        <Row
            justify='center'
            align='middle'
            style={{
                height: '100vh'
            }}
        >
            <Col span={12}>
                <Form name='basic' labelCol={{span:8}} wrapperCol={{span:18}} onFinish={onFinish}>
                    <Form.Item
                        label='account'
                        name='account'
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='Password'
                        name='password'
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}} >
                        <Button type='primary' htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            
        </Row>
    )
}