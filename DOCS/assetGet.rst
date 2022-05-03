.get.asset
============

.recordExists
----------------------

``pruf.get.asset.recordExists(assetId)``

Check to see if an asset exists.

Parameters
"""""""""""

   1. assetId
   
      * String | Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network
   
Returns
""""""""""""

    1. Bool

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

         pruf.get.asset.recordExists(_assetId)
         .then(console.log)


---------------

.isRightsHolder
----------------------

``pruf.get.asset.isRightsHolder(assetId, rightsHash)``

Check to see if hash matches the one on file.

Parameters
"""""""""""

   1. assetId
   
      * String | Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network
   2. rightsHash

      * String | Bytes32
      * Hash built from a secret which is used to verify asset ownership
   
Returns
""""""""""""

    1. Bool

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
         let _rightsHash = pruf.utils.generateSecureRgt(assetId, "Secret");
         
         pruf.get.asset.isRightsHolder(_assetId, _rightsHash)
         .then(console.log)


---------------

.record
----------------------

``pruf.get.asset.record(assetId)``

Get asset record.

Parameters
"""""""""""

   1. assetId
   
      * String | Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network
   
Returns
""""""""""""

    1. Object | Record

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

         pruf.get.asset.record(_assetId)
         .then(console.log)


---------------

.heldAssetAtIndex
----------------------

``pruf.get.asset.heldAssetAtIndex(address, index)``

Get the asset ID at index from a holding wallet.

Parameters
"""""""""""

   1. address
   
      * String | Address
      * Address of token holder
   
   2. index
      * String | Uint256
      * Index of asset in wallet
  
Returns
""""""""""""

    1. Bytes32 | assetId

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _address = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049"
         let _index = "1"

         pruf.get.asset.heldAssetAtIndex(_address, _index)
         .then(console.log)


---------------

.assetAtIndex
----------------------

``pruf.get.asset.assetAtIndex(index)``

Get asset ID at specified index.

Parameters
"""""""""""

   1. index
   
      * String | Uint256
      * Index of asset
   
Returns
""""""""""""

    1. Bytes32 | assetId

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _index = "3"

         pruf.get.asset.assetAtIndex(_index)
         .then(console.log)


---------------

.balanceOf
----------------------

``pruf.get.asset.balanceOf(address)``

Get the asset balance of a wallet.

Parameters
"""""""""""

   1. address
   
      * String | Address
      * Asset holder address
   
Returns
""""""""""""

    1. Uint256 | balance

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _address = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049"

         pruf.get.asset.balanceOf(_address)
         .then(console.log)


---------------

.totalSupply
----------------------

``pruf.get.asset.totalSupply()``

Get the total supply of assets.

Parameters
"""""""""""

   None
   
Returns
""""""""""""

    1. Uint256 | totalSupply

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         pruf.get.asset.totalSupply()
         .then(console.log)


---------------

.ownerOf
----------------------

``pruf.get.asset.ownerOf(assetId)``

Get the owner of a specified asset.

Parameters
"""""""""""

   1. assetId
   
      * String | Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network
   
Returns
""""""""""""

    1. Address | tokenHolder

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

         pruf.get.asset.ownerOf(_assetId)
         .then(console.log)


---------------

.URI
----------------------

``pruf.get.asset.URI(assetId)``

Get the full URI of a specified asset.

Parameters
"""""""""""

   1. assetId
   
      * String | Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network
   
Returns
""""""""""""

    1. String | URI

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

         pruf.get.asset.URI(_assetId)
         .then(console.log)


---------------

.isColdWallet
----------------------

``pruf.get.asset.isColdWallet(address)``

Check to see if an address is set to "cold".

Parameters
"""""""""""

   1. address
   
      * String | Address
      * Address to check
   
Returns
""""""""""""

    1. Bool

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _address = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049"

         pruf.get.asset.isColdWallet(_address)
         .then(console.log)


---------------

.isApprovedForAll
----------------------

``pruf.get.asset.isApprovedForAll(owner, operator)``

Check to see if an operator is approved for all ERC-721 asset functionality in a wallet.

Parameters
"""""""""""

   1. owner
   
      * String | Address
      * Owner address of assets
   
   2. operator
   
      * String | Address
      * Address of operator to investigate for eligibility
   
Returns
""""""""""""

    1. Bool

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _owner = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049"
         let _operator = "0x0D15833D60F448487f157578F3e8c208AFCBa537"

         pruf.get.asset.isApprovedForAll(_owner, _operator)
         .then(console.log)


---------------

.baseURIFromStorageProvider
----------------------

``pruf.get.asset.baseURIFromStorageProvider(storageProviderId)``

Determine the baseURI given the storage provider ID.

Parameters
"""""""""""

   1. storageProviderId
   
      * String | Uint8
      * ID of storage provider recognized by the PRüF protocol
   
Returns
""""""""""""

    1. String | baseUri

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _storageProviderId = "1"

         pruf.get.asset.baseURIFromStorageProvider(_storageProviderId)
         .then(console.log)


---------------

.baseURIFromNode
----------------------

``pruf.get.asset.baseURIFromNode(nodeId)``

Determine the baseURI given the node ID.

Parameters
"""""""""""

   1. nodeId
   
      * String | Uint32
      * ID of node within the PRüF protocol
   
Returns
""""""""""""

    1. String | baseUri

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _nodeId = "10"

         pruf.get.asset.baseURIFromNode(_nodeId)
         .then(console.log)


---------------

.approvedOperator
----------------------

``pruf.get.asset.approvedOperator(assetId)``

Get approved operator of an asset, if there is one.

Parameters
"""""""""""

   1. assetId
   
      * String | Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network
   
Returns
""""""""""""

    1. Array | operator

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"

         pruf.get.asset.approvedOperator(_assetId)
         .then(console.log)


---------------