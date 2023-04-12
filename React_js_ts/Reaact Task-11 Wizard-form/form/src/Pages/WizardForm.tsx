import React, { useState } from "react";
import { Button, Col, Divider, Row, Tabs } from "antd";
import Form1 from "../components/form/Form1.component";
import TabPane from "antd/es/tabs/TabPane";
import Form2 from "../components/form/Form2.component";
import Form3 from "../components/form/Form3.component";
import { FormTypes, formdata } from "../utils/Model.data";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Input } from "antd";
import moment from "moment";

interface props {
  formData: formdata;
  setFormData: React.Dispatch<React.SetStateAction<formdata>>;
  updateData: formdata | undefined;
  setUpdateData: React.Dispatch<React.SetStateAction<formdata | undefined>>;
  initianvalue: any;
}

const WizardForm = ({
  formData,
  setFormData,
  updateData,
  setUpdateData,
  initianvalue,
}: props) => {
  const [updatehHandleDelete, setupdatehHandleDelete] =
    useState<boolean>(false);
  const [activeKey, setActiveKey] = useState("1");
  const [showData, setshowData] = useState<any>([]);

  const [formStates, setFormStates] = useState({
    form1: [],
    form2: [],
    form3: [],
  });

  const onKeyChange = (key: string) => {
    setActiveKey(key);
  };
  const [searchValue, setsearchValue] = useState("");

  const FilterByNameInput = (
    <Input.Search
      placeholder="Search By firstName and email"
      onSearch={(value) => {
        setsearchValue(value);
      }}
      onChange={(e) => {
        setsearchValue(e.target.value);
        console.log(e.target.value);
      }}
    />
  );

  const handleDelete = (record: formdata) => {
    var deleteArray: formdata[] = [];
    deleteArray = showData.filter((element: formdata) => {
      return record.id !== element.id;
    });
    setshowData(deleteArray);
    setUpdateData({ ...initianvalue });
    console.log(formData);
  };

  const showModal = (record: any) => {
    setUpdateData({ ...record });
    setupdatehHandleDelete(false);
  };

  const columns: ColumnsType<formdata> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "firstName",
      dataIndex: "firstName",
      key: "firstName",
      filteredValue: [searchValue],
      onFilter: (value: any, record): any => {
        return (
          String(record.firstName)
            .toLocaleLowerCase()
            ?.includes(value.toLocaleLowerCase()) ||
          String(record.email)
            .toLocaleLowerCase()
            ?.includes(value.toLocaleLowerCase()) ||
          String(record.contactNo)
            .toLocaleLowerCase()
            ?.includes(value.toLocaleLowerCase())
        );
      },
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
      title: "contact Number",
      dataIndex: "contactNo",
      key: "contactNO",
    },
    {
      title: "dob",
      dataIndex: "dob",
      key: "dob",
      render: (text, record) => (
        <span>{moment(record.dob).format("DD-MM-YYYY")}</span>
      ),
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
      title: "Hour Stay",
      dataIndex: "hour",
      key: "hour",
    },
    {
      title: "Zip-code",
      dataIndex: "zipCode",
      key: "zipCode",
    },
    {
      title: "Ip Address",
      dataIndex: "ipAddress",
      key: "ipAddress",
    },
    {
      title: "Paid Money",
      dataIndex: "money",
      key: "money",
    },

    {
      title: "Edit",
      key: "Edit",
      dataIndex: "tags",
      render: (text, record: any) => (
        <>
          <Button type="primary" onClick={() => showModal(record)}>
            Edit
          </Button>
        </>
      ),
    },
    {
      title: "Delete",
      key: "delete  ",
      dataIndex: "tags",
      render: (text, record) => (
        <>
          {updatehHandleDelete && (
            <Button type="primary" danger onClick={() => handleDelete(record)}>
              Delete
            </Button>
          )}
        </>
      ),
    },
  ];

  const formProps: FormTypes = {
    setFormData: setFormData,
    formData: formData,
    setActiveKey: setActiveKey,
    setshowData: setshowData,
    showData: showData,
    formStates: formStates,
    updateData: updateData,
    setFormStates: setFormStates,
    setupdatehHandleDelete: setupdatehHandleDelete,
    setUpdateData: setUpdateData,
  };

  return (
    <>
      <h1>Wizard Form</h1>

      <div className="top__form">
        <Tabs
          defaultActiveKey="1"
          centered
          activeKey={activeKey}
          onChange={onKeyChange}
        >
          <TabPane tab="Form-1" key="1" disabled>
            <Form1 {...formProps} />
          </TabPane>
          <TabPane tab="Form-2" key="2" disabled>
            <Form2 {...formProps} />
          </TabPane>
          <TabPane tab="Form-3" key="3" disabled>
            <Form3 {...formProps} />
          </TabPane>
        </Tabs>
      </div>

      <div className="bottom__table">
        <Divider orientation="left">Data Table</Divider>
        <Row gutter={16}>
          <Col className="gutter-row" offset={16} span={8}>
            <div>{FilterByNameInput}</div>
          </Col>
        </Row>
        <Table columns={columns} dataSource={showData} />
      </div>
    </>
  );
};

export default WizardForm;
