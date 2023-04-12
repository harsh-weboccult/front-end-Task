import React, { useState } from "react";
import { Table, Button, Modal, Input, InputNumber } from "antd";
import { log } from "console";

const NestedDynamicTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tableName, setTableName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [typeNames, setTypeNames] = useState(["Type 1"]);
  const [tableData, setTableData] = useState({
    name: "",
    categories: [],
    types: [],
    data: [],
  });

  const handleAddType = () => {
    setTypeNames([...typeNames, `Type ${typeNames.length + 1}`]);
  };

  const handleTypeChange = (index, event) => {
    console.log("event", event);
    const newTypeNames = [...typeNames];
    newTypeNames[index] = event;
    setTypeNames(newTypeNames);
  };

  const handleDeleteType = (index) => {
    setTypeNames(typeNames.filter((_, i) => i !== index));
  };

  const handleCountChange = (categoryIndex, typeIndex, value) => {
    const newData = [...tableData.data];
    newData[categoryIndex][typeIndex] = value;
    setTableData({ ...tableData, data: newData });
  };

  const handleEditCount = (categoryIndex, typeIndex) => {
    const newData = [...tableData.data];
    newData[categoryIndex].editable[typeIndex] = true;
    setTableData({ ...tableData, data: newData });
  };

  const handleSaveCount = (categoryIndex, typeIndex) => {
    const newData = [...tableData.data];
    newData[categoryIndex].editable[typeIndex] = false;
    setTableData({ ...tableData, data: newData });
  };

  const handleAddRow = () => {
    const newData = [...tableData.data];
    const newRow = {
      category: "",
      editable: [...Array(typeNames.length).fill(false)],
    };
    newData.push(newRow);
    setTableData({ ...tableData, data: newData });
  };

  const handleEditRow = (index) => {
    const newData = [...tableData.data];
    newData[index].editable = [...Array(typeNames.length).fill(true)];
    setTableData({ ...tableData, data: newData });
  };

  const handleSaveRow = (index) => {
    const newData = [...tableData.data];
    newData[index].editable = [...Array(typeNames.length).fill(false)];
    setTableData({ ...tableData, data: newData });
  };

  const handleDeleteRow = (index) => {
    const newData = [...tableData.data];
    newData.splice(index, 1);
    setTableData({ ...tableData, data: newData });
  };

  const handleDeleteColumn = (index) => {
    const newTypes = [...tableData.types];
    newTypes.splice(index, 1);
    const newData = tableData.data.map((row) => {
      const newRow = { ...row };
      newRow.editable.splice(index, 1);
      return newRow;
    });
    setTableData({ ...tableData, types: newTypes, data: newData });
  };

  const handleCancel = () => {
    setModalVisible(false);
    setTableName("");
    setCategoryName("");
    setTypeNames(["Type 1"]);
  };

  const handleSave = () => {
    setModalVisible(false);
    setTableData({
      name: tableName,
      categories: [...tableData.categories, categoryName],
      types: [...tableData.types, ...typeNames],
      data: [
        ...tableData.data,
        {
          category: categoryName,
          editable: [...Array(typeNames.length).fill(false)],
        },
      ],
    });
    setTableName("");
    setCategoryName("");
    setTypeNames(["Type 1"]);
  };

  const handleEditTable = () => {
    // TODO: Implement edit table functionality
    console.log("Editing table...");
  };

  const columns = [
    {
      title: "Table Name",
      dataIndex: "name",
      render: (text, record) => (
        <div>
          <div>{text}</div>
          <Button type="primary" onClick={handleEditTable}>
            Edit
          </Button>
        </div>
      ),
    },
    ...tableData.types.map((typeName, typeIndex) => ({
      title: (
        <div>
          <span>{typeName}</span>
          <Button
            type="primary"
            style={{ marginLeft: 8 }}
            onClick={() =>
              Modal.confirm({
                title: "Delete column?",
                content: "Are you sure you want to delete this column?",
                onOk: () => handleDeleteColumn(typeIndex),
              })
            }
          />
        </div>
      ),
      dataIndex: `${typeIndex}`,
      render: (text, record, rowIndex) => (
        <div>
          {record.editable[typeIndex] ? (
            <InputNumber
              min={0}
              defaultValue={text}
              onChange={(value) =>
                handleCountChange(rowIndex, typeIndex, value)
              }
            />
          ) : (
            text
          )}
          {record.editable[typeIndex] ? (
            <Button
              type="primary"
              icon="save"
              onClick={() => handleSaveCount(rowIndex, typeIndex)}
            />
          ) : (
            <Button
              type="primary"
              icon="edit"
              onClick={() => handleEditCount(rowIndex, typeIndex)}
            />
          )}
        </div>
      ),
    })),
    {
      title: (
        <div>
          <span>Actions</span>
          <Button
            type="primary"
            style={{ marginLeft: 8 }}
            onClick={() =>
              Modal.confirm({
                title: "Add category?",
                content: "Are you sure you want to add a new category?",
                onOk: handleAddRow,
              })
            }
          />
        </div>
      ),
      dataIndex: "actions",
      render: (_, record, rowIndex) => (
        <div>
          {record.editable.some((edit) => edit) ? (
            <Button
              type="primary"
              icon="save"
              onClick={() => handleSaveRow(rowIndex)}
            />
          ) : (
            <Button
              type="primary"
              icon="edit"
              onClick={() => handleEditRow(rowIndex)}
            />
          )}
          <Button
            type="primary"
            style={{ marginLeft: 8 }}
            onClick={() =>
              Modal.confirm({
                title: "Delete category?",
                content: "Are you sure you want to delete this category?",
                onOk: () => handleDeleteRow(rowIndex),
              })
            }
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        Add Table
      </Button>
      <Modal
        visible={modalVisible}
        title="Create Table"
        onCancel={handleCancel}
        onOk={handleSave}
        okText="Save"
        cancelText="Cancel"
      >
        <Input
          placeholder="Table Name"
          value={tableName}
          onChange={(event) => setTableName(event.target.value)}
        />
        <Input
          placeholder="Category Name"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          style={{ marginTop: 16 }}
          addonAfter={<Button type="primary" onClick={handleAddType} />}
        />
        {typeNames.map((typeName, typeIndex) => (
          <Input
            key={typeName}
            placeholder={`Type ${typeIndex + 1}`}
            value={typeName}
            onChange={(event) =>
              handleTypeChange(typeIndex, event.target.value)
            }
            style={{ marginTop: 16 }}
            addonAfter={
              <Button
                type="primary"
                onClick={() => handleDeleteType(typeIndex)}
              />
            }
          />
        ))}
      </Modal>
      <Table
        columns={columns}
        dataSource={tableData.data}
        bordered
        pagination={false}
        rowKey={(record) => record.category}
      />
    </div>
  );
};
export default NestedDynamicTable;
