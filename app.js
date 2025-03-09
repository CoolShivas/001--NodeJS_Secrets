/****
 * 
 * * * * Windows vs Global in Node.js :-
 * 
 * 
 * 
 *-----Did you know that JavaScript behavesdifferently in the browser and in Node.js ? :-

 * 
 * Node.js Context - global :-
 * 
 * 
    • In Node.js, there's no window or document. Why? Because Node.js runs outside the browser—it doesn't deal with the DOM or browser-specific APIs.

    • Instead, Node.js has a global object. It's the equivalent of window in the browser but designed for a server-side environment.

//////---------------------------------------------------------------------------------------------------------

 * 
 * 
 * 
 * 
 *----- globalThis :- 

    globalThis is a new feature introduced in ECMAScript 2020 (ES11) that provides a standard way to access the global object in any JavaScript environment.
    
*------Why is it useful ? :- 

    • Consistent Access: In the past, accessing the global object varied depending on the environment:
            1. Browser: window
            2. Node.js: global
            3. Web Workers: self
            4. Other Environments: Might have their own global object



//////---------------------------------------------------------------------------------------------------------         
 * 
 * 
 * 
 * // // Video Link :--
 * 
 * // // https://www.youtube.com/watch?v=CKgDta5ACWA&list=PLwGdqUZWnOp3KELplHtc-RnJ5xTUPqdgH&index=2
 * 
 * 
 * 
 * 
 * 
 */

// // // Step:-1.) First of all open the VS CODE TERMINAL :-
// // // Step:-2.) Write the command node -v
// // // Here, we are getting the output on TERMINAL :- v23.8.0
// console.log("Shiva Chouhan");
// // // Step:-3.) After writting the above statement i.e., (// console.log("Shiva Chouhan");). Save it first to get the output on TERMINAL. Else, getting the error on TERMINAL.
// // // Step:-4.) Write the command node app.js
// // // Here, we are getting the output on TERMINAL :- Shiva Chouhan


////******************************************************************************************** */


// global.console.log("Hemendra Pratap Singh Chouhan");
// // // Here, we are getting the output on TERMINAL :- Hemendra Pratap Singh Chouhan


////******************************************************************************************** */


// globalThis.console.log("Mohammad Umar Khan");
// // // Here, we are getting the output on TERMINAL :- Mohammad Umar Khan


////******************************************************************************************** */


// console.log(module);
// // // Here, we are getting the output on TERMINAL :- 
// /**
//  * 
//  * {
//   id: '.',
//   path: 'C:\\Users\\vozo computer\\Desktop\\Node-JS\\001--NodeJS_Secrets',
//   exports: {},
//   filename: 'C:\\Users\\vozo computer\\Desktop\\Node-JS\\001--NodeJS_Secrets\\app.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'C:\\Users\\vozo computer\\Desktop\\Node-JS\\001--NodeJS_Secrets\\node_modules',
//     'C:\\Users\\vozo computer\\Desktop\\Node-JS\\node_modules',
//     'C:\\Users\\vozo computer\\Desktop\\node_modules',
//     'C:\\Users\\vozo computer\\node_modules',
//     'C:\\Users\\node_modules',
//     'C:\\node_modules'
//   ],
//   [Symbol(kIsMainSymbol)]: true,
//   [Symbol(kIsCachedByESMLoader)]: false,
//   [Symbol(kURL)]: undefined,
//   [Symbol(kFormat)]: undefined,
//   [Symbol(kIsExecuting)]: true
// }
//  * 
//  * 
//  */


////******************************************************************************************** */


// global.console.log(module);
// // // Here, we are getting the output on TERMINAL :- 
// /**
//  * 
//  * {
//   id: '.',
//   path: 'C:\\Users\\vozo computer\\Desktop\\Node-JS\\001--NodeJS_Secrets',
//   exports: {},
//   filename: 'C:\\Users\\vozo computer\\Desktop\\Node-JS\\001--NodeJS_Secrets\\app.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'C:\\Users\\vozo computer\\Desktop\\Node-JS\\001--NodeJS_Secrets\\node_modules',
//     'C:\\Users\\vozo computer\\Desktop\\Node-JS\\node_modules',
//     'C:\\Users\\vozo computer\\Desktop\\node_modules',
//     'C:\\Users\\vozo computer\\node_modules',
//     'C:\\Users\\node_modules',
//     'C:\\node_modules'
//   ],
//   [Symbol(kIsMainSymbol)]: true,
//   [Symbol(kIsCachedByESMLoader)]: false,
//   [Symbol(kURL)]: undefined,
//   [Symbol(kFormat)]: undefined,
//   [Symbol(kIsExecuting)]: true
// }
//  * 
//  * 
//  * 
//  */




////******************************************************************************************** */



// globalThis.console.log(module);
// // // Here, we are getting the output on TERMINAL :- 
// /**
//  * 
//  * 
//  * {
//   id: '.',
//   path: 'C:\\Users\\vozo computer\\Desktop\\Node-JS\\001--NodeJS_Secrets',
//   exports: {},
//   filename: 'C:\\Users\\vozo computer\\Desktop\\Node-JS\\001--NodeJS_Secrets\\app.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'C:\\Users\\vozo computer\\Desktop\\Node-JS\\001--NodeJS_Secrets\\node_modules',  
//     'C:\\Users\\vozo computer\\Desktop\\Node-JS\\node_modules',
//     'C:\\Users\\vozo computer\\Desktop\\node_modules',
//     'C:\\Users\\vozo computer\\node_modules',
//     'C:\\Users\\node_modules',
//     'C:\\node_modules'
//   ],
//   [Symbol(kIsMainSymbol)]: true,
//   [Symbol(kIsCachedByESMLoader)]: false,
//   [Symbol(kURL)]: undefined,
//   [Symbol(kFormat)]: undefined,
//   [Symbol(kIsExecuting)]: true
// }
//  * 
//  * 
//  * 
//  */


// ////******************************************************************************************** */


globalThis.console.log("Varun Sharma");
// // // Here, we are getting the output on TERMINAL :- Varun Sharma


// ////******************************************************************************************** */