const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema({ id: String, name: String, age: Number });

const peopleModel = dynamoose.model("people", schema);

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: null,
    body: null,
  };

  try {
    const id = event.pathParameters?.id;
    let parsedBody = JSON.parse(event.body);
    let updatedPerson;
    if (id) {
      updatedPerson = await peopleModel.delete({ id }, parsedBody);
      response.statusCode = 200;
      response.body = JSON.stringify("Successfully Deleted");
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
