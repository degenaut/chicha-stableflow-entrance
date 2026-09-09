import { createFileRoute } from "@tanstack/react-router";
import { ChiChaLanding } from "@/components/chicha-landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChiCha | Stablecoin Payment Infrastructure" },
      {
        name: "description",
        content: "ChiCha connects users, merchants, and partners through supported stablecoin payment activity.",
      },
      { property: "og:title", content: "ChiCha | Stablecoin Payment Infrastructure" },
      {
        property: "og:description",
        content: "Web3 payment infrastructure for supported stablecoin payments and wallet-native activity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <ChiChaLanding />;
}
