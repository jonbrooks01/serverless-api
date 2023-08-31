const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema({ id: String, name: String, age: Number });

const peopleModel = dynamoose.model("people", schema);

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: null,
    body: null,
  };
  console.log(event.pathParameters, "PATH PARAM");
  let parsedBody = JSON.parse(event.body);
  const id = event.pathParameters?.id;
  const existingPerson = await peopleModel.query("id").eq(id).exec();
  try {
    if (existingPerson.length > 0) {
      const personToUpdate = existingPerson[0];
      personToUpdate.name = parsedBody.name;
      personToUpdate.age = parsedBody.age;
      await personToUpdate.save();
    } else {
      response.statusCode = 404;
      response.body = JSON.stringify({ error: "Person not found" });
    }
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }

  return response;
};

// exports.handler = async (event) => {
//   const response = {
//     statusCode: null,
//     body: null,
//   };
//   console.log(event.pathParameters, "PATH PARAM");

//   try {
//     const id = event.pathParameters?.id;
//     let results;

//     if (event.httpMethod === 'PUT') {
//       const parsedBody = JSON.parse(event.body);
//       const existingPerson = await peopleModel.query("id").eq(id).exec();

//       if (existingPerson.length > 0) {
//         const personToUpdate = existingPerson[0];
//         personToUpdate.name = parsedBody.name;
//         personToUpdate.age = parsedBody.age;
//         await personToUpdate.save();

//         response.statusCode = 200;
//         response.body = JSON.stringify(personToUpdate);
//       } else {
//         response.statusCode = 404;
//         response.body = JSON.stringify({ error: 'Person not found' });
//       }
//     } else {
//       if (id) {
//         const list = await peopleModel.query("id").eq(id).exec();
//         results = list[0];
//       } else {
//         results = await peopleModel.scan().exec();
//       }

//       response.statusCode = 200;
//       response.body = JSON.stringify(results);
//     }
//   } catch (e) {
//     response.statusCode = 500;
//     response.body = JSON.stringify(e.message);
//   }

//   return response;
// };
