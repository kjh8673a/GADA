import { useNavigate } from "react-router-dom";

export const useForwarding = () => {
  const navigate = useNavigate();
  const moveToGuildPage = (worldName: string = "", guildName: string = "") => {
    if (!worldName || !guildName) return;

    navigate(`/Search/Guild/${worldName}/${guildName}`);
  };

  return { moveToGuildPage };
};

