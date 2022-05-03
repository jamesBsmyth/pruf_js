.do.asset
============

.mint
----------------------

``pruf.do.asset.mint(assetId, rightsHash, nodeId, lifeCycleLimit, hardData1, hardData2, URISuffix)``

Mints an asset on PRüF.

Parameters
"""""""""""

   1. assetId
   
      * String | Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network
   
   2. rightsHash
   
      * String | Bytes32
      * Hash built from a secret, can be used to verify in-person ownership.
   
   3. nodeId
      
      * String | Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.
   
   4. lifeCycleLimit
      
      * String | Uint32
      * (experimental) Used for applications which are concerned with service iteration
   
   5. hardData(1/2)
   
      * String | Bytes32
      * Key used to link asset to off-chain storage, hardData2 must be set to bytes32(0) if it is not required.
   
   6. URISuffix
   
      * String
      * Hash of external CAS network suffix
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _assetId = pruf.utils.generateRawAssetID("input1", "input2", "input3", "input4");
         let _rightsHash = pruf.utils.generateSecureRgt(_assetId, "Secret");
         let _nodeId = "10";
         let _lifeCycleLimit = "100000"
         let _hardData1 = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"
         let _hardData2 = "0x0000000000000000000000000000000000000000000000000000000000000000"

         pruf.do.asset.mint
         (
            _assetId,
            _rightHolderHash,
            _nodeId,
            _lifeCycleLimit,
            _hardData1,
            _hardData2,
            URISuffix
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.mintBare
----------------------

``pruf.do.asset.mintBare(assetId, rightsHash, nodeId, lifeCycleLimit, hardData1, hardData2, URISuffix)``

Mints an asset on PRüF, with no attatched hardData.

Parameters
"""""""""""

   1. assetId
   
      * String | Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network
   
   2. rightsHash
   
      * String | Bytes32
      * Hash built from secrets, can be used to verify in-person ownership.
   
   3. nodeId
      
      * String | Uint32
      * ID used to reference a node, in most cases used to classify assets by type or producer.
   
   4. lifeCycleLimit
      
      * String | Uint32
      * (experimental) Used for applications which are concerned with service iteration
   
   5. URISuffix
   
      * String
      * Hash of external CAS network suffix
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _assetId = pruf.utils.generateRawAssetID("input1", "input2", "input3", "input4");
         let _rightsHash = pruf.utils.generateSecureRgt(_assetId, "Secret");
         let _nodeId = "10";
         let _lifeCycleLimit = "100000"

         pruf.do.asset.mintBare
         (
            _assetId,
            _rightHolderHash,
            _nodeId,
            _lifeCycleLimit,
            URISuffix
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.modifySoftData:
--------------------
   
``pruf.do.asset.modifySoftData(assetId, softData1, softData2)``
   
Changes an asset's mutable off-chain data key.
   
Parameters
"""""""""""

   1. assetId

      * String | Bytes32
      * Unique value which refers to an asset

   2. softData(1/2)

      * String | Uint32
      * New parsed CID used to link asset to off-chain storage
   
     
Example usage
""""""""""""""
   
  	.. code-block:: javascript 
			:linenos:
			
			//Example pruf-js code
			
			let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d";
			let _softData1 = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"
			let _softData2 = "0x0000000000000000000000000000000000000000000000000000000000000000"
			
			pruf.do.asset.modifySoftData
			(
				_assetId,
				_softData1,
				_softData2
			)
			.send({ from: props.addr })
			.on("receipt"()=>{
				console.log(receipt.transactionHash);
			});


----------

.addHardData:
--------------
   
   ``pruf.do.asset.addHardData(assetId, hardData1, hardData2)``
   
   Permanently inscribes an asset with an off-chain storage reference key
   
Parameters
"""""""""""

   1. assetId

      * String | Bytes32
      * Unique value which refers to an asset

   2. hardData(1/2)

      * String | Bytes32
      * Key used to link asset to off-chain storage, hardData2 must be set to bytes32(0) if it is not required.
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _hardData1 = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"
			let _hardData2 = "0x0000000000000000000000000000000000000000000000000000000000000000"
      
			pruf.do.asset.addHardData(
      _assetId,
      _inscription
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

      
----------

.updateHardData
----------------------

``pruf.do.asset.updateHardData(assetId, hardData1, hardData2)``

Update the hard data of an asset. 

Note: This is a restricted operation, and can only go through if it matches the upgrade data set by 
the node administrator.

Parameters
"""""""""""

   1. assetId
   
      * String | Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network
   
   2. hardData(1/2)
   
      * String | Bytes32
      * Field(s) for updated asset hardData, hardData2 must be set to bytes32(0) if it is not required.
   

Example usage
""""""""""""""

.. code-block:: javascript
		:linenos:
		
		//Example pruf-js code

      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
		let _hardData1 = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"
		let _hardData2 = "0x0000000000000000000000000000000000000000000000000000000000000000"

		pruf.do.asset.updateHardData
		(
			_assetId,
			_hardData1,
			_hardData2,
		)
		.send({ from: props.addr })
		.on("receipt"()=>{
			console.log(receipt.transactionHash);
		});


---------------

.modifyAssetStatus:
-------------------
   
   ``pruf.do.asset.modifyAssetStatus(assetId, newStatus)``
   
   Changes an asset's active status.
   
Parameters
"""""""""""

   1. assetId

      * String | Bytes32
      * Unique value which refers to an asset

   2. newStatus

      * String | Uint8
      * Indicator of Asset Status to determine eligibility for ops using the PRÃ¼F protocol
   
     
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


---------------

.markAssetLostOrStolen:
-----------------------
   
   ``pruf.do.asset.markAssetLostOrStolen(assetId, newStatus)``
   
   Changes an asset's active status to lost or stolen.
   
Parameters
"""""""""""

   1. assetId

      * String | Bytes32
      * Unique value which refers to an asset

   2. newStatus

      * String | Uint8
      * Indicator of Asset Status to determine eligibility for ops using the PRÃ¼F protocol
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newStatus = "53"; //'53' is the lost status

      pruf.do.asset.markAssetLostOrStolen(
         _assetId,
         _newStatus
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });

      
----------

.decrementLifeCycle:
--------------------
   
   ``pruf.do.decrementLifeCycle(assetId, amount)``
   
   Decrements the LifeCycle of an asset by a specified amount.
   
Parameters
"""""""""""

   1. assetId

      * String | Bytes32
      * Unique value which refers to an asset

   2. amount

      * String | Uint32
      * Amount to decrement from the asset LifeCycle
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _amount = "25";

      pruf.do.asset.decrementLifeCycle(
      _assetId,
      _amount
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

.verifyRightsHash:
-----------------
   
   ``pruf.do.asset.verifyRightsHash(assetId, rightsHash)``
   
   Creates transaction which compares a submitted rightsHash to the rightsHash stored in asset record.
   
Parameters
"""""""""""

   1. assetId
   
      * String | Bytes32
      * Unique value which refers to an asset

   2. rightsHash

      * String | Bytes32
      * Hash built from a secret which is used to verify asset ownership
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = pruf.utils.generateIndex("input1", "input2", "input3", "input4")
      let _rightsHash = pruf.utils.generateSecureRgt(assetId, "Secret");
   
      pruf.do.asset.verifyRightsHash(
      _assetId, 
      _rightsHash
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.events.REPORT.returnValues._msg);
      });


----------

.modifyRightsHash:
------------------
   
   ``pruf.do.asset.modifyRightsHash(assetId, newRightsHash)``
   
   Changes the rightshash of the asset to reflect new data.
   
Parameters
"""""""""""

   1. assetId

      * String | Bytes32
      * Unique value which refers to an asset

   2. newRightsHash

      * String | Bytes32
      * Hash which will replace the current entry
   
     
Example usage
""""""""""""""
   
   .. code-block:: javascript 
      :linenos:

      //Example pruf-js code
   
      let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
      let _newHash = pruf.utils.generateSecureRgt(_assetId, "Secret");

      pruf.do.asset.modifyRightsHash(
      _assetId,
      _newHash
      )
      .send({ from: props.addr })
      .on("receipt"()=>{
         console.log(receipt.transactionHash);
      });


----------

.approve
----------------------

``pruf.do.asset.approve(to, tokenId)``

Approves an address to access ERC-721 functionality of all.

Parameters
"""""""""""

   1. to
   
      * String | Address
      * Address to which user would like to grant approval
   
   2. assetId
   
      * String | Bytes32
      * Hash built from individual inputs which is used to identify the asset on the network

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         
         let _to = "0x0D15833D60F448487f157578F3e8c208AFCBa537"
         let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
         pruf.do.asset.approve
         (
            _to,
            _assetId
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.setApprovalForAll
----------------------

``pruf.do.asset.setApprovalForAll(to, approved)``

Approves an address to access ERC-721 functionality of all assets.

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
         pruf.do.asset.approve
         (
            _to,
            _approval
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.setColdWallet
----------------------

``pruf.do.asset.setColdWallet()``

Sets sender's wallet to cold, revoking protocol's ERC-721 priveleges.

Parameters
"""""""""""

   None

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         
         pruf.do.asset.setColdWallet()
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.unSetColdWallet
----------------------

``pruf.do.asset.unSetColdWallet()``

Sets sender's wallet to hot, giving protocol ERC-721 priveleges.

Parameters
"""""""""""

   None

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         
         pruf.do.asset.unSetColdWallet()
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.permissiveSetURI
----------------------

``pruf.do.asset.permissiveSetURI(assetId, newUriSuffix)``

Set new token URI String, under special circumstances.

Parameters
"""""""""""

   1. assetId

      * String | Bytes32
      * Unique value which refers to an asset

   2. newUriSuffix

      * String
      * URI String for asset content routing
   
     
Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
         let _newUriSuffix = "/assets/images/prufcircle-1200x1200.png"
         
         pruf.do.asset.permissiveSetURI
         (
            _assetId,
            _newURI
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.transfer
----------------------

``pruf.do.asset.transfer(from, to, assetId)``

Transfers an asset from the current holder's wallet to a specified receiving address.

Parameters
"""""""""""

   1. from

      * String | Address
      * Address currently holding the asset
   
   2. to

      * String | Address
      * Address which will receive the asset
   
   3. assetId

      * String | Bytes32
      * Unique value which refers to an asset

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         
         let _from = "0x0D15833D60F448487f157578F3e8c208AFCBa537"
         let _to = "0x31b396CAc41e65bFC520050Fa7c7882409CBbF48"
         let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
 
         pruf.do.asset.transfer
         (
            _from,
            _to,
            _assetId
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.addHardData
----------------------

``pruf.do.asset.addHardData(assetId, hardData1, hardData2)``

Sets sender's wallet to hot, giving protocol ERC-721 priveleges.

Parameters
"""""""""""

   1. assetId

      * String | Bytes32
      * Unique value which refers to an asset
   
   2. hardData(1/2)

      * String | Bytes32
      * Field(s) for asset hardData, hardData2 must be set to bytes32(0) if it is not required.
   

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _assetId = "0x968a4a295335fa4badbc4746a701d4407a7df7febd489a7de44959358ff5a21d"
         let _hardData1 = "0x88c046dc8adba2414c0cbf87f1089c9682067c739b2fc6d3a1fdfd4e61587bbd"
         let _hardData2 = "0x0000000000000000000000000000000000000000000000000000000000000000"
         
         pruf.do.asset.addHardData
         (
            _assetId,
            _hardData1,
            _hardData2
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------