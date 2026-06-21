import { PopupModal } from "react-calendly";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

export function BookDemoModal({ onClose }: Props) {
  const [open] = useState(true);

  return (
    <PopupModal
      url="https://calendly.com/moizahmad9276/30min"
      onModalClose={onClose}
      open={open}
      rootElement={document.getElementById("root")!}
    />
  );
}
