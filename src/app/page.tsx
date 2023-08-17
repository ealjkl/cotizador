import getLots from "@/utils/getLot";
import getSvg from "@/utils/getSvg";
import Main from "../components/Main";
import { Providers } from "../components/providers/providers";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import getPrices from "@/utils/getPrices";
config.autoAddCss = false;

export default async function App() {
  const lotes = await getLots();
  const prices = (await getPrices())!;
  // const svgObject = await getSvg(lotes);
  return (
    <div className="App">
      <Providers>
        {/* <FloatingWhatsAppButton phoneNumber="9996586910" /> */}
        <Main
          // svgObject={svgObject}
          prices={prices}
          lotes={lotes}
        />
      </Providers>
    </div>
  );
}
