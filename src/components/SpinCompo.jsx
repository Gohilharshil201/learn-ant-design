import { Button, message, Modal, Space, Spin } from "antd";
import { useState } from "react";

const SpinCompo = () => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Loaded successfully! 🚀");
    }, 2000);
  };

  const showDeleteConfirmation = () => {
    Modal.confirm({
      title: "Are you sure you want to delete this item?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        message.success("Item Deleted!");
      },
      onCancel() {
        message.success("Cancelled");
      },
    });
  };
  return (
    <>
      <div style={{ padding: 30 }}>
        <Space>
          <Button type="primary" onClick={showLoading}>
            ⏳ Simulate Loading
          </Button>
          <Button danger onClick={showDeleteConfirmation}>
            ❌ Show Delete Confirmation
          </Button>
          {loading && (
            <div style={{ margin: 20 }}>
              <Spin tip="Loading..." size="large"></Spin>
            </div>
          )}
        </Space>
      </div>
    </>
  );
};
export default SpinCompo;
