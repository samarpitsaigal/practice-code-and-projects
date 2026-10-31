import { Button, Container, Flex, Heading, MenuButton, MenuItem, MenuList,Menu, HStack,Box, Icon } from '@chakra-ui/react'
import {FaBars, FaUserTie} from 'react-icons/fa'

const TopNav = ({titel , onOpen}) => {
  return (
    <Box px="4" bg="white">
      <HStack justify="space-between"  h="16" maxW="70rem"  mx="auto">
        <Icon as={FaBars} onClick={onOpen} display={{lg:"none"}} />
        <Heading fontWeight="medium" fontSize="28px">{titel}</Heading>
        <Menu>
          <MenuButton  >
            <Icon as={FaUserTie} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
    </HStack>
    </Box>
  )
}

export default TopNav