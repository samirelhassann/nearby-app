import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

import { Button } from "@/app/components/button";

interface BackButtonProps {
  action?: () => void;
}

export default function BackButton({ action }: BackButtonProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button.Root
      className="absolute top-16 left-10"
      variant="button"
      onPress={action ?? handleGoBack}
    >
      <Button.Icon icon={ArrowLeft} />
    </Button.Root>
  );
}
