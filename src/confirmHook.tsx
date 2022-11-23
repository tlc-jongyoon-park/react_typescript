import { atom, useAtom, useSetAtom } from "jotai";

const confirmMessageAtom = atom<String>("");

export default function useConfirm() {
  const [getConfirm] = useAtom(confirmMessageAtom);
  const setConfirmMessage = useSetAtom(confirmMessageAtom);
  const open = () => {
    setConfirmMessage("hello");
  };

  const confirmAction = {
    open
  };
  return {
    getConfirm,
    confirmAction
  };
}
