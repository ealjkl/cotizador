import Main from "../components/Main";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";

import Map from "../components/Example";
import PannerAndZoomerWrapper from "@/components/PannerAndZoomerWrapper";
import ExampleZoomerPanner from "@/components/ExampleZoomerPanner";

export default function App() {
  return (
    <div className="App">
      <Main />
      {/* <FloatingWhatsAppButton phoneNumber="9996586910" /> */}
      {/* <Map height={400} width={400} /> */}
      <ExampleZoomerPanner />
    </div>
  );
}
