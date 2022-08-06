# Postman (6 AUG 2022)

[Postman](https://www.postman.com/) has many featuers and is able to help with API development.

This repository contains a sample server to test the [postman flow](https://web.postman.co/workspace/d93c409d-83f6-4813-8d85-e663cac49b27/flow/62ee0447ea6e474ee127469c). (use jinjundev@outlook.com to login to postman)

## Important features
1. It is possible to create a workflow (beta version)
2. This workflow allows the combination of different data sources

# Steps
1. Create the postman collection
2. Create examples for each request
3. Create flow and use "CreateData" block to pipe variables into it
4. Time the variables using the bottom linkers

## About "Create Data"
1. Unfortunately, for now it is required to combine streams of data into Request. [Something better](https://github.com/postmanlabs/postman-flows/discussions/351) is in the works.
2. 