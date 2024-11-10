# GraphQL

## GraphQL

A schema first approach to API design. 
- Clear contract between client and server. Enabling clients to avoid overfetching/underfetching and fetch just enough data
- Graph Query Language: called a "Graph" because you can start from a node and traverse the node down recursively to get information you need. "Query Language" because you can focus on the "what" for the queries.

## Technology

- `type` is the interface 
- `resolver` is the implementation that will return an actual value
- Can expose over HTTP
    - `POST` request is used for every query containing a json with `query` as the key
- Nullability: the server must provide the field when requested by client, cannot return a `Null` object
    - When done in an array, an individual item of the array cannot be `Null`


## Best Practices

- Single Version
- Authentication is independent of graphql. It is dependent on the underlying protocol like http and websockers
- Use data loaders to handle the n+1 problem
- Pagination
    - Offset Based: It is a number that indicates how many rows to offset
    - Cursor Based: It points to a specific entry and to list items after that entry
    - Offset based is simpler than cursor based pagination
- Message Subscription uses websockets instead of HTTP
- Use [production ready pub/sub environments](https://www.apollographql.com/docs/apollo-server/data/subscriptions#production-pubsub-libraries)
- Can debug websocket messages using chrome dev tools under "WS" of network tab

## Learnings
- How hot reload works is through websocket that is injected inside the webpage. So whenever the file is changed the web server is updated for development

## Community Debate

- Schema First vs Code First Approach
- Schema First: Interface is separate from implementation (I personally prefer this more) s


## Tutorial

- Understanding the concepts: Watch and focus on understanding the concepts. 
- Implementation: spend time afterwards to focus on implementation
- Examples are at github.com/graphql-by-example

## Outside Module Learnings

- Issues regarding graphql security. This is a [trending thread](https://news.ycombinator.com/item?id=40521518) on this topic.
- Mainly the issue is safeguarding people from seeing data they shouldn't


## Followups

- [Asynchronous Generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator): when and why use this?