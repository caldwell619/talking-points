# Buy Now Attack Proof of Concept

## Order of March

1. [Create a User](./setup/createUser.js)
2. [Associate a Car with the New User](./setup/associateCar.js)
3. [Begin Attack](./setup/attack.js)
4. [Refresh Token](./setup/refreshToken.js)

## Creating a New User

The only requirement for creating a new user is an email address and a "password".

This password **only** needs to pass a RegEx match. The content of the password is irrelevant.

A token is attached to the response of creating a new user. This token can be used for nearly full access to the rest of the applications end points

## Associate a Car with a New User

In order for the target quote api to accept the request, you must first associate a car with the newly created user.

Simply sending the information with the attached token accomplishes this step.

## Attacking the API

With the new token attached to every response, a while loop is configured to send open ended requests to initiate a denial of service attack. The overload of compute required to handle all of the incoming responses causes the server to respond slowly, or potentially go down.

## Refreshing the Token

Periodically, the token is refreshed based on configurable intervals. When the timer is up, it will stop sending requests, fetch a new token, then begin the attack again will the new token.

## Internal Threat

This does not come across as a malicious attack because the request to AWS is viewed as normal traffic, which is designed to scale.

The AWS Lambda passes the request to the interal API which it percieves as normal traffic because it is coming from a trusted source, AWS.
