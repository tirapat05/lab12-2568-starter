import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps {
  userName: string;
  type?: "admin" | "student";
}
//export type { SidebarProps };
export default function Sidebar({
  userName = "Tirapat Ruangkling :",
  type = "student",
}: SidebarComponentProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box p={10}>
        <Group>
          <Indicator size={16} withBorder>
            <Avatar size="lg" radius="xl" src="fewww.jpg"></Avatar>
          </Indicator>
          <Text>User : </Text>
          <Text>{userName}</Text>
          <Text>{type}</Text>
        </Group>
      </Box>
    </Stack>
  );
}
