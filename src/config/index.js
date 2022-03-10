import stakingAbi from '../utils/staking-abi.json';
import tokenAbi from '../utils/token-abi.json';

export default {
  cloot: {
    contract: '0x0f51492de12C05E2BaA8280FFf0F9CDF53312F94',
    abi: tokenAbi,
    symbol: 'CLOOT',
    decimals: 18,
  },
  staking: {
    contract: '0x2d7b2AAc11D292F1fe167321dc1726fF8501C241',
    abi: stakingAbi,
  },
};
