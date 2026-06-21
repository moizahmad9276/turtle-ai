import { createContext, useContext, useState, ReactNode } from "react";
import { BookDemoModal } from "../components/modals/BookDemoModal";

const BookDemoContext = createContext<{ openBookDemo: () => void }>({
  openBookDemo: () => {},
});

export function BookDemoProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <BookDemoContext.Provider value={{ openBookDemo: () => setOpen(true) }}>
      {children}
      {open && <BookDemoModal onClose={() => setOpen(false)} />}
    </BookDemoContext.Provider>
  );
}

export function useBookDemo() {
  return useContext(BookDemoContext);
}
