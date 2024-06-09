# react-providers-tree-builder 🧗‍♀️

## Introduction ⚙️

This library provides a simple and efficient way to manage multiple React providers, solving the "Provider Hell" problem by allowing you to wrap all providers into a single, manageable component. This makes your app structure cleaner and more readable.

## The Problem:

"Provider Hell" occurs when there are numerous nested providers in a React application, resulting in a cumbersome and difficult-to-maintain and read component hierarchy.

Example:

```jsx
const App = () => {
  // ... some code
  return (
    <>
      <ReduxProvider value={store}>
        <ThemeProvider value={theme}>
          <OtherProvider value={otherValue}>
            <OtherOtherProvider value={otherOtherValue}>
              {/** ... other providers*/}
              <HellProvider value={hell}>
                <HelloWorld />
              </HellProvider>
              {/** ... other providers*/}
            </OtherOtherProvider>
          </OtherProvider>
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
};
```

## How `react-providers-tree-builder` Solves It:

## Installation

To install the library, use npm or yarn:

```bash
npm install react-providers-tree-builder
```

or

```bash
yarn add react-providers-tree-builder
```

## Usage ⚡

```jsx
import { BuildProviderTree } from "react-providers-tree-builder";

const App = () => {
  const Providers = BuildProviderTree([
    { Provider: ThemeContext.Provider, props: { value: themeValue } },
    {
      Provider: AuthContext.Provider,
      props: { value: userData },
    },
    {
      //Provider without any props
      Provider: OtherContext.Provider,
    },
  ]);
  return (
    <Providers>
      <HelloWorld />
    </Providers>
  );
};

export default App;
```

## Output react tree 🙌

```jsx
<ThemeContext value={themeValue}>
  <AuthContext value={userData}>
    <OtherContext>
      <HelloWorld />
    </OtherContext>
  </AuthContext>
</ThemeContext>
```

## Contribution 🤝

We welcome contributions! Feel free to open issues or submit pull requests for any improvements.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) for details.
