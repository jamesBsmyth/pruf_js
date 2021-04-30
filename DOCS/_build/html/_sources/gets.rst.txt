.. image:: /image/prufLogo.png

.get
============

assetRecordExists:
-------------------

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
         * Deprecated, application TBD
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

   1. Bytes32|String
      
      * Hash built from individual inputs which is used to identify the asset on the network.
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

   1. Bytes32|String
      
      * Hash built from individual inputs which is used to identify the asset on the network.
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
