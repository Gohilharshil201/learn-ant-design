import Basic from "./components/Basic";
import WelcomeCard from "./components/WelcomeCard";
import UserGrid from "./components/UserGrid";
import UserForm from "./components/UserForm";
import AdvancedUserForm from "./components/AdvancedUserForm";
import { useState } from "react";
import { ConfigProvider, theme as AntTheme } from "antd";
import ThemeSwitcher from "./components/ThemeSwitcher";
import UserNewForm from "./components/UserNewForm";
import UserTable from "./components/UserTable";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? AntTheme.darkAlgorithm : AntTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#722ED1",
          borderRadius: 10,
          fontSize: 16,
        },
      }}
      componentSize={isCompact ? "small" : "middle"}
    >
      <div style={{ padding: 20 }}>
        <ThemeSwitcher
          isDark={isDark}
          setIsDark={setIsDark}
          isCompact={isCompact}
          setIsCompact={setIsCompact}
        />
        <UserTable />
        <UserNewForm />
        <Basic />
        <WelcomeCard />
        <UserGrid />
        <UserForm />
        <AdvancedUserForm />
      </div>
    </ConfigProvider>
  );
}

export default App;
