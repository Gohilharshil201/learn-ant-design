import { Button, message, Popconfirm, Space, Table, Tag } from "antd";

const UserTable = () => {
  const dataSource = [
    {
      key: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Admin",
      active: true,
    },
    {
      key: "2",
      name: "Bob Smith",
      email: "bob@example.com",
      role: "Editor",
      active: false,
    },
    {
      key: "3",
      name: "Charlie Lee",
      email: "charlie@example.com",
      role: "Viewer",
      active: true,
    },
  ];

  const handleEdit = (record) => {
    message.success(`Edit ${record.name}`);
  };

  const handleDelete = () => {
    message.success(`Deleted user with key: ${key}`);
  };

  const column = [
    {
      title: "👤 Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "📧 Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      filters: [
        { text: "Admin", value: "Admin" },
        { text: "Editor", value: "Editor" },
        { text: "Viewer", value: "Viewer" },
      ],
      onFilter: (value, record) => record.role === value,
      render: (role) => <Tag color="blue">{role}</Tag>,
    },
    {
      title: "✅ Status",
      dataIndex: "active",
      key: "active",
      render: (active) =>
        active ? (
          <Tag color="green"> Active</Tag>
        ) : (
          <Tag color="red">Inactive</Tag>
        ),
    },
    {
      title: "⚙️ Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={(value) => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button danger type="link">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div style={{ padding: 30 }}>
        <Table
          columns={column}
          dataSource={dataSource}
          pagination={{ pageSize: 3 }}
          rowKey="key"
        ></Table>
      </div>
    </>
  );
};

export default UserTable;
