#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SimpleCdkTsAndGoCodeExampleStack } from '../lib/simple-cdk-ts-and-go-code-example-stack';

const app = new cdk.App();
new SimpleCdkTsAndGoCodeExampleStack(app, 'SimpleCdkTsAndGoCodeExampleStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});