// Class which constructs a full suite of functions that interact with the PRüF network.

//

module.exports = class PRUF {
  constructor(web3Provider, chainId, fetch = false, logs = false) {
    var bs58 = require("bs58");
    var _abis = require("./ABIs");
    var abis = _abis.default;
    const addressTable = {
      kovan: {
        STOR: "0xE069223001Ee532Ea9DD6190bddFEF7a07c511C0",
        NODE_STOR: "0x488E631df239Dd53950aCC07a90b782DF5f3CA33",
        NODE_BLDR: "0x9796D3CdE91916341568fF165a1507725186FC30",
        UTIL_TKN: "0xaAa5a0D9dfC5B21A8100f608D12924dEfDd90E43",
        STAKE_TKN: "0xF58F2B320a95a75fd1Ec252D3018636bDD5c49a4",
        A_TKN: "0x04C9298f296D3C09120950D71842b6B363A566f8",
        NODE_TKN: "0xCa2597fa1Da5c24e5957E85265a436BD8aCa6413",
        STAKE_VAULT: "0x4198c8Df170cdFeF9ed8A808B5c8244525dC8C2d",
        REWARDS_VAULT: "0x3972a53956B380a82177735905e50FeA298a47DD",
        NODE_MGR: "0xF9bb8fd3296aC6e8Dd7CB154b7a504e2B9AeAF2d",
        EO_STAKING: "0x4f4B4652AaB870C21697fedC8aAB2189e63CB049",
        APP_NC: "0x5e85274F375CcD87ABAb7B5F51E5bB5D943b8524",
        RAVE: "0x20720c65ab4BADaea30Ea6E9B3095b2e60914f1D",
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
        UTIL_TKN: "0xAdf72D32E511eE00c6E0FF5D62Cd5C7C40A6aDEA",
        STAKE_TKN: "0xd68bc9a69343dde6ebef1546bd09f3f43fe308c8",
        STAKE_VAULT: "0x7c0823f1c216b80dc3a07d5896640bca64013613",
        REWARDS_VAULT: "0x9f700203681b15c5618a6f51e01e9620b591208d",
        EO_STAKING: "0x388878e143b0c4ae2637d81bec6e173cace9b1ed",
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
        const STOR = _contracts.STOR;

        await STOR.methods
          .resolveContractAddress("NODE_STOR")
          .call(function (error, result) {
            if (error) {
              console.log(error);
            } else {
              //console.log(result);
              _contracts.NODE_STOR = new _web3.eth.Contract(
                abis.NODE_STOR,
                result
              );
            }
          });

        await STOR.methods
          .resolveContractAddress("NODE_BLDR")
          .call(function (error, result) {
            if (error) {
              console.log(error);
            } else {
              //console.log(result);
              _contracts.NODE_BLDR = new _web3.eth.Contract(
                abis.NODE_BLDR,
                result
              );
            }
          });

        await STOR.methods
          .resolveContractAddress("APP_NC")
          .call(function (error, result) {
            if (error) {
              console.log(error);
            } else {
              //console.log(result);
              _contracts.APP_NC = new _web3.eth.Contract(abis.APP_NC, result);
            }
          });

        await STOR.methods
          .resolveContractAddress("NODE_MGR")
          .call(function (error, result) {
            if (error) {
              console.log(error);
            } else {
              //console.log(result)
              _contracts.NODE_MGR = new _web3.eth.Contract(
                abis.NODE_MGR,
                result
              );
            }
          });

        await STOR.methods
          .resolveContractAddress("NODE_TKN")
          .call(function (error, result) {
            if (error) {
              console.log(error);
            } else {
              //console.log(result);
              _contracts.NODE_TKN = new _web3.eth.Contract(
                abis.NODE_TKN,
                result
              );
            }
          });

        await STOR.methods
          .resolveContractAddress("A_TKN")
          .call(function (error, result) {
            if (error) {
              console.log(error);
            } else {
              //console.log(result);
              _contracts.A_TKN = new _web3.eth.Contract(abis.A_TKN, result);
            }
          });

        await STOR.methods
          .resolveContractAddress("UTIL_TKN")
          .call(function (error, result) {
            if (error) {
              console.log(error);
            } else {
              //console.log(result);
              _contracts.UTIL_TKN = new _web3.eth.Contract(
                abis.UTIL_TKN,
                result
              );
            }
          });
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
        faucet.getPRUF = contracts.RAVE.methods.bumpMe;
        faucet.getNode = contracts.RAVE.methods.purchaseNode;
      }

      const call = {
        node: {
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
                  return (priceData = {
                    currentNodeIndex: result["0"],
                    currentNodePrice: web3Provider.utils.fromWei(
                      String(result["1"])
                    ),
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
              .retrieveRecord(assetId)
              .call((error, result) => {
                if (!error && result.nodeId !== "0") {
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
              .retrieveRecord(assetId)
              .call((error, result) => {
                if (!error && result.nodeId !== "0") {
                  return (record = result);
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
        node: {
          transfer: contracts.NODE_TKN.methods.safeTransferFrom,
          setOperationCost: contracts.NODE_MGR.methods.setOperationCosts,
          updateImportStatus: contracts.NODE_MGR.methods.updateImportStatus,
          updateCAS: contracts.NODE_MGR.methods.updateNodeCAS,
          setApprovalForAll: contracts.NODE_TKN.methods.setApprovalForAll,
          approve: contracts.NODE_TKN.methods.approve,
          enableContract: contracts.STOR.methods.enableContractForNode,
          enableDefaultContracts:
            contracts.STOR.methods.enableDefaultContractsForNode,
          authorizeUser: contracts.NODE_MGR.methods.addUser,
          finalize: contracts.NODE_MGR.methods.setNonMutableData,
        },
        asset: {
          verifyRightsHash: contracts.STOR.methods.blockchainVerifyRightsHolder,
          approve: contracts.A_TKN.methods.approve,
          setApprovalForAll: contracts.A_TKN.methods.setApprovalForAll,
          setColdWallet: contracts.A_TKN.methods.setColdWallet,
          unSetColdWallet: contracts.A_TKN.methods.unSetColdWallet,
          permissiveSetURI: contracts.A_TKN.methods.setURI,
          transfer: contracts.A_TKN.methods.safeTransferFrom,
          mint: contracts.APP_NC.methods.newRecordWithNote,
          mintBare: contracts.APP_NC.methods.newRecord,
          addNonMutableStorage: contracts.APP_NC.methods.addNonMutableStorage,
          permissiveModifyNonMutableStorage:
            contracts.APP_NC.methods.updateNonMutableStorage,
          modifyMutableStorage: contracts.APP_NC.methods.modifyMutableStorage,
          modifyRightsHash: contracts.APP_NC.methods.changeRgt,
          decrementLifeCycle: contracts.APP_NC.methods.decrementCounter,
          modifyStatus: contracts.APP_NC.methods.modifyStatus,
          markLostOrStolen: contracts.APP_NC.methods.setLostOrStolen,
        },
        pruf: {
          setColdWallet: contracts.UTIL_TKN.methods.setColdWallet,
          unSetColdWallet: contracts.UTIL_TKN.methods.unSetColdWallet,
          transfer: contracts.UTIL_TKN.methods.transferFrom,
          approve: contracts.UTIL_TKN.methods.approve,
          decreaseAllowance: contracts.UTIL_TKN.methods.decreaseAllowance,
          increaseAllowance: contracts.UTIL_TKN.methods.increaseAllowance,
        },
        stake: {
          approve: contracts.STAKE_TKN.methods.approve,
          transfer: contracts.STAKE_TKN.methods.safeTransferFrom,
          setApprovalForAll: contracts.STAKE_TKN.methods.setApprovalForAll,
          break: contracts.EO_STAKING.methods.breakStake,
          claim: contracts.EO_STAKING.methods.claimBonus,
          increase: contracts.EO_STAKING.methods.increaseMyStake,
          stakePRUF: contracts.EO_STAKING.methods.stakeMyTokens,
        },
        //PARTY -- TEST RELEASE ONLY
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
        generateAssetID: async ({ nodeId, type, make, model, serial }) => {
          if (!type || !make || !model || !serial || !nodeId)
            return console.error(
              `PRUF_ERR: One of the input fields returned undefined`
            );

          let id = await hashAlgo(
            String(nodeId).replace(/\s/g, ""),
            String(type).replace(/\s/g, ""),
            String(make).replace(/\s/g, ""),
            String(model).replace(/\s/g, ""),
            String(serial).replace(/\s/g, "")
          );

          return id;
        },
        generateRawAssetID: async ({ type, make, model, serial }) => {
          if (!type || !make || !model || !serial)
            return console.error(
              `PRUF_ERR: One of the input fields returned undefined`
            );

          let id = await hashAlgo(
            String(type).replace(/\s/g, ""),
            String(make).replace(/\s/g, ""),
            String(model).replace(/\s/g, ""),
            String(serial).replace(/\s/g, "")
          );

          return id;
        },
        generateSecureRgt: async (
          assetId,
          { first, middle, last, id, password }
        ) => {
          if (!assetId) return console.error(`Invalid input: ${assetId}`);
          if (!first || !last || !id || !password)
            return console.error(
              `PRUF_ERR: One of the input fields returned undefined`
            );
          if (!middle) middle = "";

          let rgtRaw = await hashAlgo(
            String(first).replace(/\s/g, ""),
            String(middle).replace(/\s/g, ""),
            String(last).replace(/\s/g, ""),
            String(id).replace(/\s/g, ""),
            String(password).replace(/\s/g, "")
          );

          let rgt = await hashAlgo(assetId, rgtRaw);

          for (let i = 0; i < 10000; i++) {
            rgt = hashAlgo(rgt);
          }

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
          case 42:
            net = "kovan";
            break;
          case 137:
            net = "polygon";
            break;
          case 80001:
            net = "mumbai";
            break;
          default:
            throw "Provided chainId is not supported. Supported network IDs are: 1 || 42 || 137 || 80001";
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
                if (net === "kovan" || net === "mumbai") this.faucet = g.faucet;
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
