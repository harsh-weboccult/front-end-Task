import React from "react";
import { formdata } from "../../utils/Model.data";
import { Button, Col, Form, Input, Radio, Row } from "antd";
import FormItem from "antd/es/form/FormItem";

interface props {
  setFormData: React.Dispatch<React.SetStateAction<formdata>>;
  formData: formdata;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
}
const Form1 = ({ setFormData, formData, setActiveKey }: props) => {
  const [form] = Form.useForm();
  const validateMessages = {
    required: "${label} is required!",
    types: {
      redio: "${label} is not a valid email!",
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values: any) => {
   
    setFormData({
      ...formData,
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
    });
     setActiveKey("2");
  };
  return (
    <>
      <Row style={{ marginTop: "30px" }} justify="center" align="middle">
        <Col span={8}>
          <Form
            form={form}
            layout="horizontal"
            validateMessages={validateMessages}
            onFinish={onFinish}
          >
            <FormItem
              label="First Name"
              
              name="firstName"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter First Name" />
            </FormItem>
            <FormItem
              label="Last Name"
              name="lastName"
              rules={[{ required: true }]}
            >
              <Input  placeholder="Enter Last Name"/>
            </FormItem>
            <FormItem label="Gender" name="gender" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="Male"> Male </Radio>
                <Radio value="Female"> Female </Radio>
              </Radio.Group>
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit">
                Save & Next
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Form1;
