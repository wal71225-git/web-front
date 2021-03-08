import SignIn from '../login/component/SignIn'
import SignUp from '../login/component/SignUp'
import { Tabs, Tab, TabList, TabPanel, TabPanels, Box } from '@chakra-ui/react'
function Login() {
  return <Box>
    <Tabs>
      <TabList>
        <Tab>登录</Tab>
        <Tab>注册</Tab>
      </TabList>
      <TabPanels>
        <TabPanel><SignIn></SignIn></TabPanel>
        <TabPanel><SignUp></SignUp></TabPanel>
      </TabPanels>
    </Tabs>
  </Box>;  
}

export default Login;
