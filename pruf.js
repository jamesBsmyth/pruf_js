// Class which constructs a full suite of functions that interact with the PRüF network.

//
import bs58 from "bs58";
import abis from "./ABIs.js";

export default class PRUF {
  constructor(web3Provider, chainId, fetch = false, logs = false) {
    
    //var abis = _abis.default;
    const addressTable = {
      m1tn: {
        CLOCK: "0x15C6E67cD0577f117E3784d0104AF21AD230E13a",
        DAO_A: "0x45f7c1eC0F0e19674A699577F9d89fB5424Acf1F",
        DAO_B: "0x0d67bCF2Ff3C8971E3b44B94d4812AB5Cacf4E1c",
        DAO_STOR: "0x2b3b6BCAa49e6d37866f7bc5B6C4d73b53108c03",
        DAO: "0x2eF59f1De2264643Dac4E92dCC9865510D11F966",
        STOR: "0xE1916dA4CFB57D5d725D9c310cD63ce1310F4694",
        NODE_STOR: "0x2C2e741543670E97BaEDf7a4467e8Ed35f44c11f",
        NODE_BLDR: "0x5993802ae8d5f5285728a41B3e9A3Af0c45301bD",
        UTIL_TKN: "0x03240a23d3BBEF0253A2935F61591c83EeCE4429",
        A_TKN: "0xd8D8D1e8e42e823d4E62Ed65870E76ec35956D6A",
        NODE_TKN: "0x2F2068a5162657842bf82aB4B868129A24B233Df",
        NODE_MGR: "0x045a323B95Cc3a8cB0497fa8e0Aeca1500DdD7A1",
        APP_NC: "0x45f7c1eC0F0e19674A699577F9d89fB5424Acf1F",
        RAVE: "0x7D43c4d4aF2476004f1326C99F3437033142514E",
      },
      liberty: {
        STOR: "0xD293EcfFEF05174F566c7F997160F71461504FCC",
        CLOCK: "0x76c7d98D74c29B5c6f42A8Db78a3b12D36432a1E",
        DAO_A: "0xB9e66f90d026CA3246772C18c441175e78eC5Dfb",
        DAO_B: "0x239142569790B9c6896F37DA7fffaaA3123Df2db",
        DAO_STOR: "0xfA82df4faaCa4EFCcAf81E8432ebfc2bB8f1522a",
        DAO: "0x626983f13ED43a3FdF7593A89e939611b2366833",
        NODE_STOR: "0xC352F23257e24c6d02832b9634aBb26099A7a4F1",
        NODE_BLDR: "0xcd2dCEE0EaB1405d6e411cF2b8C6361a8d9493d5",
        UTIL_TKN: "0x0e1a5ba637ACD0c1A9B9CFd3ECc49be19df03073",
        A_TKN: "0xbD8d84d94C8951f44eE861850295E7eC3D913e9f",
        NODE_TKN: "0x1cE63E9af61Eb40db08d4748C61d8c08364F4F8e",
        NODE_MGR: "0x411a16e906Fd899cD88775f0ea8127Ff406d0b05",
        APP_NC: "0x25a91D21842f5CcCD175E5342F944d3B768397cF",
        RAVE: "0x29D45584BAccA5a3853C337974c6dbd3b3F81DAB",
      },
      kovan: {
        STOR: "0x4371451A68321CD48b189c2dB802970740F128d3",
        CLOCK: "0xd3f4f38C4f31E40E73fb983a13D02932DC7594f0",
        DAO_A: "0xC77aB54F7408395934527F693e09559e9257215c",
        DAO_B: "0x2C23333de3E46Db8613E6bF445454f9a656AEe5A",
        DAO_STOR: "0xF42523e2CfC47aF0ec07B8Fb366203e7D8b129f9",
        DAO: "0x83011a37b5d25143d33Fe28e2E22F07D00c9074f",
        NODE_STOR: "0xc56Af938B5489411AeB40f88CE692Aec6b84F4Ae",
        NODE_BLDR: "0x9796D3CdE91916341568fF165a1507725186FC30",
        UTIL_TKN: "0x36e0FdEADC24D2f5FdDe1026e413c30949D2eA68",
        A_TKN: "0x0846b075766F1C561EcFeA2419e790362715497B",
        NODE_TKN: "0x840E7eBa06BD5316Be4a88624402739B9a0dCCbA",
        NODE_MGR: "0xfA82df4faaCa4EFCcAf81E8432ebfc2bB8f1522a",
        APP_NC: "0x52578a2BEe485652690271a7b7E66ae4F1E7F421",
        RAVE: "0xA050BfecfBA9ac7D613d63Dd5C413fcf06d359Fc",
      },
      mumbai: {
        UTIL_TKN: "0x45f7c1eC0F0e19674A699577F9d89fB5424Acf1F",
        STAKE_TKN: "0x8Cea13A98a0143cfab5336fF5103C41f874d64Ea",
        STAKE_VAULT: "0xC367fA343B0FA2960cd77eaF50B5F5448b68d460",
        REWARDS_VAULT: "0x25feAe7B52E5a4373D8EA340Ad30699a60BF0BBB",
        EO_STAKING: "0xB30c01fC29f97339E1eb6890a56CA1a907ca961D",
        
      },
      ethereum: {
        UTIL_TKN: "0xa49811140e1d6f653dec28037be0924c811c4538",
        STAKE_TKN: "0xA39E7b9EFd9801A8da6B1F2d3bf7c381599D06bc",
        STAKE_VAULT: "0xCc10F1D65Cf5b527aD2007178373728Bf348DedC",
        REWARDS_VAULT: "0xa6aee6FC46aF26797cBF93c3314834185200eaC5",
        EO_STAKING: "0x8B7e69886b944BC7456b4CAB471BFe99e61Dd1Be",
      },
      polygon: {
        STOR: "0x2E327c6c45E40a20D236AB79D1eb38cBc9bB0527",
        UD_NB: "0x172aF765E59e8D7e955C017D183f59Ba3a791669",
        CLOCK: "0xD747d80300c997b416aA148A84491B5A9644bc86",
        DAO_A: "0xD9F4d0a76a4Ed63E2934Fc413240aa0A0179Bc00",
        DAO_B: "0x238E50DC4Bdd7586657CC36865c103A156DA1E8C",
        DAO_STOR: "0x8613B56fd7fcC78Bb2EceA84c61ecd6F5a8Bc3f4",
        DAO: "0xB35FC428ddB258f237367969A4845088B25BB5d9",
        NODE_STOR: "0xd0e236C131DBAa030650201FAc9284345EA62789",
        NODE_BLDR: "0x9796D3CdE91916341568fF165a1507725186FC30",
        A_TKN: "0xd076f69BC9f8452CE54711ff2A7662Ed8Df8A74b",
        NODE_TKN: "0xCB389069098bfA8f5bfF97be1DDaa8a5a1F7B9c6",
        NODE_MGR: "0xbFB5798F4825b4f3792Ef80742533D967D1771D4",
        APP_NC: "0x473430229710F45e845A7C28c53B8043B16cd94C",
        UTIL_TKN: "0xAdf72D32E511eE00c6E0FF5D62Cd5C7C40A6aDEA",
        STAKE_TKN: "0xd68bc9a69343dde6ebef1546bd09f3f43fe308c8",
        STAKE_VAULT: "0x7c0823f1c216b80dc3a07d5896640bca64013613",
        REWARDS_VAULT: "0x9f700203681b15c5618a6f51e01e9620b591208d",
        EO_STAKING: "0x388878e143b0c4ae2637d81bec6e173cace9b1ed",
      },
      m1c1: {
        STOR: "0x25a91D21842f5CcCD175E5342F944d3B768397cF",
        // UD_NB: "0x172aF765E59e8D7e955C017D183f59Ba3a791669",
        CLOCK: "0x29D45584BAccA5a3853C337974c6dbd3b3F81DAB",
        DAO_A: "0x239142569790B9c6896F37DA7fffaaA3123Df2db",
        DAO_B: "0x626983f13ED43a3FdF7593A89e939611b2366833",
        DAO_STOR: "0x76c7d98D74c29B5c6f42A8Db78a3b12D36432a1E",
        DAO: "0xfA82df4faaCa4EFCcAf81E8432ebfc2bB8f1522a",
        NODE_STOR: "0x1cE63E9af61Eb40db08d4748C61d8c08364F4F8e",
        NODE_BLDR: "0x0e1a5ba637ACD0c1A9B9CFd3ECc49be19df03073",
        A_TKN: "0xC352F23257e24c6d02832b9634aBb26099A7a4F1",
        NODE_TKN: "0xbD8d84d94C8951f44eE861850295E7eC3D913e9f",
        NODE_MGR: "0xD293EcfFEF05174F566c7F997160F71461504FCC",
        APP_NC: "0x411a16e906Fd899cD88775f0ea8127Ff406d0b05",
        UTIL_TKN: "0xcd2dCEE0EaB1405d6e411cF2b8C6361a8d9493d5",
      },
    };

    const resolveContracts = async (_web3, _net) => {
      let _contracts = {};
      let addresses = Object.values(addressTable[_net]);
      let names = Object.keys(addressTable[_net]);

      console.log(abis);

      if (logs) console.log({ addresses, names });

      for (let i = 0; i < addresses.length; i++) {
        let name = names[i];
        //console.log(name)
        if (abis[name]) {
          if (logs) console.log(`Building contract ${name}`);
          _contracts[name] = new _web3.eth.Contract(abis[name], addresses[i]);
        }
      }

      if (fetch) {
        console.log("Network fetching is currently unavailable, and will be re-incorporated in a future release.")
        // const STOR = _contracts.STOR;

        // await STOR.methods
        //   .resolveContractAddress("NODE_STOR")
        //   .call(function (error, result) {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       //console.log(result);
        //       _contracts.NODE_STOR = new _web3.eth.Contract(
        //         abis.NODE_STOR,
        //         result
        //       );
        //     }
        //   });

        // await STOR.methods
        //   .resolveContractAddress("NODE_BLDR")
        //   .call(function (error, result) {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       //console.log(result);
        //       _contracts.NODE_BLDR = new _web3.eth.Contract(
        //         abis.NODE_BLDR,
        //         result
        //       );
        //     }
        //   });

        // await STOR.methods
        //   .resolveContractAddress("APP_NC")
        //   .call(function (error, result) {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       //console.log(result);
        //       _contracts.APP_NC = new _web3.eth.Contract(abis.APP_NC, result);
        //     }
        //   });

        // await STOR.methods
        //   .resolveContractAddress("NODE_MGR")
        //   .call(function (error, result) {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       //console.log(result)
        //       _contracts.NODE_MGR = new _web3.eth.Contract(
        //         abis.NODE_MGR,
        //         result
        //       );
        //     }
        //   });

        // await STOR.methods
        //   .resolveContractAddress("NODE_TKN")
        //   .call(function (error, result) {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       //console.log(result);
        //       _contracts.NODE_TKN = new _web3.eth.Contract(
        //         abis.NODE_TKN,
        //         result
        //       );
        //     }
        //   });

        // await STOR.methods
        //   .resolveContractAddress("A_TKN")
        //   .call(function (error, result) {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       //console.log(result);
        //       _contracts.A_TKN = new _web3.eth.Contract(abis.A_TKN, result);
        //     }
        //   });

        // await STOR.methods
        //   .resolveContractAddress("UTIL_TKN")
        //   .call(function (error, result) {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       //console.log(result);
        //       _contracts.UTIL_TKN = new _web3.eth.Contract(
        //         abis.UTIL_TKN,
        //         result
        //       );
        //     }
        //   });
      }

      return _contracts;
    };

    const assembleInterface = async (contracts) => {
      if (!contracts)
        return console.log(
          "%c PRUF_ERR: Failed to init, no given contracts for interface",
          "color: yellow, font-weight: bold"
        );
      //@dev add decorate functions, custodialApp, verify, wrap

      const hashAlgo = web3Provider.utils.soliditySha3;

      let faucet = {};

      if (contracts.RAVE) {
        faucet = {
          getPRUF: contracts.RAVE.methods.bumpMe,
          getNode: contracts.RAVE.methods.purchaseNode,
          finalize: contracts.RAVE.methods.setNonMutableData,
          setOperationCost: contracts.RAVE.methods.setOperationCosts,
          updateImportStatus: contracts.RAVE.methods.updateImportStatus,
          updateCAS: contracts.RAVE.methods.updateNodeCAS,
          authorizeUser: contracts.RAVE.methods.addUser,
        }
      }

      const call = {
        node: {
          getUdIdFromDomain: contracts.UD_NB ? 
          async (domain, tld) => {
            if (!domain) return console.error(`PRUF_ERR: Invalid input: ${domain}`);
            if (!tld) return console.error(`PRUF_ERR: Invalid input: ${tld}`);
            let id = null;

            await contracts.NODE_STOR.methods
              .getTokenIdFromDomain(domain, tld)
              .call((error, result) => {
                if (error) {
                  console.log(error);
                } else {
                  return id = result;
                }
              });

            return result;
          } : null,
          isNameAvailable: async (name) => {
            if (!name) return console.error(`PRUF_ERR: Invalid input: ${name}`);

            let bool = false;

            await contracts.NODE_STOR.methods
              .resolveNode(name)
              .call((error, result) => {
                if (error) {
                  console.log(error);
                } else {
                  if (Number(result) < 1) {
                    return (bool = true);
                  }
                }
              });

            return bool;
          },
          priceData: async () => {
            let priceData = "Not Found";

            await contracts.NODE_MGR.methods
              .currentNodePricingInfo()
              .call((error, result) => {
                if (!error) {
                  console.log(result)
                  return (priceData = {
                    currentNodeIndex: result["0"],
                    currentNodePrice: String(Number(web3Provider.utils.fromWei(result["1"])) + Number(web3Provider.utils.fromWei(result["2"]))),
                  });
                }
              });

            return priceData;
          },
          switchAt: async (nodeId, position) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);
            if (position < 0)
              return console.error(`PRUF_ERR: Invalid input: ${position}`);

            let state = "Not Found";

            await contracts.NODE_STOR.methods
              .getSwitchAt(nodeId, position)
              .call((error, result) => {
                if (!error) {
                  return (state = result);
                }
              });

            return state;
          },
          extendedData: async (nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);

            let state = "Not Found";

            await contracts.NODE_STOR.methods
              .getExtNodeData(nodeId)
              .call((error, result) => {
                if (!error) {
                  return (state = result);
                }
              });

            return state;
          },
          importStatus: async (nodeId, otherNodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);
            if (!otherNodeId)
              return console.error(`PRUF_ERR: Invalid input: ${otherNodeId}`);

            let state = "Not Found";

            await contracts.NODE_STOR.methods
              .getImportstatus(nodeId, otherNodeId)
              .call((error, result) => {
                if (!error) {
                  return (state = result);
                }
              });

            return state;
          },
          localNode: async (foreignNodeId) => {
            if (!foreignNodeId)
              return console.error(`PRUF_ERR: Invalid input: ${foreignNodeId}`);

            let localNode = "Not Found";

            await contracts.NODE_STOR.methods
              .getLocalNode(foreignNodeId)
              .call((error, result) => {
                if (!error) {
                  return (localNode = result);
                }
              });

            return localNode;
          },
          discount: async (nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);

            let discount = "Not Found";

            await contracts.NODE_STOR.methods
              .getNodeDiscount(nodeId)
              .call((error, result) => {
                if (!error) {
                  return (discount = result);
                }
              });

            return discount;
          },
          numberOfUsers: async (nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);

            let userCount = "Not Found";

            await contracts.NODE_STOR.methods
              .getNumberOfUsers(nodeId)
              .call((error, result) => {
                if (!error) {
                  return (userCount = result);
                }
              });

            return userCount;
          },
          record: async (nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);

            let nodeData = "Not Found";

            await contracts.NODE_STOR.methods
              .getNodeData(nodeId)
              .call((error, result) => {
                if (!error) {
                  return (nodeData = {
                    id: nodeId,
                    name: result.name,
                    root: result.nodeRoot,
                    custodyType: result.custodyType,
                    managementType: result.managementType,
                    storageProvider: result.storageProvider,
                    discount: result.discount,
                    referenceAddress: result.referenceAddress,
                    switches: result.switches,
                    extData: result["IPFS"],
                  });
                } else return (nodeData = {});
              });

            return nodeData;
          },
          name: async (nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);

            let name = "Not Found";

            await contracts.NODE_STOR.methods
              .getNodeName(nodeId)
              .call((error, result) => {
                if (!error) {
                  return (name = result);
                }
              });

            return name;
          },
          invoiceForOperation: async (nodeId, operationIndex) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);
            if (!operationIndex)
              return console.error(
                `PRUF_ERR: Invalid input: ${operationIndex}`
              );
            let costInfo = "Not Found";

            await contracts.NODE_STOR.methods
              .getInvoice(nodeId, operationIndex)
              .call((error, result) => {
                if (!error) {
                  return (costInfo = {
                    total: String(
                      Number(web3Provider.utils.fromWei(result.rootPrice)) +
                        Number(web3Provider.utils.fromWei(result.NTHprice))
                    ),
                    node: web3Provider.utils.fromWei(result.NTHprice),
                    root: web3Provider.utils.fromWei(result.rootPrice),
                    beneficiary: result.NTHaddress,
                    rootBeneficiary: result.rootAddress,
                  });
                }
              });

            return costInfo;
          },
          userType: async (address, nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);

            let typeId = "Not Found";

            await contracts.NODE_STOR.methods
              .getUserType(web3Provider.utils.soliditySha3(address), nodeId)
              .call((error, result) => {
                if (!error) {
                  return (typeId = result);
                }
              });

            return typeId;
          },
          id: async (name) => {
            if (!name) return console.error(`PRUF_ERR: Invalid input: ${name}`);

            let nodeId = "Not Found";

            await contracts.NODE_STOR.methods
              .resolveNode(name)
              .call((error, result) => {
                if (!error) {
                  return (nodeId = result);
                }
              });

            return nodeId;
          },
          isSameRoot: async (nodeId1, nodeId2) => {
            if (!nodeId1)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId1}`);
            if (!nodeId2)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId2}`);

            let bool = false;

            await contracts.NODE_STOR.methods
              .isSameRootNode(nodeId1, nodeId2)
              .call((error, result) => {
                if (!error && result === "170") {
                  return (bool = true);
                }
              });

            return bool;
          },
          balanceOf: async (address) => {
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);

            let nodeBalance = "Not Found";

            await contracts.NODE_TKN.methods
              .balanceOf(address)
              .call((error, result) => {
                if (!error) {
                  return (nodeBalance = result);
                }
              });

            return nodeBalance;
          },
          tokenExists: async (nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);

            let bool = false;

            await contracts.NODE_TKN.methods
              .tokenExists(nodeId)
              .call((error, result) => {
                if (!error && result === "170") {
                  return (bool = true);
                }
              });

            return bool;
          },
          heldNodeAtIndex: async (address, index) => {
            if (!index)
              return console.error(`PRUF_ERR: Invalid input: ${index}`);
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);

            let nodeId = "Not Found";

            await contracts.NODE_TKN.methods
              .tokenOfOwnerByIndex(address, index)
              .call((error, result) => {
                if (!error) {
                  return (nodeId = result);
                }
              });

            return nodeId;
          },
          nodeAtIndex: async (index) => {
            if (!index)
              return console.error(`PRUF_ERR: Invalid input: ${index}`);

            let nodeId = "Not Found";

            await contracts.NODE_TKN.methods
              .tokenByIndex(index)
              .call((error, result) => {
                if (!error) {
                  return (nodeId = result);
                }
              });

            return nodeId;
          },
          totalSupply: async () => {
            let totalNodeSupply = "Not Found";

            await contracts.NODE_TKN.methods
              .totalSupply()
              .call((error, result) => {
                if (!error) {
                  return (totalNodeSupply = result);
                }
              });

            return totalNodeSupply;
          },
          ownerOf: async (nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);

            let ownerOfNode = "Not Found";

            await contracts.NODE_TKN.methods
              .ownerOf(nodeId)
              .call((error, result) => {
                if (!error) {
                  return (ownerOfNode = result);
                }
              });

            return ownerOfNode;
          },
          URI: async (nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);

            let URI = "Not Found";

            await contracts.NODE_TKN.methods
              .tokenURI(nodeId)
              .call((error, result) => {
                if (!error) {
                  return (URI = result);
                }
              });

            return URI;
          },
          approvedOperator: async (nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);

            let operator = "Not Found";

            await contracts.NODE_TKN.methods
              .getApproved(nodeId)
              .call((error, result) => {
                if (!error) {
                  return (operator = result);
                }
              });

            return operator;
          },
          isApprovedForAll: async (owner, operator) => {
            if (!owner)
              return console.error(`PRUF_ERR: Invalid input: ${owner}`);
            if (!operator)
              return console.error(`PRUF_ERR: Invalid input: ${operator}`);

            let bool = false;

            await contracts.NODE_TKN.methods
              .isApprovedForAll(owner, operator)
              .call((error, result) => {
                if (!error) {
                  return (bool = result);
                }
              });

            return bool;
          },
        },
        asset: {
          recordExists: async (assetId) => {
            if (!assetId)
              return console.error(`PRUF_ERR: Invalid input: ${assetId}`);

            let bool = false;

            await contracts.STOR.methods
              .retrieveShortRecord(assetId)
              .call((error, result) => {
                if (!error && result[2] !== "0") {
                  return (bool = true);
                }
              });

            return bool;
          },

          isRightsHolder: async (assetId, rightsHash) => {
            if (!assetId)
              return console.error(`PRUF_ERR: Invalid input: ${assetId}`);
            if (!rightsHash)
              return console.error(`PRUF_ERR: Invalid input: ${rightsHash}`);

            let bool = false;

            await contracts.STOR.methods
              .verifyRightsHolder(assetId, rightsHash)
              .call((error, result) => {
                if (!error && result === "170") {
                  return (bool = true);
                }
              });

            return bool;
          },

          record: async (assetId) => {
            if (!assetId)
            
            return console.error(`PRUF_ERR: Invalid input: ${assetId}`);
            let record = {};

            await contracts.STOR.methods
              .retrieveShortRecord(assetId)
              .call((error, result) => {
                if (!error && result.nodeId !== "0") {
                  return (record = {
                    status: result[0],
                    modCount: result[1],
                    nodeId: result[2],
                    countDown: result[3],
                    softData1: result[5],
                    softData2: result[6],
                    hardData1: result[7],
                    hardData2: result[8],
                    numberOfTransfers: result[9]
                  });
                }
              });

            return record;
          },

          heldAssetAtIndex: async (address, index) => {
            if (!index)
              return console.error(`PRUF_ERR: Invalid input: ${index}`);
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);

            let assetId = "Not Found";

            await contracts.A_TKN.methods
              .tokenOfOwnerByIndex(address, index)
              .call((error, result) => {
                if (!error) {
                  assetId = web3Provider.utils.numberToHex(result);
                  if (assetId.length < 66) {
                    let paddingZeros = String(
                      Math.pow(10, 66 - assetId.length)
                    ).substring(1);
                    assetId =
                      assetId.substring(0, 2) +
                      paddingZeros +
                      assetId.substring(2, assetId.length);
                  }
                }
              });

            return assetId;
          },

          assetAtIndex: async (index) => {
            if (!index)
              return console.error(`PRUF_ERR: Invalid input: ${index}`);

            let assetId = "Not Found";

            await contracts.A_TKN.methods
              .tokenByIndex(index)
              .call((error, result) => {
                if (!error) {
                  assetId = web3Provider.utils.numberToHex(result);
                  if (assetId.length < 66) {
                    let paddingZeros = String(
                      Math.pow(10, 66 - assetId.length)
                    ).substring(1);
                    assetId =
                      assetId.substring(0, 2) +
                      paddingZeros +
                      assetId.substring(2, assetId.length);
                  }
                }
              });

            return assetId;
          },

          tokenExists: async (index) => {
            if (!index)
              return console.error(`PRUF_ERR: Invalid input: ${index}`);

            let bool = false;

            await contracts.A_TKN.methods
              .tokenExists(index)
              .call((error, result) => {
                if (!error && result === "170") {
                  return (bool = true);
                }
              });

            return bool;
          },

          balanceOf: async (address) => {
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);

            let assetBalance = "Not Found";

            await contracts.A_TKN.methods
              .balanceOf(address)
              .call((error, result) => {
                if (!error) {
                  return (assetBalance = result);
                }
              });

            return assetBalance;
          },

          totalSupply: async () => {
            let totalAssetSupply = "Not Found";

            await contracts.A_TKN.methods
              .totalSupply()
              .call((error, result) => {
                if (!error) {
                  return (totalAssetSupply = result);
                }
              });

            return totalAssetSupply;
          },

          ownerOf: async (assetId) => {
            if (!assetId)
              return console.error(`PRUF_ERR: Invalid input: ${assetId}`);

            let ownerOfAsset = "Not Found";

            await contracts.A_TKN.methods
              .ownerOf(assetId)
              .call((error, result) => {
                if (!error) {
                  return (ownerOfAsset = result);
                }
              });

            return ownerOfAsset;
          },

          URI: async (assetId) => {
            if (!assetId)
              return console.error(`PRUF_ERR: Invalid input: ${assetId}`);

            let URI = "Not Found";

            await contracts.A_TKN.methods
              .tokenURI(assetId)
              .call((error, result) => {
                if (!error) {
                  return (URI = result);
                }
              });

            return URI;
          },

          isColdWallet: async (address) => {
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);

            let bool = false;

            await contracts.A_TKN.methods
              .isColdWallet(address)
              .call((error, result) => {
                if (!error) {
                  return (bool = result);
                }
              });

            return bool;
          },

          isApprovedForAll: async (owner, operator) => {
            if (!owner)
              return console.error(`PRUF_ERR: Invalid input: ${owner}`);
            if (!operator)
              return console.error(`PRUF_ERR: Invalid input: ${operator}`);

            let bool = false;

            await contracts.A_TKN.methods
              .isApprovedForAll(owner, operator)
              .call((error, result) => {
                if (!error) {
                  return (bool = result);
                }
              });

            return bool;
          },

          baseURIFromStorageProvider: async (storageProvider) => {
            if (storageProvider < 0)
              return console.error(
                `PRUF_ERR: Invalid input: ${storageProvider}`
              );

            let baseURI = "Not Found";

            await contracts.A_TKN.methods
              .getBaseURIforStorageType(storageProvider)
              .call((error, result) => {
                if (!error) {
                  return (baseURI = result);
                }
              });

            return baseURI;
          },

          baseURIFromNode: async (nodeId) => {
            if (!nodeId)
              return console.error(`PRUF_ERR: Invalid input: ${nodeId}`);

            let baseURI = "Not Found";

            await contracts.A_TKN.methods
              .getBaseURIbyForNode(nodeId)
              .call((error, result) => {
                if (!error) {
                  return (baseURI = result);
                }
              });

            return baseURI;
          },

          approvedOperator: async (assetId) => {
            if (!assetId)
              return console.error(`PRUF_ERR: Invalid input: ${assetId}`);

            let operator = "Not Found";

            await contracts.A_TKN.methods
              .getApproved(assetId)
              .call((error, result) => {
                if (!error) {
                  return (operator = result);
                }
              });

            return operator;
          },
        },
        pruf: {
          balanceOf: async (address) => {
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);

            let prufBalance = "Not Found";

            await contracts.UTIL_TKN.methods
              .balanceOf(address)
              .call((error, result) => {
                if (!error) {
                  return (prufBalance = web3Provider.utils.fromWei(result));
                }
              });

            return prufBalance;
          },
          isColdWallet: async (address) => {
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);

            let bool;

            await contracts.UTIL_TKN.methods
              .isColdWallet(address)
              .call((error, result) => {
                if (!error && result === "170") {
                  return (bool = true);
                }
              });

            return bool;
          },
          totalSupply: async () => {
            let totalPrufSupply = "Now Found";

            await contracts.UTIL_TKN.methods
              .totalSupply()
              .call((error, result) => {
                if (!error) {
                  return (totalPrufSupply = result);
                }
              });

            return totalPrufSupply;
          },
        },
        stake: {
          checkRewards: async (stakeId) => {
            if (!stakeId)
              return console.error(`PRUF_ERR: Invalid input: ${stakeId}`);

            let rewards = "Not Found";

            await contracts.EO_STAKING.methods
              .checkEligibleRewards(stakeId)
              .call((error, result) => {
                if (!error) {
                  return (rewards = result);
                }
              });

            return rewards;
          },

          stakeLevel: async (level) => {
            if (!level)
              return console.error(`PRUF_ERR: Invalid input: ${level}`);

            let stakeDeal = "Not Found";

            await contracts.EO_STAKING.methods
              .getStakeLevel(level)
              .call((error, result) => {
                if (!error) {
                  return (stakeDeal = result);
                }
              });

            return stakeDeal;
          },

          record: async (stakeId) => {
            if (!stakeId)
              return console.error(`PRUF_ERR: Invalid input: ${stakeId}`);

            let stake = "Not Found";

            await contracts.EO_STAKING.methods
              .stakeInfo(stakeId)
              .call((error, result) => {
                if (!error) {
                  return (stake = result);
                }
              });

            return stake;
          },

          balanceOf: async (address) => {
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);

            let balance = "0";

            await contracts.STAKE_TKN.methods
              .balanceOf(address)
              .call((error, result) => {
                if (!error) {
                  return (balance = result);
                }
              });

            return balance;
          },

          approvedOperator: async (stakeId) => {
            if (!stakeId)
              return console.error(`PRUF_ERR: Invalid input: ${stakeId}`);

            let operator = "Not Found";

            await contracts.STAKE_TKN.methods
              .getApproved(stakeId)
              .call((error, result) => {
                if (!error) {
                  return (operator = result);
                }
              });

            return operator;
          },

          isApprovedForAll: async (address, operator) => {
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);
            if (!operator)
              return console.error(`PRUF_ERR: Invalid input: ${operator}`);

            let bool = false;

            await contracts.STAKE_TKN.methods
              .isApprovedForAll(address, operator)
              .call((error, result) => {
                if (!error) {
                  return (bool = result);
                }
              });

            return bool;
          },

          ownerOf: async (stakeId) => {
            if (!stakeId)
              return console.error(`PRUF_ERR: Invalid input: ${stakeId}`);

            let owner = "Not Found";

            await contracts.STAKE_TKN.methods
              .ownerOf(stakeId)
              .call((error, result) => {
                if (!error) {
                  return (owner = result);
                }
              });

            return owner;
          },

          heldStakeAtIndex: async (address, index) => {
            if (!address)
              return console.error(`PRUF_ERR: Invalid input: ${address}`);
            if (index < 0)
              return console.error(`PRUF_ERR: Invalid input: ${index}`);

            let stakeId = "Not Found";

            await contracts.STAKE_TKN.methods
              .tokenOfOwnerByIndex(address, index)
              .call((error, result) => {
                if (!error) {
                  return (stakeId = result);
                }
              });

            return stakeId;
          },

          URI: async (stakeId) => {
            if (!stakeId)
              return console.error(`PRUF_ERR: Invalid input: ${stakeId}`);

            let URI = "Not Found";

            await contracts.STAKE_TKN.methods
              .tokenURI(stakeId)
              .call((error, result) => {
                if (!error) {
                  return (URI = result);
                }
              });

            return URI;
          },

          totalSupply: async () => {
            let supply = "Error fetching supply";

            await contracts.STAKE_TKN.methods
              .totalSupply()
              .call((error, result) => {
                if (!error) {
                  return (supply = result);
                }
              });

            return supply;
          },
        },
      };

      const tx = {
        node: contracts.UD_NB ? {
          mint: contracts.UD_NB.methods.purchaseNode,
          setExtData: contracts.UD_NB.methods.setExtendedNodeData,
          transfer: contracts.NODE_TKN ? contracts.NODE_TKN.methods.safeTransferFrom : null, 
          setOperationCost: contracts.UD_NB.methods.setOperationCosts,
          updateImportStatus: contracts.UD_NB.methods.updateImportStatus,
          updateCAS: contracts.UD_NB.methods.updateNodeCAS,
          setApprovalForAll: contracts.NODE_TKN ? contracts.NODE_TKN.methods.setApprovalForAll : null,
          approve: contracts.NODE_TKN ? contracts.NODE_TKN.methods.approve : null,
          enableContract: contracts.STOR ? contracts.STOR.methods.enableContractForNode : null,
          enableDefaultContracts: contracts.STOR ? contracts.STOR.methods.enableDefaultContractsForNode : null,
          authorizeUser: contracts.UD_NB.methods.addUser,
          finalize: contracts.UD_NB.methods.setNonMutableData,
        } : {
          transfer: contracts.NODE_TKN ? contracts.NODE_TKN.methods.safeTransferFrom : null, 
          setOperationCost: contracts.NODE_MGR ? contracts.NODE_MGR.methods.setOperationCosts : null,
          updateImportStatus: contracts.NODE_MGR ? contracts.NODE_MGR.methods.updateImportStatus : null,
          updateCAS: contracts.NODE_MGR ? contracts.NODE_MGR.methods.updateNodeCAS : null,
          setApprovalForAll: contracts.NODE_TKN ? contracts.NODE_TKN.methods.setApprovalForAll : null,
          approve: contracts.NODE_TKN ? contracts.NODE_TKN.methods.approve : null,
          enableContract: contracts.STOR ?contracts.STOR.methods.enableContractForNode : null,
          enableDefaultContracts: contracts.STOR ? contracts.STOR.methods.enableDefaultContractsForNode : null,
          authorizeUser: contracts.NODE_MGR ? contracts.NODE_MGR.methods.addUser : null,
          finalize: contracts.NODE_MGR ? contracts.NODE_MGR.methods.setNonMutableData : null,
        },
        asset: {
          verifyRightsHash: contracts.STOR ? contracts.STOR.methods.blockchainVerifyRightsHolder : null,
          approve: contracts.A_TKN ? contracts.A_TKN.methods.approve : null,
          setApprovalForAll: contracts.A_TKN ? contracts.A_TKN.methods.setApprovalForAll : null,
          setColdWallet: contracts.A_TKN ? contracts.A_TKN.methods.setColdWallet : null,
          unSetColdWallet: contracts.A_TKN ? contracts.A_TKN.methods.unSetColdWallet : null,
          permissiveSetURI: contracts.A_TKN ? contracts.A_TKN.methods.setURI : null,
          transfer: contracts.A_TKN ? contracts.A_TKN.methods.safeTransferFrom : null,
          mint: contracts.APP_NC ? contracts.APP_NC.methods.newRecordWithNote : null,
          mintBare: contracts.APP_NC ? contracts.APP_NC.methods.newRecord : null,
          addHardData: contracts.APP_NC ? contracts.APP_NC.methods.addNonMutableStorage : null,
          updateHardData: contracts.APP_NC ? contracts.APP_NC.methods.updateNonMutableStorage : null,
          modifySoftData: contracts.APP_NC ? contracts.APP_NC.methods.modifyMutableStorage : null,
          modifyRightsHash: contracts.APP_NC ? contracts.APP_NC.methods.changeRgt : null,
          decrementLifeCycle: contracts.APP_NC ? contracts.APP_NC.methods.decrementCounter : null,
          modifyStatus: contracts.APP_NC ? contracts.APP_NC.methods.modifyStatus : null,
          markLostOrStolen: contracts.APP_NC ? contracts.APP_NC.methods.setLostOrStolen : null,
        },
        pruf: {
          setColdWallet: contracts.UTIL_TKN ? contracts.UTIL_TKN.methods.setColdWallet : null,
          unSetColdWallet: contracts.UTIL_TKN ? contracts.UTIL_TKN.methods.unSetColdWallet : null,
          transfer: contracts.UTIL_TKN ? contracts.UTIL_TKN.methods.transferFrom : null,
          approve: contracts.UTIL_TKN ? contracts.UTIL_TKN.methods.approve : null,
          decreaseAllowance: contracts.UTIL_TKN ? contracts.UTIL_TKN.methods.decreaseAllowance : null,
          increaseAllowance: contracts.UTIL_TKN ? contracts.UTIL_TKN.methods.increaseAllowance : null,
        },
        stake: {
          approve: contracts.STAKE_TKN ? contracts.STAKE_TKN.methods.approve : null,
          transfer: contracts.STAKE_TKN ? contracts.STAKE_TKN.methods.safeTransferFrom : null,
          setApprovalForAll: contracts.STAKE_TKN ? contracts.STAKE_TKN.methods.setApprovalForAll : null,
          break: contracts.EO_STAKING ? contracts.EO_STAKING.methods.breakStake : null,
          claim: contracts.EO_STAKING ? contracts.EO_STAKING.methods.claimBonus : null,
          increase: contracts.EO_STAKING ? contracts.EO_STAKING.methods.increaseMyStake : null,
          stakePRUF: contracts.EO_STAKING ? contracts.EO_STAKING.methods.stakeMyTokens : null,
        }
      };

      const util = {
        //generateIndex, generateRightsHash
        isValidId: async (id) => {
          try {
            if (!id) throw "TokenID is undefined";
            else if (typeof id !== "string") throw "tokenID must be a string";
            else if (id.toLowerCase().substring(0, 2) !== "0x")
              throw "tokenID must begin with '0x'";
            else if (id.length !== 66)
              throw "tokenID must be 66 characters long";
            else return true;
          } catch (err) {
            console.error("PRUF_ERR:", err);
            return false;
          }
        },
        arweaveTxFromB32: async (dataA, dataB) => {
          let arweaveTx = web3Provider.utils.hexToUtf8(
            dataA + dataB.substring(2, 24)
          );
          return arweaveTx;
        },
        arweaveTxToB32: async (arweaveTx) => {
          let extendedDataHash = web3Provider.utils.utf8ToHex(arweaveTx);
          let dataA = String(extendedDataHash).substring(0, 66);
          let dataB =
            "0x" +
            String(extendedDataHash).substring(
              66,
              String(extendedDataHash).length
            );
          return [dataA, dataB];
        },
        ipfsFromB32: async (bytes32Hex) => {
          if (!bytes32Hex)
            return console.error(`PRUF_ERR: Invalid input: ${bytes32Hex}`);
          const hashHex = "1220" + bytes32Hex.slice(2);
          const hashBytes = Buffer.from(hashHex, "hex");
          const hashStr = bs58.encode(hashBytes);
          return hashStr;
        },
        ipfsToB32: async (hash) => {
          if (!hash) return console.error(`PRUF_ERR: Invalid input: ${hash}`);
          let str = "0x" + bs58.decode(hash).slice(2).toString("hex");
          return str;
        },
        stringifyStatus: async (status) => {
          let tempStat = "Not Recognized";
          let statusId = String(status);
          if (!status)
            return console.error(
              'PRUF_ERR: Status id "',
              statusId,
              '"not recognized.'
            );

          switch (statusId) {
            case "0":
              tempStat = "No Status Set";
              break;
            case "1":
              tempStat = "Transferable";
              break;
            case "2":
              tempStat = "Non-Transferable";
              break;
            case "3":
              tempStat = "MARKED STOLEN";
              break;
            case "4":
              tempStat = "MARKED LOST";
              break;
            case "5":
              tempStat = "Transferred (Unclaimed)";
              break;
            case "6":
              tempStat = "In Supervised Escrow";
              break;
            case "7":
              tempStat = "Out of Supervised Escrow";
              break;
            case "50":
              tempStat = "In Locked Escrow";
              break;
            case "51":
              tempStat = "Transferable";
              break;
            case "52":
              tempStat = "Non-Transferable";
              break;
            case "53":
              tempStat = "MARKED STOLEN";
              break;
            case "54":
              tempStat = "MARKED LOST";
              break;
            case "55":
              tempStat = "Transferred (Unclaimed)";
              break;
            case "56":
              tempStat = "In Supervised Escrow";
              break;
            case "57":
              tempStat = "Out of Escrow";
              break;
            case "58":
              tempStat = "Out of Escrow";
              break;
            case "59":
              tempStat = "Ready for Discard";
              break;
            case "60":
              tempStat = "Ready to Recycle";
              break;
            case "70":
              tempStat = "Ready for Import";
              break;
            default:
              console.error(
                'PRUF_ERR: Status id "',
                statusId,
                '"not recognized.'
              );
              break;
          }

          return tempStat;
        },
        convertToSeconds: async (rawTime, unit) => {
          if (!rawTime)
            return console.error(`PRUF_ERR: Invalid input: ${rawTime}`);
          if (!unit) return console.error(`PRUF_ERR: Invalid input: ${unit}`);
          let time;
          switch (unit) {
            case "seconds":
              time = rawTime;
              break;
            case "minutes":
              time = rawTime * 60;
              break;
            case "hours":
              time = rawTime * 3600;
              break;
            case "days":
              time = rawTime * 86400;
              break;
            case "weeks":
              time = rawTime * 604800;
              break;
          }
          return time;
        },
        tenThousandHashesOf: async (job) => {
          if (!job) return;
          let tempHash = job;

          for (let i = 0; i < 10000; i++) {
            tempHash = hashAlgo(tempHash);
          }

          return tempHash;
        },
        generateAssetID: async ({ nodeId, model, serial }) => {
          if (!model || !serial || !nodeId)
            return console.error(
              `PRUF_ERR: One of the input fields returned undefined`
            );

          let id = await hashAlgo(
            String(nodeId).replace(/\s/g, ""),
            String(model).replace(/\s/g, ""),
            String(serial).replace(/\s/g, "")
          );

          return id;
        },
        generateRawAssetID: async ({model, serial }) => {
          if (!model || !serial)
            return console.error(
              `PRUF_ERR: One of the input fields returned undefined`
            );

          let id = await hashAlgo(
            String(model).replace(/\s/g, ""),
            String(serial).replace(/\s/g, "")
          );

          return id;
        },
        generateSecureRgt: async (
          assetId,
          secret
        ) => {
          if (!assetId) return console.error(`PRUF_ERR: Invalid input for asset ID: ${assetId}`);
          if (!secret) return console.error(`Invalid input for secret: ${secret}`);

          let rgtRaw = await hashAlgo(
            String(secret).replace(/\s/g, "")
          );

          let rgt = await hashAlgo(assetId, rgtRaw);

          return rgt;
        },
      };

      return { call: call, transact: tx, utils: util, faucet: faucet };
    };

    //this.provider = web3Provider;

    if (!web3Provider)
      throw "Web3 returned undefined. Get web3 before initializing PRUF";
    let net;
    this.init = async () => {
      this.isInitialized = new Promise((resolve, reject) => {
        switch (chainId) {
          case 1:
            net = "ethereum";
            break;
          case 200101:
              net = "m1tn";
              break;
          case 2001:
              net = "m1c1";
              break;
          case 42:
            net = "kovan";
            break;
          case 8080:
            net = "liberty";
            break;
          case 137:
            net = "polygon";
            break;
          case 80001:
            net = "mumbai";
            break;
          default:
            throw "Provided chainId is not supported. Supported network IDs are: 1 || 42 || 137 || 80001 || 200101 || 8080 || 2001";
        }
        try {
          if (logs) console.time("Time spent initializing: ");
          resolveContracts(web3Provider, net).then((f) => {
            if (!f) throw "Contracts returned undefined";
            if (logs) console.log(f);
            try {
              assembleInterface(f).then((g) => {
                if (!g) throw "Interface returned undefined";
                if (logs) console.log(g);
                this.get = g.call;
                this.utils = g.utils;
                this.do = g.transact;
                this.network = {
                  name: net,
                  provider: web3Provider,
                  contracts: f,
                };
                if (net === "liberty" || net === "kovan" || net === "mumbai" || net === "m1tn") this.faucet = g.faucet;
                if (logs) console.log({ this: this });
                if (logs) console.timeEnd("Time spent initializing: ");
                resolve(this);
              });
            } catch (err) {
              if (logs) console.error("PRUF_ERR:", err);
            }
          });
        } catch (err) {
          if (logs) console.error("PRUF_ERR:", err);
        }
      });
      await this.isInitialized;
      return this;
    };
  }
};
