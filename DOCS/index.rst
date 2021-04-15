.. pruf-js documentation master file, created by
   sphinx-quickstart on Fri Mar 26 11:02:50 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

**pruf-js**
===================================

!! THE DOCUMENTATION IN THIS PAGE IS INDEV. DO NOT USE IT AS A REFERENCE JUST YET. !!

Interface for the PRüF network written in javascript

.. toctree::
   :maxdepth: 2
   :caption: Contents:

Installation
=================

Install using node package manager:

   ``npm i --s pruf-js``

   *note: pruf-js requires an instance of web3.js to function.*

   *To learn more about web3.js, click here:* 
   
   https://web3js.readthedocs.io


Example Initialization
-----------------------

.. code-block:: javascript 
   :linenos:

   //Example pruf-js initialization code

   const Web3 = require('web3');
   const PRUF = require('pruf-js');

   const web3 = new Web3("https://kovan.infura.io/v3/yourInfuraKeyHere");
   const pruf = new PRUF(web3);

   console.log("Here is the client interface:", pruf);




.do
============

-------------------------------------------------------------------------------------------------

mintAsset:
----------

``pruf.do.mintAsset(assetIndex, rightsHash, nodeId, LifeCycleLimit, extData)``

Mints an asset using the pruf protocol.

Parameters
"""""""""""

   1. assetIndex
   
      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network
   
   2. rightsHash
   
      * String|Bytes32
      * Hash built from individual inputs which is used to verify asset ownership
   
   3. nodeId
      
      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.
   
   4. LifeCycleLimit
      
      * String|Uint32
      * (experimental) Used for applications which are concerned with service iteration
   
   5. extData
   
      * String|Bytes32
      * Mutable key used to link asset to off-chain storage
  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   let _assetIndex = pruf.utils.generateIndex("input1", "input2", "input3", "input4");
   let _rightsHash = pruf.utils.generateRightsHash(_assetIndex, ["userInfo1", "userInfo2", "userInfo3", "userInfo4"]);
   let _nodeId = "10";
   let _lifeCycleLimit = "100000"
   let _extData = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"

   pruf.do.mintAsset
   (
      _assetIndex,
      _rightHolderHash,
      _nodeId,
      _lifeCycleLimit,
      _extData
   )
   .send({ from: props.addr })
   .on("receipt"()=>{
      console.log(receipt.transactionHash);
   });

verifyRightsHash:
-----------------
   
   ``pruf.do.verifyRightsHash(assetIndex, rightsHash)``
   
   Creates transaction which compares a submitted rightsHash to the rightsHash stored in asset record.
   
Parameters
"""""""""""

   1. assetIndex
   
      * String|Bytes32
      * Unique value which refers to an asset

   2. rightsHash

      * String|Bytes32
      * Hash built from individual inputs which is used to verify asset ownership
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:
   
      let assetIndex = pruf.utils.generateIndex("input1", "input2", "input3", "input4")
      let rightsHash = pruf.utils.generateRightsHash(assetIndex, ["userInfo1", "userInfo2", "userInfo3", "userInfo4"]);
   
      pruf.do.verifyRightsHash(
      _assetIndex, 
      _rightsHash
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.events.REPORT.returnValues._msg);
      });


transferAsset:
-----------------
   
   ``pruf.do.transferAsset(from, to, assetIndex)``
   
   Transfers an asset from one address to another.
   
Parameters
"""""""""""

   1. from
   
      * String|Address
      * Wallet public key which currently holds the asset

   2. to

      * String|Address
      * Wallet public key to which user intends to send the asset
   
   3. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _from = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049";
      let _to = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1";
      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

      pruf.do.transferAsset(
      _from,
      _to,
      _assetIndex
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

setAssetURI:
-----------------
   
   ``pruf.do.setAssetURI(assetIndex, newURI)``
   
   Changes the asset token URI to specified value.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. newURI

      * String
      * The string to which the user would like to change the URI
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newURI = "Here is a new URI"

      pruf.do.setAssetURI(
      _assetIndex,
      _newURI
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

discardAsset:
-----------------
   
   ``pruf.do.discardAsset(assetIndex)``
   
   Discards an asset
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

      pruf.do.discardAsset(
      _assetIndex,
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });  
      
      
engraveAsset:
-----------------
   
   ``pruf.do.engraveAsset(assetIndex, inscription)``
   
   Permanently inscribes an asset with an off-chain storage reference key
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. inscription

      * String|Bytes32
      * Immutable key used to link asset to off-chain storage
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _inscription = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"

      pruf.do.engraveAsset(
      _assetIndex,
      _inscription
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      })
         
importAsset:
-----------------
   
   ``pruf.do.importAsset(assetIndex, newURI)``
   
   Imports a currently exported asset into a new node of the same root.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. newNode

      * String|Uint32
      * The ID of the node into which the user will import the asset
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newNode = "10"

      pruf.do.importAsset(
      _assetIndex,
      _newNode
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

modifyRightsHash:
----------------------
   
   ``pruf.do.modifyRightsHash(assetIndex, newRightsHash)``
   
   Changes the rightshash of the asset to reflect new data.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. newRightsHash

      * String|Bytes32
      * Hash which will replace the current entry
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newHash = pruf.utils.generateRightsHash(_assetIndex, ["userInfo1", "userInfo2", "userInfo3", "userInfo4"]);

      pruf.do.modifyRightsHash(
      _assetIndex,
      _newHash
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

decrementLifeCycle:
-------------------
   
   ``pruf.do.decrementLifeCycle(assetIndex, amount)``
   
   Decrements the LifeCycle of an asset by a specified amount.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. amount

      * String|Uint32
      * Amount to decrement from the asset LifeCycle
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _amount = "25";

      pruf.do.decrementLifeCycle(
      _assetIndex,
      _amount
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

exportAsset:
-----------------
   
   ``pruf.do.exportAsset(assetIndex)``
   
   Exports an asset for import into another node.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

      pruf.do.exportAsset(
      _assetIndex,
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

modifyAssetExtData:
--------------------
   
   ``pruf.do.modifyAssetExtData(assetIndex, newExtData)``
   
   Changes an asset's mutable off-chain data key.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. newExtData

      * String|Uint32
      * Mutable key used to link asset to off-chain storage
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newExtData = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd";

      pruf.do.modifyAssetExtData(
         _assetIndex,
         _newExtData
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

modifyAssetStatus:
--------------------
   
   ``pruf.do.modifyAssetStatus(assetIndex, newStatus)``
   
   Changes an asset's active status.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. newStatus

      * String|Uint8
      * Indicator of Asset Status to determine eligibility for ops using the PRüF protocol
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newStatus = "51"; //'51' is the transferable status

      pruf.do.modifyAssetExtData(
         _assetIndex,
         _newStatus
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

markAssetLostOrStolen:
-----------------------
   
   ``pruf.do.markAssetLostOrStolen(assetIndex, newStatus)``
   
   Changes an asset's active status to lost or stolen.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. newStatus

      * String|Uint8
      * Indicator of Asset Status to determine eligibility for ops using the PRüF protocol
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newStatus = "53"; //'53' is the lost status

      pruf.do.markAssetLostOrStolen(
         _assetIndex,
         _newStatus
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });
      
redeemPipAsset:
--------------------
   
   ``pruf.do.redeemPipAsset(assetIndex, authCode, nodeId, rightsHash, LifeCycleLimit)``
   
   Redeems a PIP asset.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. authCode

      * String
      * Code with which user can redeem PIP asset nad mint a corresponding token
  
   3. nodeId

      * String|uint32
      * ID used to reference a node

   4. rightsHash

      * String|Bytes32
      * Hash built from individual inputs which is used to verify asset ownership

   5. LifeCycleLimit

   * String|uint32
   * (experimental) Used for applications which are concerned with service iteration
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";
      let _authCode = "0x2ce8d04a9c35987429af538825cd2438cc5c5bb5dc427955f84daaa3ea105016";
      let _nodeId = "10";
      let _rightsHash = pruf.utils.generateRightsHash(_assetIndex, ["userInfo1", "userInfo2", "userInfo3", "userInfo4"]);
      let _lifeCycleLimit = "100000";

      pruf.do.redeemPipAsset(
         _assetIndex, 
         _authCode, 
         _nodeId, 
         _rightsHash, 
         _LifeCycleLimit
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

mintPip:
--------------------
   
   ``pruf.do.mintPip(assetIndex, authCodeHash, nodeId)``
   
   Redeems a PIP asset.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. authCodeHash

      * String|Bytes32
      * Hashed code to be compared against a submission for minting
  
   3. nodeId

      * String|uint32
      * ID used to reference a node
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";
      let _authCode = "0x2ce8d04a9c35987429af538825cd2438cc5c5bb5dc427955f84daaa3ea105016";
      let _nodeId = "10";

      pruf.do.mintPip(
         _assetIndex, 
         _authCode, 
         _nodeId, 
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

setForSale:
--------------------
   
   ``pruf.do.setForSale(assetIndex, price, currency, setTransferable)``
   
   Posts an asset for sale at given price.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. price

      * String|uint120
      * Price in Wei of given currency
  
   3. currency

      * String|uint8
      * Currency which should be charged in return for the asset

   4. setTransferable

      * String|uint256
      * Whether to set an asset from a non-transferable status to transferable ("170" for true, other for false)
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";
      let _price = "100000000000000000000";
      let _currency = "2";
      let _setTransferable = "170"

      pruf.do.setForSale(
         _assetIndex, 
         _price, 
         _currency, 
         _setTransferable
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

unSetForSale:
--------------------
   
   ``pruf.do.unSetForSale(assetIndex)``
   
   Removes sale price of an asset.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";

      pruf.do.unSetForSale(
         _assetIndex, 
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

buyAsset:
--------------------
   
   ``pruf.do.buyAsset(assetIndex)``
   
   Purchases an asset which has been listed for sale.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";

      pruf.do.buyAsset(
         _assetIndex, 
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

recycleAsset:
--------------------
   
   ``pruf.do.recycleAsset(assetIndex, rightsHash, nodeId)``
   
   Recycles a discarded asset token into the calling address.
   
Parameters
"""""""""""

   1. assetIndex

      * String|Bytes32
      * Unique value which refers to an asset

   2. rightsHash

      * String|Bytes32
      * Hash built from individual inputs which is used to verify asset ownership
  
   3. nodeId

      * String|uint32
      * ID used to reference a node

     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _assetIndex = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";
      let _rightsHash = pruf.utils.generateRightsHash(_assetIndex, ["userInfo1", "userInfo2", "userInfo3", "userInfo4"]);
      let _nodeId = "10";

      pruf.do.recycleAsset(
         _assetIndex, 
         _rightsHash, 
         _nodeId
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

setColdWallet:
--------------------
   
   ``pruf.do.setColdWallet()``
   
   Sets calling address to a cold wallet.
   
Parameters
"""""""""""

   1. None
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      pruf.do.setColdWallet()
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

unSetColdWallet:
--------------------
   
   ``pruf.do.unSetColdWallet()``
   
   Sets calling address to a hot wallet.
   
Parameters
"""""""""""

   1. None
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      pruf.do.unSetColdWallet()
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

transferPruf:
--------------------
   
   ``pruf.do.transferPruf(from, to, amount)``
   
   Sends a specified Amount of PRUF from one wallet to another.
   
Parameters
"""""""""""

   1. from

      * String|Address
      * Address from which to send tokens

   2. to

      * String|Address
      * Address to receive sent tokens
  
   3. amount

      * String|uint256
      * amount of tokens in wei

     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _from = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049";
      let _to = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1";
      let _amount = "100000000000000000000";

      pruf.do.transferPruf(
         _from, 
         _to,
         _amount
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

transferNode:
--------------------
   
   ``pruf.do.transferNode(from, to, nodeId)``
   
   Sends a specified node token from one wallet to another.
   
Parameters
"""""""""""

   1. from

      * String|Address
      * Address from which to send node

   2. to

      * String|Address
      * Address to receive sent node
  
   3. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      let _from = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049";
      let _to = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1";
      let _nodeId = "10";

      pruf.do.transferNode(
         _from, 
         _to,
         _nodeId
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

setOperationCost:
--------------------
   
   ``pruf.do.setOperationCost(nodeId, operationIndex, newCost, beneficiaryAddress)``
   
   Sets the cost users will incur to complete node operation at index.
   
Parameters
"""""""""""

   1. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

   2. operationIndex

      * String|Uint16
      * index of the cost to be set. Standardized cost indexes are a WIP
  
   3. newCost

      * String|Uint256
      * The cost which will be set for the specified operation index in wei

   4. beneficiaryAddress

      * String|Address
      * The address to which the cost for the specified operation index will pay out

     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:
      let _nodeId = "10";
      let _operationIndex = "1";
      let _newCost = "100000000000000000000"; //100 whole tokens
      let _beneficiaryAddress = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1";

      pruf.do.setOperationCost(
         _nodeId, 
         _operationIndex,
         _newCost,
         _beneficiaryAddress
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

purchaseNode:
--------------------
   
   ``pruf.do.purchaseNode(name, rootNode, custodyType, extendedConfig)``
   
   Purchases a node and mints it to the caller.
   
Parameters
"""""""""""

   1. name

      * String
      * Name which will be associated with the node and assets minted under it

   2. rootNode

      * String|Uint32
      * A root node ID. Caller should choose a root node which best classifies the mission for the node being created
  
   3. custodyType

      * String|Uint8
      * Custody type which effects node operation permissions.

   4. extendedConfig

      * String|Bytes32
      * Mutable field used for reference to off-chain node configuration

     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:
      let _name = "Museum of Chicago";
      let _rootNode = "2";
      let _custodyType = "1"; // Custodial
      let _extendedConfig = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd";

      pruf.do.purchaseNode(
         _name, 
         _rootNode,
         _custodyType,
         _extendedConfig
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

modifyExtendedConfig:
--------------------
   
   ``pruf.do.modifyExtendedConfig(nodeId, newExtendedConfig)``
   
   Modifies the extended configuration reference key of a specified node.
   
Parameters
"""""""""""

   1. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

   2. newExtendedConfig

      * String|Bytes32
      * Mutable field used for reference to off-chain node configuration

     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:
      let _nodeId = "10";
      let _newExtendedConfig = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd";

      pruf.do.modifyExtendedConfig(
         _nodeId, 
         _newExtendedConfig
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

authorizeUser:
--------------------
   
   ``pruf.do.authorizeUser(nodeId, authAddressHash, userType)``
   
   Authorizes a user for operations on a node.
   
Parameters
"""""""""""

   1. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

   2. authAddressHash

      * String|Bytes32
      * A sha3 hash of the target address used as a key to authorize operations on the specified node.
  
   3. userType

      * String|Uint8
      * Type of authorization to apply to target address.

     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:
      let _nodeId = "10";
      let _authAddressHash = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd";
      let _userType = "1"; // Custodial

      pruf.do.authorizeUser(
         _nodeId, 
         _authAddressHash,
         _userType
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

modifyNodeName:
--------------------
   
   ``pruf.do.modifyNodeName(nodeId, newName)``
   
   Modifies the name of a specified node.
   
Parameters
"""""""""""

   1. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

   2. newName

      * String
      * New name string attatched to the node.

     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:
      let _nodeId = "10";
      let _newName = "Hans' Curating Service"; // Custodial

      pruf.do.modifyNodeName(
         _nodeId, 
         _newName
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

finalizeNode:
--------------------
   
   ``pruf.do.finalizeNode(nodeId, managementType, storageProvider, referenceAddress)``
   
   Permanently sets on-chain configuration for the specified node. (Node cannot be used until this operation is complete)
   
Parameters
"""""""""""

   1. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

   2. managementType

      * String|Uint8
      * Management style which effects permission distribution rules on the network.

   3. storageProvider

      * String|Uint8
      * Database on which asset extended data will be stored. Standard for provider indexes is a WIP.

   4. referenceAddress

      * String|Address
      * Address to reference the origin of a node. Used mainly for WRAP operations from existing NFT contracts.


Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:
      let _nodeId = "10";
      let _managementType = "1"; // Private
      let _storageProvider = "2" // Currently refers to Arweave
      let _referenceAddress = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1" //

      pruf.do.finalizeNode(
         _nodeId, 
         _managementType,
         _storageProvider,
         _referenceAddress
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

getId: (!!TEST NETWORK ONLY!!)
--------------------
   
   ``pruf.do.getId()``
   
   Mints an ID token for use on the testNet.

Parameters
"""""""""""

   1. none


Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      pruf.do.getId()
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

getPruf: (!!TEST NETWORK ONLY!!)
--------------------
   
   ``pruf.do.getPruf()``
   
   Mints testNet pruf at 100k testNet PRUF per 1 test Ether sent.

Parameters
"""""""""""

   1. none.


Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      pruf.do.getPruf()
      .send({ from: props.addr value: 1000000000000000000})
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


.get
============

-------------------------------------------------------------------------------------------------

getThing:
----------

``pruf.get.getThing(params)``

Brief Intro.

Parameters
"""""""""""
   1. param1
   
      * type
      * Explanation  

Returns
"""""""""""
   1. Value1
   
      * type
      * Explanation

  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example code




.utils
============

-------------------------------------------------------------------------------------------------

util:
----------

``pruf.utils.util(params)``

Brief Intro.

Parameters
"""""""""""
   1. param1
   
      * type
      * Explanation  

Returns
"""""""""""
   1. Value1
   
      * type
      * Explanation

  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example code

-------------------------------------------------------------------------------------------------



Contribute to the project
--------------------------------

- Issue Tracker: github.com/jamesBsmyth/pruf_js/issues
- Source Code: github.com/jamesBsmyth/pruf_js

Developer support
------------------------

If you are having issues, please let us know.
Contact us at: support@pruf.io

Or on Telegram: t.me/pruftalk

Project Resources
------------------

Website: https://pruf.io

License
--------

The project is licensed under the MIT license.