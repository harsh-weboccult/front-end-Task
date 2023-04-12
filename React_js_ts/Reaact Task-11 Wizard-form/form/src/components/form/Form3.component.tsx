/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import {
  FormTypes,
  formdata,
  initianvalue,
  validateMessages,
} from "../../utils/Model.data";
import { Form, Row, Col, Select, Checkbox, Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";
import { v4 as uuidv4 } from "uuid";

let id: string;

const Form3 = ({
  setFormData,
  formData,
  setActiveKey,
  setshowData,
  formStates,
  updateData,
  showData,
  setupdatehHandleDelete,
  setUpdateData,
}: FormTypes) => {
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(true);

  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  const onFinish = (values: any) => {
    values.isChecked = checked;
    id = uuidv4();
    let data = { ...formData, ...values };
    data.id = id;
    setFormData(data);
    setshowData((prev: any) => [...prev, data]);
    formStates.form1.resetFields();
    formStates.form2.resetFields();
    form.resetFields();
    setupdatehHandleDelete(true);
    setActiveKey("1");
  };

  const resetform = () => {
    formStates.form1.resetFields();
    formStates.form2.resetFields();
    form.resetFields();
    setupdatehHandleDelete(true);
    setActiveKey("1");
    setUpdateData({ ...initianvalue });
  };

  const updateform = () => {
    const newshowDate = showData.map((element: any) => {
      if (element.id === updateData.id)
        return {
          ...element,
          firstName: formData.firstName,
          lastName: formData.lastName,
          gender: formData.gender,
          email: formData.email,
          contactNo: formData.contactNo,
          dob: formData.dob,
          favouriteSport: formData.favouriteSport,
          aboutMe: formData.aboutMe,
          isChecked: checked,
        };
      return element;
    });
    setshowData(newshowDate);
    setupdatehHandleDelete(true);
    formStates.form1.resetFields();
    formStates.form2.resetFields();
    form.resetFields();
    setUpdateData({ ...initianvalue });
    setActiveKey("1");
  };

  const updateselect = (e: any) => {
    setFormData({ ...formData, favouriteSport: e });
  };
  const updatefeild = (e: any) => {
    setFormData({ ...formData, aboutMe: e.target.value });
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
              <Select onChange={updateselect}>
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
              <TextArea
                rows={4}
                value={updateData?.aboutMe}
                onChange={updatefeild}
              />
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
                  {updateData?.id != null ? (
                    <div>
                      <Button type="primary" onClick={updateform}>
                        Update Form
                      </Button>
                      <Button onClick={resetform}> Cancel</Button>
                    </div>
                  ) : (
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  )}
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
