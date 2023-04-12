/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { FormTypes, formdata, validateMessages } from "../../utils/Model.data";
import { Button, Col, DatePicker, Form, Input, InputNumber, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import InputMask from "react-input-mask";
import { log } from "console";
import Inputfeild from "./Inputfeild";
import { MaskedInput } from "antd-mask-input";
var temp2: any;
const Form2 = ({
  setFormData,
  formData,
  setActiveKey,
  formStates,
  setFormStates,
  updateData,
}: FormTypes) => {
  const [form] = Form.useForm();
  temp2 = form;

  const onFinish = (values: any) => {
    setActiveKey("3");
    let data = { ...formData, ...values };
    setFormStates({ ...formStates, form2: temp2 });
    setFormData(data);
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
              <Input
                placeholder={updateData?.email}
                //value={updateData?.email}
              />
            </FormItem>
            <FormItem
              label="Contact Number"
              name="contactNo"
              rules={[{ required: true }]}
            >
              <MaskedInput
                mask={"+91 00000-00000"}
                name="expiry"
                placeholder={updateData?.contactNo}
              />
            </FormItem>
            <FormItem
              label="Date Of Birth"
              name="dob"
              rules={[{ required: true }]}
            >
              <DatePicker format="DD-MM-YYYY" defaultValue={updateData?.dob} />
            </FormItem>

            <FormItem
              label="For How Many Hour"
              name="hour"
              rules={[{ required: true }]}
            >
              <InputNumber max={24} placeholder={updateData?.hour} />
            </FormItem>

            <FormItem
              label="Zip-Code"
              name="zipCode"
              rules={[{ required: true }]}
            >
              <MaskedInput
                mask={"000-000"}
                name="expiry"
                placeholder={updateData?.zipCode}
              />
            </FormItem>

            <FormItem
              label="ipAddress"
              name="ipAddress"
              rules={[{ required: true }]}
            >
              <MaskedInput
                mask={"0000-0000-0000"}
                name="expiry"
                placeholder={updateData?.ipAddress}
              />
            </FormItem>

            <FormItem label="Enter Amount" name="money">
              <MaskedInput
                mask={"$ 00,000,000"}
                name="expiry"
                placeholder={updateData?.money}
              />
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
