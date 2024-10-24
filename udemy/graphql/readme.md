# GraphQL

## GraphQL

A schema first approach to API design. 
- Clear contract between client and server. Enabling clients to avoid overfetching/underfetching and fetch just enough data

## Technology

The 
- `type` is the interface 
- `resolver` is the implementation that will return an actual value
- Can expose over HTTP
    - `POST` request is used for every query containing a json with `query` as the key

- Nullability: the server must provide the field when requested by client, cannot return a `Null` object
    - When done in an array, an individual item of the array cannot be `Null`


## Best Practices

- Single version

## Community Debate

- Schema First vs Code First Approach
- Schema First: Interface is separate from implementation (I personally prefer this more) s


## Tutorial

- Understanding the concepts: Watch and focus on understanding the concepts. 
- Implementation: spend time afterwards to focus on implementation
- Examples are at github.com/graphql-by-example
