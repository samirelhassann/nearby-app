import { ComponentType } from "react";

import { LucideProps } from "lucide-react-native";

export interface BulletInfo {
  title: string;
  description: string;
  Icon: ComponentType<LucideProps>;
}
