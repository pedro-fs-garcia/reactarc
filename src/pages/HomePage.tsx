import ThemesDemo from "@/components/ui/demos/ThemesDemo";
import Hero from "@/components/layout/Hero";
import LoadersDemo from "@/components/loaders/LoadersDemo";
import UIDemo from "@/components/ui/demos/UIDemo";
import AlertsDemo from "@/components/ui/alerts/AlertsDemo";
import BadgesDemo from "@/components/ui/badges/BadgesDemo";
import ButtonsDemo from "@/components/ui/buttons/ButtonsDemo";
import WhatsappButton from "@/components/ui/buttons/WhatsappButton";
import InputDemo from "@/components/ui/inputs/InputDemo";
import ModalDemo from "@/components/ui/modals/ModalDemo";
import TabsDemo from "@/components/ui/tabs/TabsDemo";
import TextsDemo from "@/components/ui/texts/TextsDemo";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Header institucional */}
      <Hero></Hero>
      <div className="max-w-7xl mx-auto px-6 pt-24" id="themes" >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Available Themes</h2>
          <p className="text-secondary text-lg">Choose from carefully crafted color schemes</p>
        </div>
      </div>
      <ThemesDemo></ThemesDemo>
      <div className="max-w-7xl mx-auto px-6 pt-24" id="ui-components">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">UI Components</h2>
          <p className="text-secondary text-lg">Reusable and customizable components to accelerate development</p>
        </div>
      </div>
        <TextsDemo></TextsDemo>
        <TabsDemo></TabsDemo>
        <ModalDemo></ModalDemo>
        <AlertsDemo></AlertsDemo>
        <BadgesDemo></BadgesDemo>
        <ButtonsDemo></ButtonsDemo>
        <InputDemo></InputDemo>
        <UIDemo></UIDemo>
        <LoadersDemo/>
        {/* Botão flutuante do WhatsApp */}
        <WhatsappButton />
      </div>
      );
}