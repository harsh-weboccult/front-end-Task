import { Button, Modal, Space, Switch, Table } from "antd";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
var count = 105;
const CustomeTable = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [columns, setcolumns] = useState<ColumnsType>([{}]);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      category: "harsh",
      type_val: 0,
      children: [
        {
          id: count + 10,
          category: "cic4",
          type_val: 0,
          children: [
            {
              id: count + 20,
              category: "cic1",
              type_val: 0,
            },
          ],
        },
      ],
    },
  ]);
  const [editbtn, setEditbtn] = useState(0);

  /** previous state */

  const addChieldRow = (record: any) => {
    console.log(record, "single Record");
  };

  useEffect(() => {
    setcolumns([
      {
        title: props.item.categoryname,
        dataIndex: "category",
        editable: true,
        key: "category",
        render(value, record: any, index) {
          console.log(record, "record");
          return <span>{record.category}</span>;
        },
      },
      ...props.item.types.map((element: any, index: any) => {
        return {
          title: element.type,
          dataIndex: "type_val",
          editable: true,
          key: "type_val",
        };
      }),
    ]);
  }, []);

  console.log(
    props.tabledata,
    "all table data",
    props.item,
    "single table data",
    dataSource,
    "this table structure",
    columns,
    "this table columns"
  );

  /** Randar Method use  in table column that we use latter*/
  const saveEdit = () => {};

  const cancelEdit = () => {
    setEditbtn(0);
  };

  const setedit = () => {
    setEditbtn(1);
  };

  /** for adding new row value */
  const handleOpenCategory = () => {
    ++count;
    setDataSource([
      ...dataSource,
      {
        id: count + 2,
        category: "cic",
        type_val: 0,
        children: [],
      },
    ]);
    //setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* Adding a new Column */
  /** remaining add this col ref to datasource */
  const addnewType = () => {
    const newcolumns = {
      title: "type",
      dataIndex: "type_val",
      editable: true,
    };

    setcolumns([...columns, newcolumns]);

    props.tabledata.map((element: any, index: number) => {
      if (element.id === props.item.id) {
        element.types.push(newcolumns);
      }
    });
  };
  /** done adding new column */

  const rowSelection: TableRowSelection<any> = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  return (
    <>
      <div className="table-header">
        <div className="flex">
          <h1 className="table-heading">
            {props.tablename}{" "}
            {/* {editbtn === 1 && (
              <>
                <DeleteFilled
                  style={{ color: "red" }}
                  onClick={() => deletetable()}
                >
                  delete
                </DeleteFilled>
              </>
            )} */}
          </h1>

          {editbtn === 1 && (
            <div>
              <Button
                className="edit-btn"
                onClick={handleOpenCategory}
                color="secondary"
              >
                Add Category Row
              </Button>
              <Button className="edit-btn" onClick={addnewType}>
                Add New Type
              </Button>
              <Button
                className="edit-btn"
                onClick={() => saveEdit()}
                color="success"
              >
                Save
              </Button>
              <Button
                className="edit-btn"
                onClick={() => cancelEdit()}
                color="error"
              >
                Cancel
              </Button>
            </div>
          )}

          {editbtn === 0 && (
            <Button className="edit-btn" onClick={setedit}>
              Edit
            </Button>
          )}
        </div>
      </div>

      <Table
        columns={[...columns]}
        rowSelection={{ ...rowSelection, type: "radio" }}
        dataSource={dataSource}
      />

      <Modal
        title="Basic Modal"
        footer={null}
        onCancel={handleCancel}
        open={isModalOpen}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default CustomeTable;
