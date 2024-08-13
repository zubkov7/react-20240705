export const withAuthorized = (AuthorizedComponent) => {
  const Component = (props) => {
    // some logic
    const isAuthorized = true;

    if (!isAuthorized) {
      return null;
    }

    return <AuthorizedComponent {...props} />;
  };

  return Component;
};
