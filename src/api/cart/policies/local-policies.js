// path: .src/api/[api-name]/policies/my-policy.js

module.exports = (policyContext, config, { strapi }) => {
  // if (policyContext.state.user === policyContext.response.body.data.user) {
  //   return true;
  // }

  // return false;
  // console.log(policyContext, config);
  return true;
};
