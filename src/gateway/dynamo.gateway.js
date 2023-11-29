const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const dynamo = {
  async get(id, tableName) {
    const params = {
      TableName: tableName,
      Key: { id },
    };
    return dynamoDb.get(params).promise();
  },

  async put(item, tableName) {
    const params = {
      TableName: tableName,
      Item: item,
    };
    return dynamoDb.put(params).promise();
  },

  async update(id, updateExpression, expressionAttributes, tableName) {
    const params = {
      TableName: tableName,
      Key: { id },
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributes,
      ReturnValues: 'ALL_NEW',
    };
    return dynamoDb.update(params).promise();
  },

  async delete(id, tableName) {
    const params = {
      TableName: tableName,
      Key: { id },
    };
    return dynamoDb.delete(params).promise();
  },
};

module.exports = dynamo;
