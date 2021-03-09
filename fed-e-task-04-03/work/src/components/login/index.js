import SignIn from '../login/component/SignIn'
import SignUp from '../login/component/SignUp'
import { Tabs, Tab, TabList, TabPanel, TabPanels, Box } from '@chakra-ui/react'
function Login() {
  return <Box w="500px" h="600px" mx="auto" px="10" bgColor="#fff">
    <Tabs align="center" mt="50px">
      <TabList border="none">
        <Tab>登录</Tab>
        <Tab ml={8}>注册</Tab>
      </TabList>
      <TabPanels>
        <TabPanel><SignIn></SignIn></TabPanel>
        <TabPanel><SignUp></SignUp></TabPanel>
      </TabPanels>
    </Tabs>
  </Box>;  
}

export default Login;
