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
import CopyText from "@/components/ui/texts/CopyText";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { ArrowRight } from "lucide-react";
import MaterialUIDemo from "@/components/ui/demos/MaterialUIDemo";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Header institucional */}
      <Hero></Hero>
      <div className="max-w-7xl mx-auto px-6" id="how-to-use" >
        <div className="space-y-12 text-center pt-24 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Start using</h2>
          <div>
            <p className="text-secondary text-lg mb-4">Clone the repository and start building.</p>
            <CopyText text={"git clone https://github.com/pedro-fs-garcia/reactarc.git your-project"}></CopyText>
          </div>
          <a href="/practical_examples">
            <BaseButton
              variant="outline"
              rightIcon={<ArrowRight size={20} />}
            >
              Practical Examples
            </BaseButton>
          </a>
        </div>
      </div>
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
      <LoadersDemo />
      
      {/* Material UI Demo */}
      <MaterialUIDemo />
      
      {/* Botão flutuante do WhatsApp */}
      <WhatsappButton />
    </div>
  );
}