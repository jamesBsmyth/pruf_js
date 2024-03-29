.do.node
============

.transfer
----------------------

``pruf.do.node.transfer(from, to, nodeId)``

Transfer a node from a specified address.

Parameters
"""""""""""

   1. from
   
      * String | Address
      * Address currently holding the node
   
   2. to
   
      * String | Address
      * Address which is to receive the node
   
   3. nodeId
      
      * String | Uint32
      * ID used to reference the node to be transferred
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         let _from = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049";
         let _to = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1";
         let _nodeId = "10";

         pruf.do.node.transfer
         (
            _from,
            _to,
            _nodeId
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


-----------------

.setOperationCost
----------------------

``pruf.do.node.setOperationCost(nodeId, operationIndex, cost, beneficiary)``

Sets the cost of a node operation in $PRUF.

Parameters
"""""""""""

   1. nodeId
   
      * String | Uint32
      * ID used to reference a node
   
   2. operationIndex
   
      * String | Uint16
      * The index number of the operation cost to be modified
   
   3. cost
      
      * String | Uint256
      * The desired amount to which the cost will be set
   
   4. beneficiary
      
      * String | Address
      * The address to which revenue for this service should be sent

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         let _nodeId = "10";
         let _operationIndex  = "1";
         let _cost = "10000000000000000000";
         let _beneficiary = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049";

         pruf.do.node.setOperationCost
         (
            _nodeId,
            _serviceId,
            _cost,
            beneficiary
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });

---------------

.updateImportStatus
----------------------

``pruf.do.node.updateImportStatus(thisNodeId, otherNodeId, newStatus)``

Change the one-way import relationship between nodes.

Parameters
"""""""""""

   1. thisNodeId
   
      * String | Uint32
      * ID of controlled node from which the status will change
   
   2. otherNodeId
   
      * String | Uint32
      * ID of node to which the status will change
   
   3. newStatus
      
      * String | Uint32
      * ID used to reference a node
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         let _thisNodeId = "10";
         let _otherNodeId = "11";
         let _newStatus = "1";

         pruf.do.node.updateImportStatus
         (
            _thisNodeId,
            _otherNodeId,
            _newStatus
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.updateCAS
----------------------

``pruf.do.node.updateCAS(nodeId, CAS1, CAS2)``

Update the content addressible storage attatched to a specified node.

Parameters
"""""""""""

   1. nodeId
   
      * String | Uint32
      * Address currently holding the node
   
   2. CAS1/2
   
      * String | Bytes32
      * Key used to link node to off-chain storage, CAS2 must be set to bytes32(0) if it is not required.
   
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _nodeId = "10";
         let _CAS1 = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"
         let _CAS2 = "0x0000000000000000000000000000000000000000000000000000000000000000"

         pruf.do.node.updateCAS
         (
            _nodeId,
            _CAS1,
            _CAS2
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.authorizeUser
----------------------

``pruf.do.node.authorizeUser(nodeId, addressHash, userType)``

Authorize a user for activity on a node.

Parameters
"""""""""""

   1. nodeId
      
      * String | Uint32
      * ID used to reference a node
   
   2. addressHash
   
      * String | Address
      * Sha3 hash of the user's address which is to be authorized
   
   3. userType
      
      * String | Uint8
      * Type of user to set, by type ID
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         let _nodeId = "10";
         let _addressHash = "0x5fdbd35e8da83ee755d5e62a539e5ed7f47126abede0b8b10f9ea43dc6eed07f";
         let _userType = "1";
         

         pruf.do.node.authorizeUser
         (
            _nodeId,
            _addressHash,
            _userType
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.finalize
----------------------

``pruf.do.node.finalize(nodeId, managementType, storageProvider, refAddress, switches)``

Sets non-mutable settings and activates node for use in asset creation and management.

Parameters
"""""""""""

   1. nodeId
      
      * String | Uint32
      * ID used to reference a node
   
   2. managementType
   
      * String | Uint8
      * ID of the desired managent type setting
   
   3. storageProvider
   
      * String | Uint8
      * ID of the desired storage provider
   
   4. refAddress
   
      * String | Address
      * Address which permanently tied to the node for origin reference
   
   5. switches
      
      * String | Uint8
      * Combination of numbers which are refernced by position for various node and asset management rules
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         let _nodeId = "10";
         let _managementType = "2";
         let _storageProvider = "1";
         let _refAddress = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049";
         let _switches = "0201"

         pruf.do.node.transfer
         (
            _nodeId,
            _managementType,
            _storageProvider,
            _refAddress,
            _switches
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.approve
----------------------

``pruf.do.node.approve(to, nodeId)``

Approves an address to access ERC-721 functionality of a node.

Parameters
"""""""""""

   1. to
   
      * String | Address
      * Address to which user would like to grant approval
   
   2. nodeId
   
      * String | Uint32
      * ID used to reference a node

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         
         let _to = "0x0D15833D60F448487f157578F3e8c208AFCBa537"
         let _nodeId = "10"
         pruf.do.node.approve
         (
            _to,
            _nodeId
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.setApprovalForAll
----------------------

``pruf.do.node.setApprovalForAll(to, approved)``

Approves an address to access ERC-721 functionality of all node.

Parameters
"""""""""""

   1. to
   
      * String | Address
      * Address to which user would like to grant approval
   
   2. approved
   
      * Bool
      * Desired setting for approval

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         
         let _to = "0x0D15833D60F448487f157578F3e8c208AFCBa537"
         let _approval = false
         pruf.do.node.setApprovalForAll
         (
            _to,
            _approval
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.enableDefaultContracts
----------------------

``pruf.do.node.enableDefaultContracts(nodeId)``

Transfer a node from a specified address.

Parameters
"""""""""""

   1. nodeId
      
      * String | Uint32
      * ID used to reference a node
  
Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         let _nodeId = "10";

         pruf.do.node.enableDefaultContracts
         (
            _nodeId
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.enableContract
----------------------

``pruf.do.node.enableContract(name, nodeId, authLevel)``

Transfer a node from a specified address.

Parameters
"""""""""""

   1. name
      
      * String
      * Name of contract to be added for name resolution
  
   2. nodeId
      
      * String | Uint32
      * ID used to reference a node

   3. authLevel
      
      * String | Uint8
      * ID of authority level for new contract
  
Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         let _name = "NEW_ESCROW";
         let _nodeId = "10";
         let _authLevel = "3";

         pruf.do.node.enableContract
         (
             _name,
            _nodeId,
            _authLevel
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------


.mint
----------------------

``pruf.do.node.mint(domain, tld, rootNode, custodyType, CAS1, CAS2)``

Mint a new node using an unstoppable domain.

Parameters
"""""""""""

   1. domain
      
      * String
      * Name of domain from which to derive node info
  
   2. tld
      
      * String
      * Top level domain of desired unstoppable domain held by caller

   3. custodyType
      
      * String | Uint8
      * Indicates the desired custody type for assets minted using this node
  
   4. CAS1/2
      
      * String
      * Key used to link node to off-chain storage, CAS2 must be set to bytes32(0) if it is not required.
   
Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         let _domain = "mytestdomain";
         let _tld = ".crypto";
         let _rootNode = "3";
         let _custodyType = "2";
         let _CAS1 = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"
         let _CAS2 = "0x0000000000000000000000000000000000000000000000000000000000000000"


         pruf.do.node.enableContract
         (
             _domain,
            _tld,
            _rootNode,
            _custodyType,
            _CAS1,
            _CAS2
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });

