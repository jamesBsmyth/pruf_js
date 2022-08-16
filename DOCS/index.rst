
.. pruf-js documentation master file, created by
   sphinx-quickstart on Fri Mar 26 11:02:50 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.



**pruf-js**
===================================

An interface for the PRüF Protocol written in javascript.

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   gets
   dos
   utils
   glossary

Installation
=================

Install using npm:

   ``npm i --s pruf-js@latest``


Example Initialization
==================================

*note: pruf-js requires an instance of web3.js to initialize.*

*To learn more about web3.js, check it out here:* 
   
https://web3js.readthedocs.io


.. code-block:: javascript 
   :linenos:

   //Example pruf-js initialization code

   const Web3 = require('web3');
   const PRUF = require('pruf-js');

   const web3 = new Web3("https://kovan.infura.io/v3/yourInfuraKeyHere");
   let chainId = 42;
   async () => {
   const pruf = new PRUF(
      web3, // Web3 instance
      chainId, // ChainId of Web3 instance
      false, // Fetch contract addresses?
      true // Enable debug logs?
   );

   pruf.init().then(console.log)
   }
   



-------------------------------------------------------------------------------------------------



Contribute to the Project
==================================

- Issue Tracker: https://github.com/jamesBsmyth/pruf_js/issues
- Source Code: https://github.com/jamesBsmyth/pruf_js

Developer Support
==================================

If you are having issues, please let us know.
Contact us at: support@pruf.io

Or on Telegram: https://t.me/pruftalk

Project Resources
==================================

Website: https://pruf.io

License
=================

The project is licensed under the MIT license.