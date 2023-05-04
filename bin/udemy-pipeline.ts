#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { UdemyPipelineStack } from '../lib/udemy-pipeline-stack';
import { BillingStack } from '../lib/billing.-stack';

const app = new cdk.App();
new UdemyPipelineStack(app, 'UdemyPipelineStack', {});
new BillingStack(app, "BillingStack",{
  budgetAmount:5,
  emailAddress: "dedatekk@gmail.com",
});