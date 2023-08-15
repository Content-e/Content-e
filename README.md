## EDC squared

## setup project
1. install aws cli and setup aws user credential
2. install aws amplify cli
3. install node v 16 or above
4. install pnpm (npm i -g pnpm)
5. pull repo (default developing branch has name develop)
6. pnpm i
7. on amplify console (aws ui)
-> choose your app (example: contente) 
-> environment (example: dev)
-> Backend environments 
-> Local setup instructions (make steps)

## Set clerk cert.pem 
The project use mixed clerk-cognito auth flow. So for check it is using signIn/signUp lambda contente9303b093PreSignup
Inside lambda is storing cert.pem file in this file wrote public key from clerk dashboard to validate jwt clerk's token.
When you push/pull amplify environment don't forget about it for dev and prod (main) use different cert.pem.

# Lambdas environment variables
Lambdas used hardcoded variables in cloudformation file 
(example: amplify/backend/function/linkTiktokAccount/linkTiktokAccount-cloudformation-template.json). 
Better solution is store in AWS SMM or Amplify variables. 
But unfortunately we got this flow, and don't have time to fix it.
So you have to change all lambdas variables when change amplify env.   