# Broken Endpoints

## /compound

- Error Message from CW:

```text
TypeError: Cannot read property 'authorization' of undefined
at exports.handler (/var/task/index.js:17:31)
```

## /bank/{routing}

```json
{
	"message": "User: arn:aws:sts::988009383230:assumed-role/marketplace-development-r-UtilityGetBankInfoLambda-YJVR6PE85QRA/marketplace-development-lambda-UtilityGetBankInfo-3LX7ERI7HXGN is not authorized to perform: secretsmanager:GetSecretValue on resource: arn:aws:secretsmanager:us-east-1:988009383230:secret:TokenAuthSecret-OIOr2d",
	"code": "AccessDeniedException",
	"time": "2019-06-13T20:37:37.258Z",
	"requestId": "d4673be1-83df-49ed-9fd5-f39a6af45696",
	"statusCode": 400,
	"retryable": false,
	"retryDelay": 15.983247174909664
}
```

## /passwordresetrequest

```json
{ "errorMessage": "Handler 'handler' missing on module 'index'" }
```

also

```text
Lambda execution failed with status 200 due to customer function error: Handler 'handler' missing on module 'index'
```
