import React from "react";
import { Table, Tag, Radio, Space } from "antd";

const topOptions = [
  { label: "topLeft", value: "topLeft" },
  { label: "topCenter", value: "topCenter" },
  { label: "topRight", value: "topRight" },
  { label: "none", value: "none" }
];

const bottomOptions = [
  { label: "bottomLeft", value: "bottomLeft" },
  { label: "bottomCenter", value: "bottomCenter" },
  { label: "bottomRight", value: "bottomRight" },
  { label: "none", value: "none" }
];

const columns = [
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
    render: (text) => <a>{text}</a>
  },
  {
    title: "Units",
    dataIndex: "units",
    key: "units"
  },
  {
    title: "Period",
    dataIndex: "period",
    key: "period"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (text, record) => (
  //     <Space size="middle">
  //       {/* <a>Invite {record.source}</a> */}
  //       <a>Delete</a>
  //     </Space>
  //   )
  // }
];

const data = [
  {
    key: "1",
    source: "Coal",
    units: 14212,
    period: "2022",
    tags: ["Coal Production"]
  },
  {
    key: "2",
    source: "Crude Oil",
    units: 18212,
    period: "2022",
    tags: ["Crude Oil Production"]
  },
  {
    key: "3",
    source: "Nuclear Power",
    units: 20212,
    period: "2022",
    tags: ["Nuclear Power Production"]
  },
  {
    key: "4",
    source: "Natural Gas",
    units: 22212,
    period: "2022",
    tags: ["Natural Gas Production"]
  },
  {
    key: "5",
    source: "Renewable Energy",
    units: 24212,
    period: "2022",
    tags: ["Renewable Energy Production"]
  },
];

export default class TableOne extends React.Component {
  state = {
    top: "topLeft",
    bottom: "bottomRight"
  };

  render() {
    return (
      <div>
        <Table
          columns={columns}
          pagination={{ position: [this.state.bottom] }}
          dataSource={data}
        />
      </div>
    );
  }
}


