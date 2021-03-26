.. pruf-js documentation master file, created by
   sphinx-quickstart on Fri Mar 26 11:02:50 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

**pruf-js**
===================================

!! THE DOCUMENTATION IN THIS PAGE IS INDEV. DO NOT USE IT AS A REFERENCE JUST YET. !!

Interface for the pruf network written in javascript

.. toctree::
   :maxdepth: 2
   :caption: Contents:

Installation
=================

Install using node package manager:

   ``npm i --s pruf-js``

   *note: pruf-js requires an instance of web3.js to function.*

   *To learn more about web3.js, go here:* 
   
   https://web3js.readthedocs.io


Example Initialization
-----------------------

.. code-block:: javascript 
   :linenos:

   //Example pruf-js Initialization code

   const Web3 = require('web3');
   const PRUF = require('pruf-js');

   const web3 = new Web3("https://kovan.infura.io/v3/yourInfuraKeyHere");
   const pruf = new PRUF(web3);

   console.log("Here is the client interface:", pruf);




.do
============

-------------------------------------------------------------------------------------------------

mintAsset
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
      * Id used to reference a node, in this case classifies the asset by type or producer
   
   4. LifeCycleLimit
      
      * String|Uint32
      * (experimental) Used for applications which are concerned with service iteration
   
   5. extData
   
      * String|Bytes32
      * Holder-mutable key used to link asset to off-chain storage
  
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

verifyRightsHash
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


transferAsset
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

setAssetURI
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

discardAsset
-----------------
   
   ``pruf.do.discardAsset(assetIndex)``
   
   Discards an asset (Can then be recycled).
   
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
      
      
inscribeAsset
-----------------
   
   ``pruf.do.inscribeAsset(assetIndex, inscription)``
   
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

      pruf.do.inscribeAsset(
      _assetIndex,
      _inscription
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      })
         
importAsset
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

modifyAssetRightsHash
----------------------
   
   ``pruf.do.modifyAssetRightHolder(assetIndex, newRightsHash)``
   
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

      pruf.do.modifyAssetRightsHash(
      _assetIndex,
      _newHash
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

decrementLifeCycle
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

exportAsset
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

modifyAssetExtData
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

.get
============

-------------------------------------------------------------------------------------------------

getThing
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

util
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

Or on Telegram t.me/pruftalk



License
--------

The project is licensed under the MIT license.