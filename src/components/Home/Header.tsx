import { Flex, Heading } from "@chakra-ui/react"
import { EFLetterAnimated } from "./EFLetterAnimated"

export const Header = () => {
  return (
    <Flex>

      <Heading display="flex" flexDir="column" mx="50" my="50" justifyContent="space-between" h="270px">
        <EFLetterAnimated />
      </Heading>

    </Flex>
  )
}
