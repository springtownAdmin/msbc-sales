import { CognitoIdentityProviderClient, InitiateAuthCommand, SignUpCommand, ConfirmSignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { AWS_REGION, CLIENT_ID } from "./constants";
  
export const cognitoClient = new CognitoIdentityProviderClient({
  region: AWS_REGION,
});

export const signIn = async (data) => {

  const { email, password } = data;

  const params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: CLIENT_ID,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  };

  try {

    const command = new InitiateAuthCommand(params);
    const { AuthenticationResult } = await cognitoClient.send(command);

    if (AuthenticationResult) {

      if (typeof sessionStorage !== "undefined") {

        sessionStorage.setItem("idToken", AuthenticationResult.IdToken || "");
        sessionStorage.setItem("accessToken", AuthenticationResult.AccessToken || "");
        sessionStorage.setItem("refreshToken", AuthenticationResult.RefreshToken || "");
        return AuthenticationResult;

      }

      return;

    }

  } catch (error) {

    throw error;
  
  }
  
};

export const signUp = async (data) => {

  const { email, password } = data;

  const params = {
    ClientId: CLIENT_ID,
    Username: email,
    Password: password,
    UserAttributes: [
      {
        Name: "email",
        Value: email,
      },
    ],
  };
  
  try {

    const command = new SignUpCommand(params);
    const response = await cognitoClient.send(command);
    console.log("Sign up success: ");
    return response;

  } catch (error) {

    throw error;

  }

};

export const confirmSignUp = async (data) => {

  const { email, confirm_code } = data;

  const params = {
    ClientId: CLIENT_ID,
    Username: email,
    ConfirmationCode: confirm_code,
  };

  try {
    
    const command = new ConfirmSignUpCommand(params);
    await cognitoClient.send(command);
    console.log("User confirmed successfully");
    return true;

  } catch (error) {

    throw error;

  }

};