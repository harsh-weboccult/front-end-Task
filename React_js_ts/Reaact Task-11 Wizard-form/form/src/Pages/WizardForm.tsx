import React, { useEffect, useState } from "react";
import { Button, Tabs } from "antd";
import Form1 from "../components/form/Form1.component";
import TabPane from "antd/es/tabs/TabPane";
import Form2 from "../components/form/Form2.component";
import Form3 from "../components/form/Form3.component";
import { formdata } from "../utils/Model.data";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

 


const WizardForm: React.FC = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [formData, setFormData] = useState<formdata>({
    id:Date.now(),
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    contactNo: null,
    dob: "",
    favouriteSport: "",
    aboutMe: "",
    isChecked: false,
  });
  const [showData, setshowData] = useState<any>([]);
  //const showData = { ...formData };

  const onKeyChange = (key: string) => {
    setActiveKey(key);
  };

 
  const columns: ColumnsType<formdata> = [
    {
      title: "firstName",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "lastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "contect Number",
      dataIndex: "contactNo",
      key: "contectNO",
    },
    {
      title: "dob",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "favourite Sport",
      dataIndex: "favouriteSport",
      key: "favourite Sport",
    },
    {
      title: "about-me",
      dataIndex: "aboutMe",
      key: "about-me",
    },
    {
      title: "T/C",
      dataIndex: "isChecked",
      render: (text, record) => (
        <span>{record.isChecked ? "Accepted" : "rejected"}</span>
      ),
    },
    {
      title: "Edit",
      key: "Edit",
      dataIndex: "tags",
      render: (text, record) => (
        <>
          <Button type="primary"> Edit </Button>
        </>
      ),
    },
    {
      title: "Delete",
      key: "delete  ",
      dataIndex: "tags",
      render: (text, record) => (
        <>
          <Button type="primary" danger >
            Delete
          </Button>
        </>
      ),
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  return (
    <>
    <h1>Wizard Form</h1>
    
       <Tabs
        defaultActiveKey="1"
        centered
        activeKey={activeKey}
        onChange={onKeyChange}
      >
        <TabPane tab="Form-1" key="1" disabled >
          <Form1
            setFormData={setFormData}
            formData={formData}
            setActiveKey={setActiveKey}
          />
        </TabPane>
        <TabPane tab="Form-2" key="2" disabled>
          <Form2
            setFormData={setFormData}
            formData={formData}
            setActiveKey={setActiveKey}
          />
        </TabPane>
        <TabPane tab="Form-3" key="3" disabled>
          <Form3
            setFormData={setFormData}
            formData={formData}
            setActiveKey={setActiveKey}
            setshowData={setshowData}
          />
        </TabPane>
       </Tabs>
        <Table columns={columns} dataSource={showData} />
       </>
  );
};

export default WizardForm;
