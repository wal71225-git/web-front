import { Box, Container, Button, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'
// import logo from '../components/images/logo.png'
const SignInAndJoin = styled.div`
	height: 36px;
	line-height: 36px;
	border-left: 1px solid #393939;
	border-right: 1px solid #393939;
	padding: 0 6px;
	float: left;
	color: #fff;
	height: 10px;
`
export default function Header() {
    return <Box h={12} bgColor="#202020" borderBottom="1px solid #393939">
        <Container h={12} maxW={1200} >
					<SignInAndJoin>
							<Button bgColor="#202020">登录</Button>
							<Button bgColor="#202020">注册</Button>
					</SignInAndJoin>
        </Container>
    </Box>
}