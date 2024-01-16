import { Button, Form, Input } from 'antd'
import { useState } from 'react';
const { TextArea } = Input;

export default function ContactPage() {
    const [error, setError] = useState('')

    function inputValidation(e) {
        if (e.target.value == '') {
            setError('Input cannot be empty!');
        } else if (e.target.id === 'contact-form_email' && !e.target.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setError('Not a valid email!');
        }
        else {
            setError('')
        }
    }

    return (
        <div className="container">
            <h2>Contact Me</h2>
            <Form name="contact-form" labelCol={{span: 4}} wrapperCol={{span: 16}} autoComplete="off">
                <Form.Item label='Full name: ' name='fullname'><Input onBlur={(event) => {inputValidation(event)}}/></Form.Item>
                <Form.Item label='Email: ' name='email'><Input onBlur={(event) => {inputValidation(event)}}/></Form.Item>
                <Form.Item label='Message: ' name='message'><TextArea size="large" rows={8} onBlur={(event) => {inputValidation(event)}}/></Form.Item>
                <Form.Item wrapperCol={{offset: 4, span: 8}}><Button htmlType="submit" style={{backgroundColor: "#EBC799", color: "#314347"}}>Submit</Button><span style={{marginLeft: '0.5rem', color: 'red'}}>{error}</span></Form.Item>
            </Form>
        </div>
    )
}