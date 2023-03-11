import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col, } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;


function CreateMangas () {

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post("http://localhost:3001/mangas",values).then((resp)=>{
      console.log(resp)
      navigate('/')
    }).catch((err)=>{
      console.log(err);
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="flex-col items-center" style={{display:'flex', justifyContent:'center'}}>
      <h1>Ajouter un manga</h1>
    <Form
    style={{width:'600px', marginTop:'20px'}}
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input the manga's title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Author"
        name="author"
        rules={[
          {
            required: true,
            message: 'Please input the mangas author!',
          },
        ]}
      >
                <Input />

      </Form.Item>
      <Form.Item name="description" label="description">
          <TextArea rows={4} />
        </Form.Item>

      
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
    </Form>
    </div>
  );
};
export default CreateMangas;