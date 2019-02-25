const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use('/business', businessRoute);
const port = process.env.PORT || 4000;

var AWS = require('aws-sdk');
// Set the region 

// Call DynamoDB to create the table
AWS.config.update({
  region: 'ap-south-1',
  endpoint:"http://localhost:9000"
});

var doClient = new AWS.DynamoDB.DocumentClient();
  
// Create the DynamoDB service object
var DynamoDB = new AWS.DynamoDB({});




 //create table
// var params = {
//     TableName: "thread",
//     KeySchema: [
//         { AttributeName: "thread_id", KeyType: "HASH"},  
//         //Partition key
    
//     ],
//     AttributeDefinitions: [
//         { AttributeName: "thread_id", AttributeType: "S"},
     
       
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 10,
//         WriteCapacityUnits: 10
//     }
// };

// DynamoDB.createTable(params, function(tableErr, tableData) {
//     if (tableErr) {
//         console.error("Error JSON:", JSON.stringify(tableErr, null, 2));
//     } else {
//         console.log("Created table successfully!");
// }

// });


//get req to read data 
app.get('/business', (req, res) => {
    
    
      var table = "thread";

      var thread_id =thread_id ;
   
      var params = {
          TableName:table,
          Key: 
          {
            thread_id:thread_id
          }      
      };
    
        
      doClient.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            return data
        }
      });
    });
    
function add_data(){ 
    
    var table = "thread";

//   var thread_id=1;

//   var business_gst_number=req.body.business_gst_number;
  
  var params = {
      TableName:table,
      Item: 
      {
            thread_id :"15",
            threadtype :{'S':"livechat"},
            createon :{'S': "1:00"  },
            updateon :{'S':"1:30"},
            channelname :{'S':"new-1" },
     }
                
      };

  console.log("Adding a new item...");
  doClient.put(params, function(err, data) {
      if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
      }
  });
    console.log("done done");



}
    //post
    
// app.post('/business/add', (req, res) => {


//   var table = "thread";

// //   var thread_id=1;
// //   var threadtype=req.body.business_name;
// //   var business_gst_number=req.body.business_gst_number;
  
//   var params = {
//       TableName:table,
//       Item: 
//       {
//               thread_id :"1"
//             ,
            
//                 threadtype :{"SS": ["sms", "facebook" ,"livechat"]
//                 },
            
//                     createon :{'S': "10:20"
//                   },
//                   updateon :{'S':"11:00"
//                 },
//                 channelname :{'S':"gol"
//             },
//                 }
                
//       };

//   console.log("Adding a new item...");
//   doClient.put(params, function(err, data) {
//       if (err) {
//           console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//       } else {
//           console.log("Added item:", JSON.stringify(data, null, 2));
//       }
//   });
//     console.log("done done");
//     res.json({});  

// });



const server = app.listen(port, function(){
console.log('Listening on port ' + port);
add_data();
console.log('ok');
});


 // Dynamodb.putItem(params, function(err, data) {
    //   if (err) console.log(err, err.stack); // an error occurred
    //   else     console.log(data);           // successful response
  
    // });
    