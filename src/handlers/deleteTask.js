const dynamo = require('../gateway/dynamo.gateway');


module.exports.handler = async (event) => {
  try {
    await dynamo.delete(event.pathParameters.id, process.env.DYNAMODB_TABLE);
    return { statusCode: 200, body: 'Task deleted successfully' };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
