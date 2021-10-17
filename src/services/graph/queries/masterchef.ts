import gql from 'graphql-tag'

const MASTERCHEF_ADDRESS_MATIC_TESTNET = '0xE09D60aF665FF32c13df3b17d4AEa7fd89146E15'

export const poolsQuery = gql`
  query poolsQuery(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $block: Block_height
    $where: Pool_filter! = { allocPoint_gt: 0, accSushiPerShare_gt: 0 }
  ) {
    pools(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      block: $block
      where: $where
    ) {
      id
      pair
      allocPoint
      lastRewardBlock
      accSushiPerShare
      balance
      userCount
      owner {
        id
        sushiPerBlock
        totalAllocPoint
      }
    }
  }
`

export const masterChefV1PairAddressesQuery = gql`
  query masterChefV1PairAddresses(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $where: Pool_filter! = { allocPoint_gt: 0, accSushiPerShare_gt: 0 }
  ) {
    pools(first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, where: $where) {
      id
      allocPoint
      accSushiPerShare
      pair {
        id
      }
    }
  }
`

export const masterChefV1TotalAllocPointQuery = gql`
  query masterChefV1TotalAllocPoint($id: String! = "${MASTERCHEF_ADDRESS_MATIC_TESTNET}") {
    masterChef(id: $id) {
      id
      totalAllocPoint
    }
  }
`

export const masterChefV1TotalAllocPointQuery_Mumbai = gql`
  query masterChefV1TotalAllocPoint($id: String! = "${MASTERCHEF_ADDRESS_MATIC_TESTNET}") {
    masterChef(id: $id) {
      id
      totalAllocPoint
    }
  }
`

export const masterChefV1SushiPerBlockQuery = gql`
  query masterChefV1SushiPerBlock($id: String! = "${MASTERCHEF_ADDRESS_MATIC_TESTNET}") {
    masterChef(id: $id) {
      id
      sushiPerBlock
    }
  }
`
