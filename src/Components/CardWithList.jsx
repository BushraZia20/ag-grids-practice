import React from "react";
import { Card, List, Avatar, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const DepartmentCard = ({ title, membersCount, members }) => {
  return (
    <Card
      style={{
        borderRadius: 16,
        padding: 0,
      }}
      bodyStyle={{ padding: 20 }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <div>
          <Title level={4} style={{ margin: 0 }}>
            {title}
          </Title>
          <Text type="secondary">{membersCount} Members</Text>
        </div>

        <Text strong style={{ color: "#7A3EF5", cursor: "pointer" }}>
          View All
        </Text>
      </div>

      <div
        style={{
          borderBottom: "1px solid #eee",
          margin: "12px 0",
        }}
      />

      {/* List */}
      <List
        itemLayout="horizontal"
        dataSource={members}
        renderItem={(item) => (
          <List.Item
            style={{ paddingLeft: 0, paddingRight: 0 }}
            actions={[<RightOutlined />]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} size={44} />}
              title={<Text strong>{item.name}</Text>}
              description={<Text type="secondary">{item.role}</Text>}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default DepartmentCard;
