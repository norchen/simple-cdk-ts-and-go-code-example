# cdxgen issue report 

This repo support my [tracked issue](https://github.com/CycloneDX/cdxgen/issues/1634) 
with CDK using Typescript and Golang when generating an SBOM with cdxgen.

## How to reproduce the issue locally
1. Check out this repository
2. Run `npm install`
3. Run cdxgen. I used the following command:
```bash
docker run --rm  -e CDXGEN_DEBUG_MODE=debug -e FETCH_LICENSE=true -v /tmp:/tmp -v $(pwd):/app:rw -t ghcr.io/cyclonedx/cdxgen:latest -r /app -o /app/sbom.json
```
## Actual behavior
The cdxgen log will contain the following:

```
...
Executing go list -deps in /app
go list -deps command has failed for /app
go: downloading github.com/aws/aws-lambda-go v1.47.0
package simple-cdk-ts-and-go-code-example/node_modules/aws-cdk/lib/init-templates/app/go: invalid input file name "%name%.template.go"
package simple-cdk-ts-and-go-code-example/node_modules/aws-cdk/lib/init-templates/sample-app/go: invalid input file name "%name%.template.go"

Executing go mod graph in /app
...
```

## Credits
The code example was taken from [The Simplest AWS Lambda in Golang by Connor the Wise](https://medium.com/full-stack-engineer/the-simplest-aws-lambda-in-golang-f4c52cb3e5d8).
Thank you for providing!