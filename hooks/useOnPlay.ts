import { Content } from "@/types";

import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (contents: Content[]) => {
  const player = usePlayer();
  
  const authModal = useAuthModal();
  const { subscription, user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }


    player.setId(id);
    player.setIds(contents.map((content) => content.id));
  }

  return onPlay;
};

export default useOnPlay;
