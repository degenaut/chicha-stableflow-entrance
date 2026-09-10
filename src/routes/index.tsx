import { createFileRoute } from "@tanstack/react-router";
import { ChiChaLanding } from "@/components/chicha-landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChiCha | Supported Stablecoin Payments" },
      {
        name: "description",
        content:
          "ChiCha provides wallet-native infrastructure for supported stablecoin payment activity.",
      },
      { property: "og:title", content: "ChiCha | Supported Stablecoin Payments" },
      {
        property: "og:description",
        content:
          "Pay, get paid, and manage supported stablecoin payment activity through non-custodial wallet flows.",
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
