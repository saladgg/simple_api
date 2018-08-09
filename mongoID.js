const mongoose = require('mongoose');


const id = mongoose.Types.ObjectId();
console.log("Mongo id: ",id);
console.log("Extract timestamp: ", id.getTimestamp());

const validity = mongoose.Types.ObjectId.isValid('5666');
console.log('Valid?: ',validity);




