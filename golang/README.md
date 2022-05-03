# Go Tutorial

## Official Tutorial from Golang website

## Learnings

1. How to set up a simple project
2. How to run a project

## Steps

```bash
go mod init example/hello
go run . # or go run hello.go
```

## Dependencies
When creating a package to be imported. There is a need to describe the path to the module and the module name. `module github.com/sirupsen/logrus`

In this case "github.com/sirupsen/" is the path to the module "logrus" is the module name.


## Part2

Define a module and do a linkage of module to one contained in the local path


## Generics

It allows a single go function to handle multiple incoming types. E.g. summing all float items and all int items

## Go Rune is Different from Go Byte
Chinese Characters can be multiple bytes but it is considered 1 rune.

## Next Steps

https://go.dev/doc/code