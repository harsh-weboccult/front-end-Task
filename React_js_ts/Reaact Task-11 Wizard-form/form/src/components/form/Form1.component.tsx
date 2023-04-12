/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { FormTypes, formdata, validateMessages } from "../../utils/Model.data";
import { Button, Col, Form, Input, Radio, Row } from "antd";
import FormItem from "antd/es/form/FormItem";

let temp1: any;

const Form1 = ({
  setFormData,
  formData,
  setActiveKey,
  updateData,
  formStates,
  setFormStates,
  setUpdateData,
}: FormTypes) => {
  const [form] = Form.useForm();
  temp1 = form;

  const onFinish = (values: any) => {
    setFormData({
      ...formData,
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
    });
    // updateData &&
    //   setUpdateData({ ...updateData, firstName: "", lastName: "", gender: "" });
    setFormStates({ ...formStates, form1: temp1 });
    setActiveKey("2");
  };

  return (
    <>
      <Row style={{ marginTop: "30px" }} justify="center" align="middle">
        <Col span={8}>
          <Form
            layout="horizontal"
            validateMessages={validateMessages}
            onFinish={onFinish}
          >
            <FormItem
              label="First Name"
              name="firstName"
              rules={[{ required: true }]}
            >
              <Input placeholder={updateData?.firstName} />
            </FormItem>
            <FormItem
              label="Last Name"
              name="lastName"
              rules={[{ required: true }]}
            >
              <Input placeholder={updateData?.lastName} />
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
