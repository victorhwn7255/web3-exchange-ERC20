import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x57CF9EA190C40Cc93638C3bc1e2551d59197CD43"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/gBDNLRkbD-EgNz6wNJappPF9ld2ez9q8",
  },
};