import URLS from "../../Config/urls";
import APP_ASSETS from "../../Config/assets";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-0 right-0">
      <button
        className="bottom-0 my-8 float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded-l-full focus:outline-none"
        onClick={() => window.open(URLS.WHATSAPP, "_blank")}
      >
        <img src={APP_ASSETS.LOGO_WHATSAPP} alt="Whatsapp" height={90} />
      </button>
    </div>
  );
};

export default WhatsappButton;
