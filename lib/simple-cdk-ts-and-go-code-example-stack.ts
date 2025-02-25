import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class SimpleCdkTsAndGoCodeExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the Go Lambda function
    const goLambda = new lambda.Function(this, "GoLambdaFunction", {
      runtime: lambda.Runtime.PROVIDED_AL2023, // Use the custom runtime
      handler: "bootstrap", // Go binary name
      code: lambda.Code.fromAsset("./tmp/"), // Path to Go binary
    });

    // Define the Lambda function URL
    const myFunctionUrl = goLambda.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.AWS_IAM,
    });

    // Output the function's url
    new cdk.CfnOutput(this, "FunctionUrl", {
      value: myFunctionUrl.url,
    });
  }
}