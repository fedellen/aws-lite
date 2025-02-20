# `@aws-lite/iam`

> Official `aws-lite` plugin for IAM

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/iam
```

Optionally install types:

```sh
npm i -D @aws-lite/iam-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/iam)


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/iam)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `CreateRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html)

Properties:
- **`AssumeRolePolicyDocument` (string, object) [required]**
  - Trust relationship policy document granting an entity permission to assume the role; can be an object, or JSON or YAML string
- **`RoleName` (string) [required]**
  - Name of the role
- **`Description` (string)**
  - Description of the role
- **`MaxSessionDuration` (number)**
  - Maximum session duration (in seconds) to set for the specified role
- **`Path` (string)**
  - Path for the role identifier
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/reference_identifiers.html)
- **`PermissionsBoundary` (string)**
  - ARN of a managed policy to be used to set the role's permissions boundary
- **`Tags` (array)**
  - List of tags to attach to the role
  - [More details (AWS)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/id_tags.html)


### `DeleteRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role


### `GetRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role


### `UpdateRole`

[Canonical AWS API doc](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html)

Properties:
- **`RoleName` (string) [required]**
  - Name of the role
- **`Description` (string)**
  - Description of the role
- **`MaxSessionDuration` (number)**
  - Maximum session duration (in seconds) to set for the specified role


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/architect/aws-lite#authoring-aws-lite-plugins)!

- [`AddClientIDToOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html)
- [`AddRoleToInstanceProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html)
- [`AddUserToGroup`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html)
- [`AttachGroupPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html)
- [`AttachRolePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html)
- [`AttachUserPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html)
- [`ChangePassword`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html)
- [`CreateAccessKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html)
- [`CreateAccountAlias`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html)
- [`CreateGroup`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html)
- [`CreateInstanceProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html)
- [`CreateLoginProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html)
- [`CreateOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html)
- [`CreatePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html)
- [`CreatePolicyVersion`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html)
- [`CreateSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html)
- [`CreateServiceLinkedRole`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceLinkedRole.html)
- [`CreateServiceSpecificCredential`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceSpecificCredential.html)
- [`CreateUser`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html)
- [`CreateVirtualMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html)
- [`DeactivateMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html)
- [`DeleteAccessKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html)
- [`DeleteAccountAlias`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html)
- [`DeleteAccountPasswordPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountPasswordPolicy.html)
- [`DeleteGroup`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html)
- [`DeleteGroupPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html)
- [`DeleteInstanceProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html)
- [`DeleteLoginProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html)
- [`DeleteOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteOpenIDConnectProvider.html)
- [`DeletePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html)
- [`DeletePolicyVersion`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html)
- [`DeleteRolePermissionsBoundary`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePermissionsBoundary.html)
- [`DeleteRolePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html)
- [`DeleteSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSAMLProvider.html)
- [`DeleteServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServerCertificate.html)
- [`DeleteServiceLinkedRole`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html)
- [`DeleteServiceSpecificCredential`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html)
- [`DeleteSigningCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html)
- [`DeleteSSHPublicKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html)
- [`DeleteUser`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html)
- [`DeleteUserPermissionsBoundary`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPermissionsBoundary.html)
- [`DeleteUserPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html)
- [`DeleteVirtualMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteVirtualMFADevice.html)
- [`DetachGroupPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html)
- [`DetachRolePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html)
- [`DetachUserPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html)
- [`EnableMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html)
- [`GenerateCredentialReport`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html)
- [`GenerateOrganizationsAccessReport`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html)
- [`GenerateServiceLastAccessedDetails`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html)
- [`GetAccessKeyLastUsed`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html)
- [`GetAccountAuthorizationDetails`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html)
- [`GetAccountPasswordPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html)
- [`GetAccountSummary`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html)
- [`GetContextKeysForCustomPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html)
- [`GetContextKeysForPrincipalPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html)
- [`GetCredentialReport`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html)
- [`GetGroup`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html)
- [`GetGroupPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html)
- [`GetInstanceProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html)
- [`GetLoginProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html)
- [`GetMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetMFADevice.html)
- [`GetOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html)
- [`GetOrganizationsAccessReport`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html)
- [`GetPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html)
- [`GetPolicyVersion`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html)
- [`GetRolePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html)
- [`GetSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html)
- [`GetServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html)
- [`GetServiceLastAccessedDetails`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html)
- [`GetServiceLastAccessedDetailsWithEntities`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html)
- [`GetServiceLinkedRoleDeletionStatus`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html)
- [`GetSSHPublicKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html)
- [`GetUser`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html)
- [`GetUserPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html)
- [`ListAccessKeys`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html)
- [`ListAccountAliases`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html)
- [`ListAttachedGroupPolicies`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html)
- [`ListAttachedRolePolicies`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html)
- [`ListAttachedUserPolicies`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html)
- [`ListEntitiesForPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html)
- [`ListGroupPolicies`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html)
- [`ListGroups`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html)
- [`ListGroupsForUser`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html)
- [`ListInstanceProfiles`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html)
- [`ListInstanceProfilesForRole`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html)
- [`ListInstanceProfileTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfileTags.html)
- [`ListMFADevices`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html)
- [`ListMFADeviceTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADeviceTags.html)
- [`ListOpenIDConnectProviders`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html)
- [`ListOpenIDConnectProviderTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviderTags.html)
- [`ListPolicies`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html)
- [`ListPoliciesGrantingServiceAccess`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html)
- [`ListPolicyTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyTags.html)
- [`ListPolicyVersions`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html)
- [`ListRolePolicies`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html)
- [`ListRoles`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html)
- [`ListRoleTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html)
- [`ListSAMLProviders`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html)
- [`ListSAMLProviderTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviderTags.html)
- [`ListServerCertificates`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html)
- [`ListServerCertificateTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificateTags.html)
- [`ListServiceSpecificCredentials`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html)
- [`ListSigningCertificates`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html)
- [`ListSSHPublicKeys`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html)
- [`ListUserPolicies`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html)
- [`ListUsers`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html)
- [`ListUserTags`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html)
- [`ListVirtualMFADevices`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html)
- [`PutGroupPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html)
- [`PutRolePermissionsBoundary`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePermissionsBoundary.html)
- [`PutRolePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html)
- [`PutUserPermissionsBoundary`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPermissionsBoundary.html)
- [`PutUserPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html)
- [`RemoveClientIDFromOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveClientIDFromOpenIDConnectProvider.html)
- [`RemoveRoleFromInstanceProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html)
- [`RemoveUserFromGroup`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html)
- [`ResetServiceSpecificCredential`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html)
- [`ResyncMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResyncMFADevice.html)
- [`SetDefaultPolicyVersion`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetDefaultPolicyVersion.html)
- [`SetSecurityTokenServicePreferences`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetSecurityTokenServicePreferences.html)
- [`SimulateCustomPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html)
- [`SimulatePrincipalPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html)
- [`TagInstanceProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagInstanceProfile.html)
- [`TagMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagMFADevice.html)
- [`TagOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagOpenIDConnectProvider.html)
- [`TagPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagPolicy.html)
- [`TagRole`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html)
- [`TagSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagSAMLProvider.html)
- [`TagServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagServerCertificate.html)
- [`TagUser`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html)
- [`UntagInstanceProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagInstanceProfile.html)
- [`UntagMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagMFADevice.html)
- [`UntagOpenIDConnectProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagOpenIDConnectProvider.html)
- [`UntagPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagPolicy.html)
- [`UntagRole`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html)
- [`UntagSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagSAMLProvider.html)
- [`UntagServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagServerCertificate.html)
- [`UntagUser`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html)
- [`UpdateAccessKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html)
- [`UpdateAccountPasswordPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html)
- [`UpdateAssumeRolePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html)
- [`UpdateGroup`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html)
- [`UpdateLoginProfile`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html)
- [`UpdateOpenIDConnectProviderThumbprint`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html)
- [`UpdateRoleDescription`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html)
- [`UpdateSAMLProvider`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html)
- [`UpdateServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServerCertificate.html)
- [`UpdateServiceSpecificCredential`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServiceSpecificCredential.html)
- [`UpdateSigningCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSigningCertificate.html)
- [`UpdateSSHPublicKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSSHPublicKey.html)
- [`UpdateUser`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html)
- [`UploadServerCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html)
- [`UploadSigningCertificate`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html)
- [`UploadSSHPublicKey`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
