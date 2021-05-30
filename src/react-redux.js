import React, { useContext } from "react";

const context = React.createContext();

export const Provider = ({ store, children }) => {
  return <context.Provider value={store}>{children}</context.Provider>;
};

export const connect = (
  mapStateToProps = () => ({}),
  mapDispatchToProps = () => ({})
) => (Component) => (props = {}) => {
  const { store } = useContext(context);

  return (
    <Component
      {...props}
      {...mapStateToProps(store.getState(), props)}
      {...mapDispatchToProps(store.dispatch, props)}
    />
  );
};
