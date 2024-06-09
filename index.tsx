import React from "react";

interface ProviderProps {
  Provider: any;
  props?: Record<string, unknown>;
}

interface ProviderTreeProps {
  children: React.ReactNode;
}

/**
 * The function `BuildProviderTree` takes an array of provider components and returns a higher-order
 * component that wraps each provider around the previous one in reverse order.
 * @param {ProviderProps[]} providers - The `providers` parameter is an array of objects with the following structure:
 * @param {any} providers[].Provider - The `Provider` property is a React component or any Provider component.
 * @param {Record<string, unknown>} providers[].props -props(optional) as per the provider.
 * @returns - This function returns a higher-order component that creates a provider tree based on the
 * array of provider components passed as an argument.
 */

export function BuildProviderTree(providers: ProviderProps[]) {
  return providers.reduceRight(
    (
      acc: ({ children }: ProviderTreeProps) => React.ReactNode,
      { Provider, props = {} }
    ) => {
      return ({ children }) => (
        <Provider {...props}>{acc({ children })}</Provider>
      );
    },
    ({ children }: ProviderTreeProps) => children
  );
}
