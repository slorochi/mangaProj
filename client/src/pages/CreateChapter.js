import React ,{useEffect, useState }from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Input, Button, Form} from 'antd';


const CreateChapter = () => {
    let { id } = useParams();

    const [manga, setManga] = useState([]);
    const navigate = useNavigate();

    const onFinish = (values) => {
        values.MangaId = id;
        console.log('Success:', values);
        axios.post("http://localhost:3001/chapters",values).then((resp)=>{
          console.log(resp);
          navigate(`/Manga/${id}`,)
        }).catch((err)=>{
          console.log(err);
        })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
    <div style={{display:'flex', justifyContent:'center'}}>

<Form
    style={{width:'600px', marginTop:'20px'}}
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
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
    

      
        <Button onClick={() => navigate(`/Manga/${id}`,)}
            type="primary" htmlType="submit">
          Ajouter
        </Button>
    </Form>
        
        </div>
        );
        
};
export default CreateChapter;