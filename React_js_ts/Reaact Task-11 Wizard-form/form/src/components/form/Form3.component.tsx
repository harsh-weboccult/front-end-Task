/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { formdata } from "../../utils/Model.data";
import { Form, Input, Radio, Row, Col, Select, Checkbox, Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";
interface props {
  setFormData: (val: formdata) => void;
  formData: formdata;
  setActiveKey: (val: string) => void;
  setshowData: React.Dispatch<React.SetStateAction<any[]>>;
}
const Form3 = ({ setFormData, formData, setActiveKey, setshowData }: props) => {
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(true);
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };

  const onFinish = (values: any) => {
    console.log(values,"last ");
    values.isChecked = checked;

    let data = {...formData, ...values};
    setFormData(data);

    setshowData((prev) => [...prev, data]);
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
              label="Select"
              name="favouriteSport"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option value="Cricket">Cricket</Select.Option>
                <Select.Option value="footboll">Footboll</Select.Option>
                <Select.Option value="hocket">hockey</Select.Option>
              </Select>
            </FormItem>

            <FormItem
              label="TextArea"
              name="aboutMe"
              rules={[{ required: true }]}
            >
              <TextArea rows={4} />
            </FormItem>

            <FormItem style={{ textAlign: "center" }} name="isChecked">
              <Checkbox checked={checked} onChange={onChange}>
                I agree terms an condition
              </Checkbox>
            </FormItem>

            <FormItem>
              <Row>
                <Col span={12}>
                  <Button onClick={() => setActiveKey("2")}>Previous</Button>
                </Col>
                <Col span={12}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Form3;
