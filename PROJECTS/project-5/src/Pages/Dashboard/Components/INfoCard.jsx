import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const INfoCard = ({imgUrl,text,tagText,inverted}) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat" bgColor={inverted?"p.purple":"white"}>
      <Tag color={inverted ? "p.purple" : "white "} bg={inverted?"white":"p.purple"} borderRadius="full">{tagText}</Tag>
      <Text mt="4" fontWeight="medium" textStyle="h5" color={inverted?"white":"black"}>{text}</Text>
    </CustomCard>
  )
}

export default INfoCard