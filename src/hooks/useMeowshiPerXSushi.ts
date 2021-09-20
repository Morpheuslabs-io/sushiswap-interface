import { useEffect, useState } from 'react'
import { ChainId } from '@sushiswap/sdk'

import { BigNumber } from 'ethers'
import { XSUSHI } from '../constants'
import { useBentoBoxContract } from './useContract'

export default function useMeowshiPerXSushi() {
  const bentoboxContract = useBentoBoxContract()
  const [state, setState] = useState<[BigNumber, BigNumber]>([BigNumber.from('0'), BigNumber.from('0')])

  useEffect(() => {
    if (!bentoboxContract) return
    ;(async () => {
      const toShare = await bentoboxContract.toShare(
        XSUSHI[ChainId.MAINNET].address,
        '1'.toBigNumber(XSUSHI[ChainId.MAINNET].decimals),
        false
      )
      const toAmount = await bentoboxContract.toAmount(
        XSUSHI[ChainId.MAINNET].address,
        '1'.toBigNumber(XSUSHI[ChainId.MAINNET].decimals),
        false
      )
      setState([toShare, toAmount])
    })()
  }, [bentoboxContract])

  return state
}
