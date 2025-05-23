import React from "react";
import InvigilatorCard from "./InvigilatorCard";
import { useInvigilators } from "@/contexts/InvigilatorContext";
import type { ToastType } from "@/components/ui/useToast";

interface InvigilatorListProps {
  searchTerm: string;
  onEdit: (invigilator: any) => void;
  onOpenEditModal: () => void;
  onShowToast: (type: ToastType, message: string, subtext?: string) => void;
  onDelete: (id: string) => void; // <-- Add this line
}

export default function InvigilatorList({
  searchTerm,
  onEdit,
  onOpenEditModal,
  onShowToast,
  onDelete, // <-- Add this line
}: InvigilatorListProps) {
  const { invigilators } = useInvigilators();

  const filtered = searchTerm
    ? invigilators.filter(
        (inv) =>
          `${inv.title ?? ""} ${inv.firstName ?? ""} ${inv.lastName ?? ""}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          inv.id?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : invigilators;

  return (
    <>
      {filtered.map((invigilator) => (
        <InvigilatorCard
          key={invigilator.id}
          invigilator={invigilator}
          onEdit={() => {
            onEdit(invigilator);
            onOpenEditModal();
          }}
          onShowToast={onShowToast}
          onDelete={() => onDelete(invigilator.id)} // <-- Pass handler here
        />
      ))}
    </>
  );
}