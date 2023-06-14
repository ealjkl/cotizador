import getLots from "@/utils/getLot";
import getSvg from "@/utils/getSvg";
import Main from "../components/Main";
import { Providers } from "../components/providers/providers";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default async function App() {
  const lotes = await getLots();
  const svgObject = await getSvg(lotes);
  return (
    <div className="App">
      <Providers>
        {/* <FloatingWhatsAppButton phoneNumber="9996586910" /> */}
        <Main svgObject={svgObject} lotes={lotes} />
      </Providers>
    </div>
  );
}
