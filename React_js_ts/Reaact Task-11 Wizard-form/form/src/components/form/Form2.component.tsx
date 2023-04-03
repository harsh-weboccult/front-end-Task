/* eslint-disable no-template-curly-in-string */
import React from "react";
import { formdata } from "../../utils/Model.data";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import moment from "moment";
interface props {
  setFormData: (val: formdata) => void;
  formData: formdata;
  setActiveKey: (val: string) => void;
}
const Form2 = ({ setFormData, formData, setActiveKey }: props) => {
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
    setActiveKey("3");
    const dob = moment(values.dob).format("DD-MM-YYYY");
    console.log(values, "secound");

    setFormData({
      ...formData,
      email: values.email,
      contactNo: values.contactNo,
      dob: dob,
    });
    console.log(formData, "form 2");
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
            <FormItem label="E-mail" name="email" rules={[{ required: true }]}>
              <Input  placeholder="Enter Email"/>
            </FormItem>
            <FormItem
              label="Contact Number"
              name="contactNo"
              rules={[{ required: true }]}
            >
              <InputNumber placeholder="enter Mobile Number" />
            </FormItem>
            <FormItem
              label="Date Of Birth"
              name="dob"
              rules={[{ required: true }]}
            >
              <DatePicker format="DD-MM-YYYY" />
            </FormItem>
            <Row>
              <Col span={12}>
                <Button onClick={() => setActiveKey("1")}>Previous</Button>
              </Col>
              <Col span={12}>
                <Button type="primary" htmlType="submit">
                  Save & Next
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Form2;
