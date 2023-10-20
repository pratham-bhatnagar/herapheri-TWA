import { WagmiConfig, createConfig, useAccount } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import MyComponent from "./text";

const config = createConfig(
  getDefaultConfig({
    walletConnectProjectId: "e7b53371d64a322ae6d669190b6e2fed",

    // Required
    appName: "TWA",
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

function App() {

  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <ConnectKitButton />
        <MyComponent/>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
