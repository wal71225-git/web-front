import React from 'react'
import { Input, InputGroup, Stack, InputLeftAddon, Checkbox, Flex, Link, Box, Spacer, Button, Avatar } from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import weachat from "../image/weachat.png";
import qq from "../image/qq.png";
function SignIn() {
    return (<Box>
    <form>
        <Stack>
          <InputGroup>
            <InputLeftAddon h={14} children={<FaUserAlt/>}/>
            <Input placeholder="你的昵称" h={14} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon h={14} children={<FaUserAlt/>}/>
            <Input placeholder="手机号" h={14} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon h={14} children={<FaLock/>}/>
            <Input type="password" h={14} placeholder="设置密码"/>
          </InputGroup>
        </Stack>
          <Box mt={3}>
          点击 “注册” 即表示您同意并愿意遵守简书
          </Box>
          <Box>
            <Link>用户协议</Link>和<Link>隐私政策</Link>
          </Box>
        <Button w="100%" mt={5} h={14} bgColor="#42c02e"  borderRadius="25px" colorScheme="teal" fontSize="20px">注册</Button>
    </form>
      <Box mt={5}>社交帐号直接注册</Box>
      <Box textAlign="center" mt={5}>
          <Avatar mx={5} w={8} h={8} src={weachat} />
          <Avatar w={8} h={8} src={qq} />
      </Box>
    </Box>)
}
export default SignIn
