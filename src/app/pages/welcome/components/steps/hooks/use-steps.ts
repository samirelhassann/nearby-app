import { MapPin, QrCode, TicketIcon } from "lucide-react-native";

import { BulletInfo } from "../types/bullet-info";

interface useStepsOutputProps {
  stepInfos: BulletInfo[];
}

export default function useSteps(): useStepsOutputProps {
  const stepInfos: BulletInfo[] = [
    {
      title: "Encontre estabelecimentos",
      description: "Veja locais perto de você que são parceiros Nearby",
      Icon: MapPin,
    },
    {
      title: "Ative o cupom com QR Code",
      description: "Escaneie o código no estabelecimento para usar o benefício",
      Icon: QrCode,
    },
    {
      title: "Garanta vantagens perto de você",
      description:
        "Ative cupons onde estiver, em diferentes tipos de estabelecimento ",
      Icon: TicketIcon,
    },
  ];

  return { stepInfos };
}
