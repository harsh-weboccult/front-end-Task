import { Button, Modal, Space, Switch, Table } from "antd";

import React, { useEffect, useState } from "react";

import type { ColumnsType } from "antd/es/table";
import { table } from "console";

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

  // useEffect(() => {
  //   setcolumns([
  //     {
  //       title: props.item.categoryname,
  //       dataIndex: "category",
  //       editable: true,
  //       key: "category",
  //       render(value, record: any, index) {
  //         // console.log(record, "record");
  //         return <span>{record.category}</span>;
  //       },
  //     },
  //     ...props.item.types.map((element: any, index: any) => {
  //       return {
  //         title: element.type,
  //         dataIndex: "type_val",
  //         editable: true,
  //         key: "type_val",
  //       };
  //     }),
  //   ]);
  // }, []);

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
    const tabled = [...props.tabledata];
    console.log(tabled, "befaure data aupate");
    tabled.map((element: any, index: number) => {
      if (element.id === props.item.id) {
        element.rowData.push({
          id: count + 2,
          category: "cic",
          type_val: [
            element.types.map((element: any, index: number) => {
              return {
                type: element.title,
                value: 0,
              };
            }),
          ],
          children: [],
        });
      }
    });

    console.log(tabled, "table dataa");

    const updatedItem = {
      ...props.item,
      rowData: [...props.item.rowData],
    };

    const updatedTableData = props.tabledata.map((tableItem: any) =>
      tableItem.id === props.item.id ? updatedItem : tableItem
    );

    props.setTableData(updatedTableData);
    //setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* Adding a new Column */

  const addnewType = () => {
    const newcolumns = {
      title: "type",
      dataIndex: "type_val",
      //editable: true,
    };

    const updatedItem = {
      ...props.item,
      types: [...props.item.types, { ...newcolumns }],
    };

    const updatedTableData = props.tabledata.map((tableItem: any) =>
      tableItem.id === props.item.id ? updatedItem : tableItem
    );
    props.setTableData(updatedTableData);

    /** add colum to row when data is added */

    // const tabled = [...props.tabledata];
    // console.log(tabled, "befaure data aupate");
    // tabled.map((element: any, index: number) => {
    //   console.log(element, "elemenr");
    //   element.rowData.map((element:any)=>{
    //       element.type_val[0].map((element:any)=>{
    //           element
    //       })
    //   })
    // });

    // console.log(tabled, "table dataa");
  };
  /** done adding new column */

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

      <table border={1} style={{ borderCollapse: "collapse" }}>
        <tr>
          <th>{props.item.categoryname}</th>
          {props.item.types.map((element: any, index: number) => {
            return (
              <>
                <th key={index}>{element.title}</th>
              </>
            );
          })}
        </tr>

        {props.item.rowData.map((element: any, index: number) => {
          return (
            <>
              <tr>
                <td>{element.category}</td>
                {element.type_val[0].map((element: any) => {
                  return (
                    <>
                      <td>
                        <input type="number" value={element.value} />
                      </td>
                    </>
                  );
                })}
              </tr>
            </>
          );
        })}
      </table>
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
