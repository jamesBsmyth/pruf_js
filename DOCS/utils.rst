.utils
========

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
"""""""""""""

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
-------------------------

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