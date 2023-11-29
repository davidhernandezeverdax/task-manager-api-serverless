const Task = require('../models/task.model');
const dynamo = require('../gateway/dynamo.gateway');
const uuid = require('uuid');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  
  try {
    const task = new Task({
      id: uuid.v1(),
      title: data.title,
      description: data.description,
    });

    task.validate();

    await dynamo.put(task.toJSON(), process.env.DYNAMODB_TABLE);
    return { statusCode: 200, body: JSON.stringify(task) };
  } catch (error) {
    console.log("Error", {info: error})
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
