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

   *note: pruf-js requires an instance of web3.js to initialize.*

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

----------

mintAsset:
----------

``pruf.do.mintAsset(assetId, rightsHash, nodeId, LifeCycleLimit, extData)``

Mints an asset using the pruf protocol.

Parameters
"""""""""""

   1. assetId
   
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

   //Example pruf-js code

   let _assetId = pruf.utils.generateIndex("input1", "input2", "input3", "input4");
   let _rightsHash = pruf.utils.generateRightsHash(_assetId, ["userInfo1", "userInfo2", "userInfo3", "userInfo4"]);
   let _nodeId = "10";
   let _lifeCycleLimit = "100000"
   let _extData = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"

   pruf.do.mintAsset
   (
      _assetId,
      _rightHolderHash,
      _nodeId,
      _lifeCycleLimit,
      _extData
   )
   .send({ from: props.addr })
   .on("receipt"()=>{
      console.log(receipt.transactionHash);
   });


----------

verifyRightsHash:
-----------------
   
   ``pruf.do.verifyRightsHash(assetId, rightsHash)``
   
   Creates transaction which compares a submitted rightsHash to the rightsHash stored in asset record.
   
Parameters
"""""""""""

   1. assetId
   
      * String|Bytes32
      * Unique value which refers to an asset

   2. rightsHash

      * String|Bytes32
      * Hash built from individual inputs which is used to verify asset ownership
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let assetId = pruf.utils.generateIndex("input1", "input2", "input3", "input4")
      let rightsHash = pruf.utils.generateRightsHash(assetId, ["userInfo1", "userInfo2", "userInfo3", "userInfo4"]);
   
      pruf.do.verifyRightsHash(
      _assetId, 
      _rightsHash
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.events.REPORT.returnValues._msg);
      });


----------

transferAsset:
-----------------
   
   ``pruf.do.transferAsset(from, to, assetId)``
   
   Transfers an asset from one address to another.
   
Parameters
"""""""""""

   1. from
   
      * String|Address
      * Wallet public key which currently holds the asset

   2. to

      * String|Address
      * Wallet public key to which user intends to send the asset
   
   3. assetId

      * String|Bytes32
      * Unique value which refers to an asset
     

Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _from = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049";
      let _to = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1";
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

      pruf.do.transferAsset(
      _from,
      _to,
      _assetId
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

----------

setAssetURI:
-----------------
   
   ``pruf.do.setAssetURI(assetId, newURI)``
   
   Changes the asset token URI to specified value.
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset

   2. newURI

      * String
      * The string to which the user would like to change the URI
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code

      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newURI = "Here is a new URI"

      pruf.do.setAssetURI(
      _assetId,
      _newURI
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

----------

discardAsset:
-----------------
   
   ``pruf.do.discardAsset(assetId)``
   
   Discards an asset
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

      pruf.do.discardAsset(
      _assetId,
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });  
      
----------
  
engraveAsset:
-----------------
   
   ``pruf.do.engraveAsset(assetId, inscription)``
   
   Permanently inscribes an asset with an off-chain storage reference key
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset

   2. inscription

      * String|Bytes32
      * Immutable key used to link asset to off-chain storage
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _inscription = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"

      pruf.do.engraveAsset(
      _assetId,
      _inscription
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

        
----------
 
importAsset:
-----------------
   
   ``pruf.do.importAsset(assetId, newURI)``
   
   Imports a currently exported asset into a new node of the same root.
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset

   2. newNode

      * String|Uint32
      * The ID of the node into which the user will import the asset
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newNode = "10"

      pruf.do.importAsset(
      _assetId,
      _newNode
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

modifyRightsHash:
----------------------
   
   ``pruf.do.modifyRightsHash(assetId, newRightsHash)``
   
   Changes the rightshash of the asset to reflect new data.
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset

   2. newRightsHash

      * String|Bytes32
      * Hash which will replace the current entry
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newHash = pruf.utils.generateRightsHash(_assetId, ["userInfo1", "userInfo2", "userInfo3", "userInfo4"]);

      pruf.do.modifyRightsHash(
      _assetId,
      _newHash
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

decrementLifeCycle:
-------------------
   
   ``pruf.do.decrementLifeCycle(assetId, amount)``
   
   Decrements the LifeCycle of an asset by a specified amount.
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset

   2. amount

      * String|Uint32
      * Amount to decrement from the asset LifeCycle
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _amount = "25";

      pruf.do.decrementLifeCycle(
      _assetId,
      _amount
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

exportAsset:
-----------------
   
   ``pruf.do.exportAsset(assetId)``
   
   Exports an asset for import into another node.
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

      pruf.do.exportAsset(
      _assetId,
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

modifyAssetExtData:
--------------------
   
   ``pruf.do.modifyAssetExtData(assetId, newExtData)``
   
   Changes an asset's mutable off-chain data key.
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset

   2. newExtData

      * String|Uint32
      * Mutable key used to link asset to off-chain storage
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newExtData = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd";

      pruf.do.modifyAssetExtData(
         _assetId,
         _newExtData
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

modifyAssetStatus:
--------------------
   
   ``pruf.do.modifyAssetStatus(assetId, newStatus)``
   
   Changes an asset's active status.
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset

   2. newStatus

      * String|Uint8
      * Indicator of Asset Status to determine eligibility for ops using the PRüF protocol
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newStatus = "51"; //'51' is the transferable status

      pruf.do.modifyAssetExtData(
         _assetId,
         _newStatus
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

markAssetLostOrStolen:
-----------------------
   
   ``pruf.do.markAssetLostOrStolen(assetId, newStatus)``
   
   Changes an asset's active status to lost or stolen.
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset

   2. newStatus

      * String|Uint8
      * Indicator of Asset Status to determine eligibility for ops using the PRüF protocol
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newStatus = "53"; //'53' is the lost status

      pruf.do.markAssetLostOrStolen(
         _assetId,
         _newStatus
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

      
----------

redeemPipAsset:
--------------------
   
   ``pruf.do.redeemPipAsset(assetId, authCode, nodeId, rightsHash, LifeCycleLimit)``
   
   Redeems a PIP asset.
   
Parameters
"""""""""""

   1. assetId

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

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";
      let _authCode = "0x2ce8d04a9c35987429af538825cd2438cc5c5bb5dc427955f84daaa3ea105016";
      let _nodeId = "10";
      let _rightsHash = pruf.utils.generateRightsHash(_assetId, ["userInfo1", "userInfo2", "userInfo3", "userInfo4"]);
      let _lifeCycleLimit = "100000";

      pruf.do.redeemPipAsset(
         _assetId, 
         _authCode, 
         _nodeId, 
         _rightsHash, 
         _LifeCycleLimit
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

mintPip:
--------------------
   
   ``pruf.do.mintPip(assetId, authCodeHash, nodeId)``
   
   Redeems a PIP asset.
   
Parameters
"""""""""""

   1. assetId

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

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";
      let _authCode = "0x2ce8d04a9c35987429af538825cd2438cc5c5bb5dc427955f84daaa3ea105016";
      let _nodeId = "10";

      pruf.do.mintPip(
         _assetId, 
         _authCode, 
         _nodeId, 
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

setForSale:
--------------------
   
   ``pruf.do.setForSale(assetId, price, currency, setTransferable)``
   
   Posts an asset for sale at given price.
   
Parameters
"""""""""""

   1. assetId

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

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";
      let _price = "100000000000000000000";
      let _currency = "2";
      let _setTransferable = "170"

      pruf.do.setForSale(
         _assetId, 
         _price, 
         _currency, 
         _setTransferable
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

unSetForSale:
--------------------
   
   ``pruf.do.unSetForSale(assetId)``
   
   Removes sale price of an asset.
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";

      pruf.do.unSetForSale(
         _assetId, 
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

buyAsset:
--------------------
   
   ``pruf.do.buyAsset(assetId)``
   
   Purchases an asset which has been listed for sale.
   
Parameters
"""""""""""

   1. assetId

      * String|Bytes32
      * Unique value which refers to an asset
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";

      pruf.do.buyAsset(
         _assetId, 
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

recycleAsset:
--------------------
   
   ``pruf.do.recycleAsset(assetId, rightsHash, nodeId)``
   
   Recycles a discarded asset token into the calling address.
   
Parameters
"""""""""""

   1. assetId

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

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";
      let _rightsHash = pruf.utils.generateRightsHash(_assetId, ["userInfo1", "userInfo2", "userInfo3", "userInfo4"]);
      let _nodeId = "10";

      pruf.do.recycleAsset(
         _assetId, 
         _rightsHash, 
         _nodeId
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

setColdWallet:
--------------------
   
   ``pruf.do.setColdWallet()``
   
   Sets calling address to a cold wallet.
   
Parameters
"""""""""""

   1. none
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      pruf.do.setColdWallet()
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

unSetColdWallet:
--------------------
   
   ``pruf.do.unSetColdWallet()``
   
   Sets calling address to a hot wallet.
   
Parameters
"""""""""""

   1. none
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      pruf.do.unSetColdWallet()
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

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

      //Example pruf-js code
   
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


----------

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

      //Example pruf-js code
   
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


----------

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

      //Example pruf-js code
   
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


----------

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

      //Example pruf-js code
   
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


----------

modifyExtendedConfig:
----------------------
   
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

      //Example pruf-js code
   
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

----------

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

      //Example pruf-js code
   
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


----------

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

      //Example pruf-js code
   
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


----------

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

      //Example pruf-js code
   
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


----------

getId: (!!TEST NETWORK ONLY!!)
--------------------------------
   
   ``pruf.do.getId()``
   
   Mints an ID token for use on the testNet.

Parameters
"""""""""""

   1. none


Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      pruf.do.getId()
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

getPruf: (!!TEST NETWORK ONLY!!)
---------------------------------
   
   ``pruf.do.getPruf()``
   
   Mints testNet pruf at 100k testNet PRUF per 1 test Ether sent.

Parameters
"""""""""""

   1. none.


Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      pruf.do.getPruf()
      .send({ from: props.addr value: 1000000000000000000})
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


.get
============

-------------------------------------------------------------------------------------------------

----------

assetRecordExists:
----------

``pruf.get.assetRecordExists(assetId)``

Returns boolean for asset existance at ID.

Parameters
"""""""""""
   1. assetId
   
      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network.

Returns
"""""""""""
   1. Boolean
   
      * True/False
      * If returned value is true, the asset exists. If false, asset does not exist.

  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";

   pruf.get.assetRecordExists(
      _assetId,
   )
   .then(e => {
      console.log(e)
      //Expected output true/false
   }


   
----------

nodeNameAvailable:
----------

``pruf.get.nodeNameAvailable(name)``

Returns boolean for node existance at name.

Parameters
"""""""""""
   1. name

      * String
      * Name which will be associated with the node and assets minted under it

Returns
"""""""""""
   1. Boolean
   
      * True/False
      * If returned value is true, the node name is available. If false, the name is already in use, therefore unavailable.

  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _name = "Rolex";

   pruf.get.nodeNameAvailable(
      _name,
   )
   .then(e => {
      console.log(e)
      //Expected output true/false
   }



----------

nodePricing:
----------

``pruf.get.nodePricing()``

Returns object containing all current node pricing data.

Parameters
"""""""""""
   None

Returns
"""""""""""
   1. Object
      
      * currentNodeIndex 
         * Uint256
         * Current index position of nodes. Next node to be minted will be index (currentNodeIndex + 1).
      * currentNodePrice
         * Uint256
         * Current Node price in PRUF (zero decimals).
  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   pruf.get.nodePricing()
   .then(e => {
      console.log(e)
      //Expected output {currentNodeIndex, currentNodePrice}
   }



----------

nodeData:
----------

``pruf.get.nodeData(nodeId)``

Returns object containing for all current node data.

Parameters
"""""""""""
   1. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

Returns
"""""""""""
   1. Object
      
      * name 
         * String
         * Current name of node.
      * root 
         * Uint32
         * Current root node of node.
      * custodyType
         * Uint8
         * Current custody type of node.
      * managementType
         * Uint8
         * Current management type of node.
      * storageProvider
         * Uint8
         * Current storage provider of node.
      * discount
         * Uint32
         * Current discount of node.
      * referenceAddress
         * Address
         * Current reference address of node.
      * switches
         * Uint8
         * Current switch data of node.
      * extData 
         * Bytes32
         * Current attatched extended data of node.
  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   pruf.get.nodeData(_nodeId)
   .then(e => {
      console.log(e)
      //Expected output {name, 
      //                 root, 
      //                 custodyType, 
      //                 managementType, 
      //                 storageProvider, 
      //                 discount, 
      //                 referenceAddress, 
      //                 switches, 
      //                 extData}
   }


  
----------

nodeName:
----------

``pruf.get.nodeName(nodeId)``

Returns name attatched to nodeId.

Parameters
"""""""""""
   1. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

Returns
"""""""""""
   1. String
   
      * Name attatched to desired node.

  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _nodeId = "1000003";

   pruf.get.nodeName(_nodeId,)
   .then(e => {
      console.log(e)
      //Expected output: String
   }



  
----------

operationCost:
----------

``pruf.get.operationCost(nodeId, operationIndex)``

Returns all pricing info for a defined operation.

Parameters
"""""""""""
   1. operationIndex 

      * String|Uint16
      * Index used to catergorize operation costs throughout the PRUF network.

   2. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.


Returns
"""""""""""
   1. Object
      
      * total
         * Uint
         * Total cost(s) added together (node + root)
      * node
         * Uint256
         * Cost of operation set by node holder.
      * root
         * Uint256  
         * Cost of operation set by root node holder.
      * beneficiary
         * Address
         * Beneficiary address set by node holder to recieve node rewards.
      * rootBeneficiary
         * Address
         * Beneficiary address set by root node holder to recieve root node rewards.

  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _operationIndex = "1";
   let _nodeId = "1000003";

   pruf.get.operationCost(
      _operationIndex,
      _nodeId
   )
   .then(e => {
      console.log(e)
      //Expected output {total, node, root, beneficiary, rootBeneficiary}
   }


  
----------

userType:
----------

``pruf.get.userType(address, nodeId)``

Returns user type for address at a specified node.

Parameters
"""""""""""
   1. address
   
         * String|Address
         * Address of node authorized user

   2. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

Returns
"""""""""""
   1. Uint8
      
      * User type for requested address for specified node.

  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _address = "0xa49811140e1d6f653dec28037be0924c811c4538"
   let _nodeId = "1000003";

   pruf.get.userType(
      address,
      _nodeId,
   )
   .then(e => {
      console.log(e)
      //Expected output: Uint8
   }


  
----------

nodeId:
----------

``pruf.get.nodeId(name)``

Returns nodeId reletive to name provided.

Parameters
"""""""""""
   1. name
   
      * String
      * Name of node

Returns
"""""""""""
   1. Uint32
      
      * NodeId attatched to given node name.

  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _name = "Rolex";

   pruf.get.nodeId(_name)
   .then(e => {
      console.log(e)
      //Expected output: Uint32
   }


  
----------

isSameRoot:
----------

``pruf.get.isSameRoot(nodeId1, nodeId2)``

Returns whether two nodes are connected to the same root node.

Parameters
"""""""""""
   1. nodeId1

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

   2. nodeId2

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

Returns
"""""""""""
   1. Boolean
      
      * True/False
      * If true, both nodes have the same root node. If false, the nodes have different root nodes.

  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _nodeId1 = "1000003";
   let _nodeId2 = "1000004";

   pruf.get.isSameRoot(nodeId1, nodeId2)
   .then(e => {
      console.log(e)
      //Expected output: True/False
   }


  
----------

escrowData:
----------

``pruf.get.escrowData(assetId)``

Returns all current escrow data attatched to an asset.

Parameters
"""""""""""
   1. assetId
   
   * String|Bytes32
   * Hash built from individual inputs which is used to identify the asset on the network.

Returns
""""""""""" 

   1. Object
      
      * escrowContractHash
         * Bytes32
         * Hash of the name of the controlling escrow contract
      * escrowOwnerHash
         * Bytes32
         * Hash of an address designated as an executor for the escrow contract
      * timelock
         * Uint256
         * The time lock associated with the escrowed asset.
  
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _assetId = "0x6a21cf8dad19b95d6976b80a0ea46f71e5acaeb0d7ce0c952c612cb0e1b39b50";

   pruf.get.escrowData(assetId)
   .then(e => {
      console.log(e)
      //Expected output: {escrowContractHash, escrowOwnerHash, timelock}
   }


  
----------

escrowOwner:
----------

``pruf.get.escrowOwner(assetId)``

Returns the hash of an address designed as an executor in the escrow contract for a specific asset.

Parameters
"""""""""""
   1. assetId
   
      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network.

Returns
"""""""""""

   1. Bytes32
      
      * Hash of an address designated as an executor for the escrow contract
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _assetId = "0x6a21cf8dad19b95d6976b80a0ea46f71e5acaeb0d7ce0c952c612cb0e1b39b50";

   pruf.get.escrowOwner(assetId)
   .then(e => {
      console.log(e)
      //Expected output: Bytes32
   }


  
----------

isRightsHolder:
----------

``pruf.get.isRightsHolder(assetId, rightsHash)``

Returns a boolean confirming or denying whether or not the given rightsHash is associated with the given assetId.

Parameters
"""""""""""
   1. assetId
   
      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network.
   
   2. rightsHash
      
      * String|Bytes32
      * Hash built from individual inputs which is used to verify asset ownership

Returns
"""""""""""

   1. Boolean
      
      * True/False
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _assetId = "0x6a21cf8dad19b95d6976b80a0ea46f71e5acaeb0d7ce0c952c612cb0e1b39b50";
   let _rightsHash = "0xd4956f6b3d95257bd57fdabb49ee8ed2ccd96db0379fbfe8749275c52b7cce86";

   pruf.get.isRightsHolder(_assetId, _rightsHash)
   .then(e => {
      console.log(e)
      //Expected output: True/False
   }



----------
  
assetPriceData:
----------

``pruf.get.assetPriceData(assetId)``

Returns all price data associated with an asset, including price and currency.

Parameters
"""""""""""
   1. assetId
   
      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network.

Returns
"""""""""""

   1. Object
      
      * price
         * Uint120
         * The price set by an asset holder who sets their asset for sale.
      * currency
         * Uint8
         * the currency set by an asset holder who sets their asset for sale(e.g. PRUF, USD, ETH)
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _assetId = "0x6a21cf8dad19b95d6976b80a0ea46f71e5acaeb0d7ce0c952c612cb0e1b39b50";

   pruf.get.assetPriceData(_assetId)
   .then(e => {
      console.log(e)
      //Expected output: {price, currency}
   }



----------
  
assetRecord:
----------

``pruf.get.assetRecord(assetId)``

Returns all public data associated with an asset.

Parameters
"""""""""""
   1. assetId
   
      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network.

Returns
"""""""""""

   1. Object
      
      * id
         * Bytes32
         * Hash built from individual inputs which is used to identify the asset on the network.
      * statusNum
         * Uint8
         * The current status number of an asset, acting as a layer of permissions for the network.
      * forceModCount
         * Uint8
         * The number of times an asset has been modified forcefully by a node manager. JBS:Examine
      * nodeId
         * Uint32
         * ID used to reference a node, in most cases used to classify assets by type or producer.
      * countPair
         * Uint32/Uint32
         * Non-increasing one way counter used for life-cycle purposes(e.g. Warrenties, Limited-issue items).
      * mutableDataA
         * Bytes32
         * A container used for storing a modifiable data hash.
      * mutableDataB
         * Bytes32
         * A container used for storing a modifiable data hash.
      * engravingA
         * Bytes32
         * A container used for storing an unmodifiable data hash.
      * engravingB
         * Bytes32
         * A container used for storing an unmodifiable data hash.
      * numberOfTransfers
         * Uint16
         * A counter tracking the lifecycle movement of an asset, which increments upon each asset transfer.
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _assetId = "0x6a21cf8dad19b95d6976b80a0ea46f71e5acaeb0d7ce0c952c612cb0e1b39b50";

   pruf.get.assetRecord(_assetId)
   .then(e => {
      console.log(e)
      //Expected output: {id, 
      //                  statusNum, 
      //                  forceModCount, 
      //                  nodeId, 
      //                  countPair, 
      //                  mutableDataA, 
      //                  mutableDataB, 
      //                  engravingA, 
      //                  engravingB, 
      //                  numberOfTransfers}
   }



----------
  
heldAssetAtIndex:
----------

``pruf.get.heldAssetAtIndex(address, index)``

Returns a token ID owned by an address at an enumerated `index` of its token list

Parameters
"""""""""""
   1. address
   
      * String|Address
      * Address used to select target user.
  
   2. index
      
      * String|Uint256
      * Used to select an asset out of an enumerated list of assets at a given address.

Returns
"""""""""""

   1. Uint256
      
      * Hash built from individual inputs which is used to identify the asset on the network. JBS: Examine (uint256? tokenID is idx?)
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _address = "0xa49811140e1d6f653dec28037be0924c811c4538"
   let _index = "3"

   pruf.get.heldAssetAtIndex(_address, _index)
   .then(e => {
      console.log(e)
      //Expected output: Uint256
   }



----------
  
assetAtIndex:
----------

``pruf.get.assetAtIndex(address, index)``

Returns a token ID at an enumerated `index` of all tokens.

Parameters
"""""""""""
   1. index
      
      * String|Uint256
      * Used to select an asset out of an enumerated list of assets at a given address.

Returns
"""""""""""

   1. uint256
      
      * Hash built from individual inputs which is used to identify the asset on the network. JBS: Examine (uint256? tokenID is idx?)
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _index = "3"

   pruf.get.assetAtIndex(_index)
   .then(e => {
      console.log(e)
      //Expected output: Uint256
   }



----------
  
assetTokenExists:
----------

``pruf.get.assetTokenExists(tokenId)``

Returns a boolean confirming or denying whether or not the given tokenId exists within the network.

Parameters
"""""""""""
   1. tokenId
   
      * String|Uint256
      * Used to select an asset out of the list of created assets throughout the network.

Returns
"""""""""""

   1. Boolean
      
      * True/False
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _tokenId = "0x6a21cf8dad19b95d6976b80a0ea46f71e5acaeb0d7ce0c952c612cb0e1b39b50";

   pruf.get.assetTokenExists(_tokenId)
   .then(e => {
      console.log(e)
      //Expected output: True/False
   }



----------
  
assetBalance:
----------
   
``pruf.get.assetBalance(address)``
   
Returns number of asset tokens held by an address
   
Parameters
   """""""""""
   1. address
      
      * String|Address
      * Address used to select target user.
   
Returns
"""""""""""
   
   1. Uint256
         
      * Number of asset tokens held by address
Example usage
""""""""""""""
   
.. code-block:: javascript 
   :linenos:
   
   //Example pruf-js code
   
   let _address = "0xa49811140e1d6f653dec28037be0924c811c4538"
   
   pruf.get.assetBalance(_address)
   .then(e => {
      console.log(e)
      //Expected output: Uint256
   }


----------

howManyAssets:
----------
   
``pruf.get.howManyAssets()``
   
Returns total number of assets within the network.
   
Parameters
   """""""""""
   None
   
Returns
"""""""""""
   
   1. Uint256
         
      * Number of asset tokens minted throughout the network
Example usage
""""""""""""""
   
.. code-block:: javascript 
   :linenos:
   
   //Example pruf-js code
   
   pruf.get.howManyAssets()
   .then(e => {
      console.log(e)
      //Expected output: Uint256
   }


----------

ownerOfAsset:
----------
   
``pruf.get.ownerOfAsset(assetId)``
   
Returns onwer address associated with an asset token.
   
Parameters
   """""""""""
   1. assetId
   
      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network.
   
Returns
"""""""""""
   
   1. Address
         
      * Owner address of given assetId
Example usage
""""""""""""""
   
.. code-block:: javascript 
   :linenos:
   
   //Example pruf-js code

   let _assetId = "0x6a21cf8dad19b95d6976b80a0ea46f71e5acaeb0d7ce0c952c612cb0e1b39b50";
   
   pruf.get.ownerOfAsset(_assetId)
   .then(e => {
      console.log(e)
      //Expected output: Address
   }



----------
  
prufBalance:
----------
   
``pruf.get.prufBalance(address)``
   
Returns number of PRUF tokens held by an address
   
Parameters
   """""""""""
   1. address
      
      * String|Address
      * Address used to select target user.
   
Returns
"""""""""""
   
   1. Uint256
         
      * Number of PRUF tokens held by address
Example usage
""""""""""""""
   
.. code-block:: javascript 
   :linenos:
   
   //Example pruf-js code
   
   let _address = "0xa49811140e1d6f653dec28037be0924c811c4538"
   
   pruf.get.prufBalance(_address)
   .then(e => {
      console.log(e)
      //Expected output: Uint256
   }



----------
  
isColdWallet:
----------

``pruf.get.isColdWallet(address)``

Returns a boolean confirming or denying whether or not the given address is a locked PRUF wallet or not.

Parameters
"""""""""""
   1. address
   
      * String|Address
      * Used to select an account to view its status.

Returns
"""""""""""

   1. Boolean
      
      * True/False
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code
   
   let _address = "0xa49811140e1d6f653dec28037be0924c811c4538"
   
   pruf.get.isColdWallet(_address)
   .then(e => {
      console.log(e)
      //Expected output: True/False
   }


----------

howManyPruf:
----------
   
``pruf.get.howManyPruf()``
   
Returns total number of PRUF within the network.
   
Parameters
   """""""""""
   None
   
Returns
"""""""""""
   
   1. Uint256
         
      * Number of PRUF tokens minted throughout the network.
Example usage
""""""""""""""
   
.. code-block:: javascript 
   :linenos:
   
   //Example pruf-js code
   
   pruf.get.howManyPruf()
   .then(e => {
      console.log(e)
      //Expected output: Uint256
   }



----------
  
nodeBalance:
----------
   
``pruf.get.nodeBalance(address)``
   
Returns number of nodes held by an address
   
Parameters
   """""""""""
   1. address
      
      * String|Address
      * Address used to select target user.
   
Returns
"""""""""""
   
   1. Uint256
         
      * Number of nodes held by address
Example usage
""""""""""""""
   
.. code-block:: javascript 
   :linenos:
   
   //Example pruf-js code
   
   let _address = "0xa49811140e1d6f653dec28037be0924c811c4538"
   
   pruf.get.nodeBalance(_address)
   .then(e => {
      console.log(e)
      //Expected output: Uint256
   }



----------
  
assetTokenExists:
----------

``pruf.get.assetTokenExists(tokenId)``

Returns a boolean confirming or denying whether or not the given tokenId exists within the network.

Parameters
"""""""""""
   1. tokenId
   
      * String|Uint256
      * Used to select an asset out of the list of created assets throughout the network.

Returns
"""""""""""

   1. Boolean
      
      * True/False
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _tokenId = "0x6a21cf8dad19b95d6976b80a0ea46f71e5acaeb0d7ce0c952c612cb0e1b39b50";

   pruf.get.assetTokenExists(_tokenId)
   .then(e => {
      console.log(e)
      //Expected output: True/False
   }



----------
  
nodeExists:
----------

``pruf.get.nodeExists(nodeId)``

Returns a boolean confirming or denying whether or not the given nodeId exists within the network.

Parameters
"""""""""""

   1. nodeId

      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.

Returns
"""""""""""

   1. Boolean
      
      * True/False
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _nodeId = "1000003";

   pruf.get.nodeExists(_nodeId)
   .then(e => {
      console.log(e)
      //Expected output: True/False
   }



----------
  
heldNodeAtIndex:
----------

``pruf.get.heldNodeAtIndex(address, index)``

Returns a nodeId owned by an address at an enumerated `index` of its node list.

Parameters
"""""""""""
   1. address
   
      * String|Address
      * Address used to select target user.
  
   2. index
      
      * String|Uint256
      * Used to select an asset out of an enumerated list of nodes at a given address.

Returns
"""""""""""

   1. Uint256
      
      * nodeId used to identify unique node from one another.
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _address = "0xa49811140e1d6f653dec28037be0924c811c4538"
   let _index = "3"

   pruf.get.heldNodeAtIndex(_address, _index)
   .then(e => {
      console.log(e)
      //Expected output: Uint256
   }



----------
  
nodeAtIndex:
----------

``pruf.get.nodeAtIndex(address, index)``

Returns a nodeID at an enumerated `index` of all nodes.

Parameters
"""""""""""
   1. index
      
      * String|Uint256
      * Used to select an asset out of an enumerated list of nodes at a given address.

Returns
"""""""""""

   1. uint256
      
      * NodeId which is used to identify the node on the network.
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _index = "3"

   pruf.get.nodeAtIndex(_index)
   .then(e => {
      console.log(e)
      //Expected output: Uint256
   }


----------

howManyNodes:
----------
   
``pruf.get.howManyNodes()``
   
Returns total number of nodes within the network.
   
Parameters
   """""""""""
   None
   
Returns
"""""""""""
   
   1. Uint256
         
      * Number of nodes minted throughout the network
Example usage
""""""""""""""
   
.. code-block:: javascript 
   :linenos:
   
   //Example pruf-js code
   
   pruf.get.howManyNodes()
   .then(e => {
      console.log(e)
      //Expected output: Uint256
   }


----------

ownerOfNode:
----------
   
``pruf.get.ownerOfNode(nodeId)``
   
Returns owner address associated with a node.
   
Parameters
   """""""""""
   
   1. nodeId
      
      * String|Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.
   
Returns
"""""""""""
   
   1. Address
         
      * Owner address of given nodeId
Example usage
""""""""""""""
   
.. code-block:: javascript 
   :linenos:
   
   //Example pruf-js code

   let _nodeId = "1000003";
   
   pruf.get.ownerOfNode(_nodeId)
   .then(e => {
      console.log(e)
      //Expected output: Address
   }



----------
  
holdsId:
----------

``pruf.get.holdsId(address)``

Returns a boolean confirming or denying whether or not the given address holds an ID token.

Parameters
"""""""""""
   1. address

      * String|Address
      * Address used to select target user.

Returns
"""""""""""

   1. Boolean
      
      * True/False
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _address = "0xa49811140e1d6f653dec28037be0924c811c4538"

   pruf.get.holdsId(_address)
   .then(e => {
      console.log(e)
      //Expected output: True/False
   }

   
.utils
============

-------------------------------------------------------------------------------------------------

----------
  
isValidId:
----------

``pruf.utils.isValidId(id)``

Returns a boolean confirming or denying whether or not the given id is a valid id.

Parameters
"""""""""""
   1. id

      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network.

Returns
"""""""""""

   1. Boolean
      
      * True/False
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let unhashedId = {
   type: "bike,
   manufacturer: "mongoose",
   model: "trail",
   serial: "12345678"
   }
   let _id = await pruf.utils.generateAssetID(unhashedId)

   pruf.utils.isValidId(_id)
   .then(e => {
      console.log(e)
      //Expected output: True/False
   }




----------
  
ipfsFromB32: JBS:Examine
----------

``pruf.utils.ipfsFromB32(bytes32Hex)``

Returns a boolean confirming or denying whether or not the given id is a valid id.

Parameters
"""""""""""
   1. bytes32Hex

      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network.

Returns
"""""""""""

   1. Boolean
      
      * True/False
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let unhashedId = {
   type: "bike,
   manufacturer: "mongoose",
   model: "trail",
   serial: "12345678"
   }
   let _id = await pruf.utils.generateAssetID(unhashedId)

   pruf.utils.ipfsFromB32(_id)
   .then(e => {
      console.log(e)
      //Expected output: True/False
   }



   
----------
  
ipfsToB32: JBS:Examine
----------

``pruf.utils.ipfsToB32(bytes32Hex)``

Returns a boolean confirming or denying whether or not the given id is a valid id.

Parameters
"""""""""""
   1. bytes32Hex

      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network.

Returns
"""""""""""

   1. Boolean
      
      * True/False
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let unhashedId = {
   type: "bike,
   manufacturer: "mongoose",
   model: "trail",
   serial: "12345678"
   }
   let _id = await pruf.utils.generateAssetID(unhashedId)

   pruf.utils.ipfsToB32(_id)
   .then(e => {
      console.log(e)
      //Expected output: True/False
   }



   
----------
  
stringifyStatus:
----------

``pruf.utils.stringifyStatus(status)``

Returns the status name associated with a status number.

Parameters
"""""""""""
   * statusNum
  
      * String|Uint8
      * The current status number of an asset, acting as a layer of permissions for the network.

Returns
"""""""""""

   1. String
      
      * Status name associated with a status number
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _status = "51"

   pruf.utils.stringifyStatus(_status)
   .then(e => {
      console.log(e)
      //Expected output: "Transferrable"
   }



   
----------
  
convertEscrowTime:
----------

``pruf.utils.convertEscrowTime(rawTime, to)``

Converts rawTime(seconds) to desired measurement(minutes, hours, days, weeks) for escrow related functions.

Parameters
"""""""""""
   * rawTime
  
      * Number
      * The number of seconds being converted.
      
   * to
        
      * String
      * The conversion rate for rawTime (minutes, hours, days, weeks).

Returns
"""""""""""

   1. String
      
      * Converted time measurement
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _rawTime = "180"
   let _to = "minutes"

   pruf.utils.convertEscrowTime(_rawTime, _to)
   .then(e => {
      console.log(e)
      //Expected output: "3"
   }



   
----------
  
tenThousandHashesOf: JBS: Examine
----------

``pruf.utils.tenThousandHashesOf(rawTime, to)``

Converts rawTime(seconds) to desired measurement(minutes, hours, days, weeks) for escrow related functions.

Parameters
"""""""""""
   * rawTime
  
      * Number
      * The number of seconds being converted.
      
   * to
        
      * String
      * The conversion rate for rawTime (minutes, hours, days, weeks).

Returns
"""""""""""

   1. String
      
      * Converted time measurement
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _rawTime = "180"
   let _to = "minutes"

   pruf.utils.tenThousandHashesOf(_rawTime, _to)
   .then(e => {
      console.log(e)
      //Expected output: "3"
   }


 
----------
  
generateAssetID:
----------

``pruf.utils.generateAssetID({ type, make, model, serial })``

Generates an assetId from specific input fields.

Parameters
"""""""""""
   1. Object

      * type  
         * String
         * Type of asset being made.
      * make  
         * String
         * Make of asset being made.
      * model  
         * String
         * Model of asset being made.
      * serial  
         * String
         * Serial of asset being made.

Returns
"""""""""""

   1. String
      
      * assetId Hash
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _unhashedId = {
   type: "bike,
   manufacturer: "mongoose",
   model: "trail",
   serial: "12345678"
   }

   pruf.utils.generateAssetID(_unhashedId)
   .then(e => {
      console.log(e)
      //Expected output: "0x6a21cf8dad19b95d6976b80a0ea46f71e5acaeb0d7ce0c952c612cb0e1b39b50"
   }


 
----------
  
generateSecureRgt:
----------

``pruf.utils.generateSecureRgt(assetId, { first, middle, last, id, password })``

Generates a rightsHash from specific owner input fields and an assetId.

Parameters
"""""""""""
   1. assetId

      * String|Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network.

   2. Object

      * first  
         * String
         * First name of owner of asset being made.
      * middle  
         * String
         * Middle name of owner of asset being made.
      * last  
         * String
         * Last name of owner of asset being made.
      * id  
         * String
         * Id of owner of asset being made.
      * password  
         * String
         * Password set by owner of asset being made.

Returns
"""""""""""

   1. String
      
      * Asset rightsHash
Example usage
""""""""""""""

.. code-block:: javascript 
   :linenos:

   //Example pruf-js code

   let _assetId = "0x6a21cf8dad19b95d6976b80a0ea46f71e5acaeb0d7ce0c952c612cb0e1b39b50"
   let _unhashedRights = {
   first: "John,
   middle: "Frederik",
   last: "Doe",
   id: "12345678",
   password: "******"  
   }

   pruf.utils.generateSecureRgt(_assetId, _unhashedRights)
   .then(e => {
      console.log(e)
      //Expected output: "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
   }


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