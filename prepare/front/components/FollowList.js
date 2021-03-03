import React, { useMemo } from "react";
import { Button, Card, List } from "antd";
import PropTypes from "prop-types";
import { StopOutlined } from "@ant-design/icons";

const FollowList = ({ header, data }) => {
  const ListStyle = useMemo(() => ({ marginBottom: 20 }), []);
  const gridStyle = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
  const loadMoreStyle = useMemo(
    () => ({ textAlign: "center", margin: "10px 0" }),
    []
  );

  return (
    <List
      style={ListStyle}
      grid={gridStyle}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={loadMoreStyle}>
          <Button>더보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
