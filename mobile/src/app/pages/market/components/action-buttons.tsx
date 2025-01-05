/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Alert, Modal, View } from "react-native";

import { CameraView, useCameraPermissions } from "expo-camera";
import { MapPin, QrCode } from "lucide-react-native";

import { Button } from "@/app/components/button";
import { getCouponService } from "@/services/coupon/get-coupon/get-coupon-service";
import { useMutation } from "@tanstack/react-query";

import BackButton from "./back-button";

export default function ActionButtons() {
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false);

  const [_, requestPermission] = useCameraPermissions();

  const handleBackCamera = () => {
    setIsVisibleCameraModal(false);
  };

  // eslint-disable-next-line consistent-return
  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission();

      if (!granted) {
        return Alert.alert(
          "Permissão negada",
          "Você precisa permitir o acesso à câmera para ler o QR Code",
        );
      }

      setIsVisibleCameraModal(true);
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao tentar abrir a câmera");
    }
  };

  const { mutate: getCoupon, isPending: isGettingCoupon } = useMutation({
    mutationFn: getCouponService,
  });

  return (
    <>
      <Modal className="flex-1" visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          active={isVisibleCameraModal}
          facing="back"
          onBarcodeScanned={({ data }) => console.log(data)}
        />
        <View className="absolute">
          <BackButton action={handleBackCamera} />
        </View>
      </Modal>

      <View className="flex flex-row justify-center gap-4 px-16 pt-4 pb-12 border-t border-gray-200">
        <Button.Root variant="button" className="size-16">
          <Button.Icon icon={MapPin} />
        </Button.Root>

        <Button.Root
          className="w-full"
          onPress={handleOpenCamera}
          isLoading={isGettingCoupon}
        >
          <Button.Icon icon={QrCode} size={20} />

          <Button.Title>Ler QR Code</Button.Title>
        </Button.Root>
      </View>
    </>
  );
}
