import React from 'react'
import Tabs from './Tabs'

const PLATFORM_MAP = [
  {
    value: 'web',
    label: 'Web'
  },
  {
    value: 'ios',
    label: 'iOS'
  },
  {
    value: 'android',
    label: 'Android'
  },
  {
    value: 'flutter',
    label: 'Flutter'
  },
  {
    value: 'react',
    label: 'React'
  },
  {
    value: 'vue',
    label: 'Vue'
  },
  {
    value: 'html',
    label: 'HTML'
  },
  {
    value: 'javascript',
    label: 'JavaScript'
  },
  {
    value: 'react-native',
    label: 'React Native'
  },
  {
    value: 'unity',
    label: 'Unity'
  },
  {
    value: 'csharp',
    label: '.NET'
  },
  {
    value: 'mobile',
    label: 'Mobile'
  },
  {
    value: 'wagmi',
    label: 'Wagmi'
  },
  {
    value: 'wagmi1',
    label: 'Wagmi v1'
  },
  {
    value: 'other',
    label: 'Other'
  },
  {
    value: 'viem',
    label: 'Viem'
  },
  {
    value: 'ethers',
    label: 'Ethers'
  },
  {
    value: 'ethers5',
    label: 'Ethers v5'
  },
  {
    value: 'web3js',
    label: 'Web3.js'
  },
  {
    value: 'evm',
    label: 'EVM'
  },
  {
    value: 'solana',
    label: 'Solana'
  },
  {
    value: 'wagmi + solana',
    label: 'Wagmi + Solana'
  },
  {
    value: 'wagmi + bitcoin',
    label: 'Wagmi + Bitcoin'
  },
  {
    value: 'ethers + solana',
    label: 'Ethers + Solana'
  },
  {
    value: 'ethers5 + solana',
    label: 'Ethers5 + Solana'
  },
  {
    value: 'basic',
    label: 'Basic'
  },
  {
    value: 'bitcoin',
    label: 'Bitcoin'
  }
]

const valuesBuilder = activeOptions => {
  const values = PLATFORM_MAP.filter(({ value }) => activeOptions.includes(value))
  return values.length ? values : PLATFORM_MAP
}

export default function PlatformTabs(props) {
  const values = valuesBuilder(props.activeOptions)
  return (
    <>
      <Tabs
        className="platform-tabs"
        queryString={props.queryString || 'platform'}
        values={values}
        {...props}
      />
    </>
  )
}
