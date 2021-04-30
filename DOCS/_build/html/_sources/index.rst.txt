.. pruf-js documentation master file, created by
   sphinx-quickstart on Fri Mar 26 11:02:50 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. image:: /image/prufLogo.png

**pruf-js**
===================================

This documentation is in an alpha release. If you find any typos or issues please contact us at support@pruf.io.

Interface for the PRüF network written in javascript

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   dos 
   gets
   utils
   glossary

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