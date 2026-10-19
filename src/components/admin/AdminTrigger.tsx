/**
 * Hidden entry point to admin mode. Pressing Option (Alt) twice in quick
 * succession, with no other key in between, opens the admin modal.
 */
"use client";

import { useCallback, useEffect, useState } from "react";
import AdminPanel from "@/components/admin/AdminPanel";
import Modal from "@/components/Modal";

const DOUBLE_TAP_MS = 400;

/**
 * Listens for the double tap and renders the admin modal.
 *
 * @returns the admin modal (hidden until triggered)
 */
export default function AdminTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    let lastTapAt = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Alt") {
        lastTapAt = 0;
        return;
      }
      if (event.repeat) {
        return;
      }
      const now = Date.now();
      if (now - lastTapAt < DOUBLE_TAP_MS) {
        lastTapAt = 0;
        setIsOpen(true);
      } else {
        lastTapAt = now;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={close} label="Admin">
      <AdminPanel />
    </Modal>
  );
}
