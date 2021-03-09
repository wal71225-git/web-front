import React from 'react'
import { Input, InputGroup, Stack, InputLeftAddon, Checkbox, Flex, Link, Box, Spacer, Button, Avatar } from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import weachat from "../image/weachat.png";
import sina from "../image/sina.png";
import qq from "../image/qq.png";
function SignIn() {
    return (<Box>
    <form>
        <Stack>
          <InputGroup>
            <InputLeftAddon h={14} children={<FaUserAlt/>}/>
            <Input placeholder="手机号或邮箱" h={14} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon h={14} children={<FaLock/>}/>
            <Input type="password" h={14} placeholder="密码"/>
          </InputGroup>
        </Stack>
        <Flex mt={5}>
          <Box>
            <Checkbox colorScheme="blue">
              记住我
            </Checkbox>
          </Box>
          <Spacer />
          <Box>
            <Link>登录遇到问题？</Link>
          </Box>
        </Flex>
        <Button w="100%" mt={5} h={14} bgColor="#3194d0"  borderRadius="25px" colorScheme="teal" fontSize="20px">登录</Button>
    </form>
      <Box mt={5}>社交帐号登录</Box>
      <Box textAlign="center" mt={5}>
          <Avatar w={8} h={8} src={sina} />
          <Avatar mx={5} w={8} h={8} src={weachat} />
          <Avatar w={8} h={8} src={qq} />
      </Box>
    </Box>)
}
export default SignIn
