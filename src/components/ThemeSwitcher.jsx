import React from "react";
import { Space, Typography, Switch } from "antd";
const { Text } = Typography;
const ThemeSwitcher = ({ isdark, setIsDark, isCompact, setIsCompact }) => {
  return (
    <>
      <div>
        <Space>
          <span>
            <Text>🌙 Dark Mode</Text>
            <Switch
              checked={isdark}
              onChange={(val) => setIsDark(val)}
              style={{ marginLeft: 8 }}
            />
          </span>
          <span>
            <Text>📏 Compact Mode</Text>
            <Switch
              checked={isCompact}
              onChange={(val) => setIsCompact(val)}
              style={{ marginLeft: 8 }}
            />
          </span>
        </Space>
      </div>
    </>
  );
};

export default ThemeSwitcher;
