import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import "./App.css";

import { PlusCircleOutlined } from "@ant-design/icons";
import { FormContent, TableData } from "./util/model";
import CustomeTable from "./components/CustomeTable";

var id = 0;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formdata, setFormData] = useState<FormContent>({
    tabletitle: "",
    category: "",
    type: [{ value: "" }],
  });
  const [tabledata, setTableData] = useState<TableData[]>([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (formdata.tabletitle === "" || formdata.category === "") {
      alert("please fill the  data");
      return;
    }

    id++;
    setTableData([
      ...tabledata,
      {
        id,
        categoryname: formdata.category,
        tablename: formdata.tabletitle,
        types: formdata.type.map((item: any) => {
          return { type: item.value };
        }),
      },
    ]);

    setFormData({
      tabletitle: "",
      category: "",
      type: [{ value: "" }],
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setFormData({
      tabletitle: "",
      category: "",
      type: [{ value: "" }],
    });
    setIsModalOpen(false);
  };

  function addType() {
    setFormData({
      ...formdata,
      type: [...formdata.type, { value: "" }],
    });
  }

  return (
    <>
      <div className="top-btn-container">
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
      </div>

      <div>
        <Modal
          className="modal"
          title="Form Model"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <form className="dialog-box" onSubmit={handleOk}>
            <Input
              autoFocus
              id="name"
              placeholder="Enter Table Name"
              type="text"
              value={formdata.tabletitle}
              onChange={(e) =>
                setFormData({ ...formdata, tabletitle: e.target.value })
              }
              required
            />
            <Input
              id="category"
              placeholder="Enter Catagory"
              type="text"
              value={formdata.category}
              onChange={(e) =>
                setFormData({ ...formdata, category: e.target.value })
              }
              required
            />

            {formdata.type.map((item, index) => {
              return (
                <Input
                  key={index}
                  placeholder="enter Type"
                  id={`type-${index}`}
                  type="text"
                  value={item.value}
                  onChange={(e) => {
                    const newType = [...formdata.type];
                    newType[index] = { value: e.target.value };
                    setFormData({ ...formdata, type: newType });
                  }}
                  required
                />
              );
            })}

            <PlusCircleOutlined onClick={() => addType()} />
          </form>
        </Modal>
      </div>

      {tabledata.map((item: TableData) => (
        <CustomeTable
          key={item.id}
          tablename={item.tablename}
          item={item}
          tabledata={tabledata}
          setTableData={setTableData}
          formdata={formdata}
        />
      ))}
    </>
  );
}

export default App;
