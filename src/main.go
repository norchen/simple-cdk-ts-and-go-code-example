package main

import (
	"context"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(ctx context.Context, event map[string]interface{}) (string, error) {

	return "Hi lambda", nil
}

func main() {
	lambda.Start(handler)
}
