.do.pruf
============

.setColdWallet
----------------------

``pruf.do.pruf.updateImportStatus()``

Set wallet status to cold.

Parameters
"""""""""""

   None
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         pruf.do.node.setColdWallet()
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.unSetColdWallet
----------------------

``pruf.do.pruf.unSetColdWallet()``

Set wallet status to hot.

Parameters
"""""""""""

  None
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         
         pruf.do.node.unSetColdWallet()
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.transfer
----------------------

``pruf.do.pruf.transfer(from, to, amount)``

Sends $PRUF from one wallet to another

Parameters
"""""""""""

   1. from
   
      * String | Address
      * The address from which the $PRUF will be sent
   
   2. to
   
      * String | Address
      * The address to which the $PRUF will be sent
   
   3. amount
      
      * String | Uint256
      * Amount of $PRUF to send
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         let _from = "0xBef3b0b67061CACD4E10968d8Ba23A1c864c8049";
         let _to = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1";
         let _amount = "100000000000000000000";

         pruf.do.node.transfer
         (
            _from,
            _to,
            _amount
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.approve
----------------------

``pruf.do.pruf.approve(spender, amount)``

Change the one-way import relationship between nodes.

Parameters
"""""""""""

   1. spender
   
      * String | Address
      * Address of the spender to be approved
      * 
   2. amount
   
      * String | Uint256
      * Amount of $PRUF to approve for spender

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code
         let _spender = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1";
         let _amount = "100000000000000000000";

         pruf.do.pruf.approve
         (
            _spender,
            _amount
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });


---------------

.decreaseAllowance
----------------------

``pruf.do.pruf.decreaseAllowance(spender, amount)``

Decrease the $PRUF allowance of a spender.

Parameters
"""""""""""

   1. spender
   
      * String | Address
      * Address of the spender
      * 
   2. amount
   
      * String | Uint256
      * Amount of $PRUF to decrease from spender's allowance
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _spender = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1";
         let _amount = "100000000000000000000";

         pruf.do.pruf.decreaseAllowance
         (
            _spender,
            _amount
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });

---------------

.increaseAllowance
----------------------

``pruf.do.pruf.increaseAllowance(spender, amount)``

Increase the $PRUF allowance of a spender.

Parameters
"""""""""""

   1. spender
   
      * String | Address
      * Address of the spender
      * 
   2. amount
   
      * String | Uint256
      * Amount of $PRUF by which to increase a spender's allowance
  

Example usage
""""""""""""""

      .. code-block:: javascript
         :linenos:

         //Example pruf-js code

         let _spender = "0x9094CaDBF4d35ce5FeD92eb758909fB38F7fecb1";
         let _amount = "100000000000000000000";

         pruf.do.pruf.increaseAllowance
         (
            _spender,
            _amount
         )
         .send({ from: props.addr })
         .on("receipt"()=>{
            console.log(receipt.transactionHash);
         });

---------------
