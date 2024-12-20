import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

import CribIcon from "@mui/icons-material/Crib";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import { useAppContext } from "../../Context";
import { useNavigate } from "react-router-dom";

const CustomList = ({ items, ...props }) => {
  const navigate = useNavigate();
  const { translate } = useAppContext();

  const typesString = { 1: "sleep", 2: "eat", 3: "diaper" };
  const typesColor = { 1: "#60c1fc", 2: "#33ff7d", 3: "#ffff33" };

  const chooseIcon = (action_type) => {
    switch (action_type) {
      case 1:
        return <CribIcon />;
      case 2:
        return <RestaurantIcon />;
      default:
        return <BabyChangingStationIcon />;
    }
  };

  const subtitleSleep = (item) => {
    return "O bebê está dormindo.";
  };
  const subtitleEat = (item) => {
    return "O bebê está comendo.";
  };
  const subtitleDiaper = (item) => {
    return "O bebê está trocando a fralda.";
  };

  const generateSubtitle = (item, translate) => {
    switch (item.action_type) {
      case 1:
        return subtitleSleep(item);
      case 2:
        return subtitleEat(item);
      case 3:
        return subtitleDiaper(item);
      default:
        return subtitleSleep(item);
    }
  };

  return (
    <List {...props}>
      {items.map((item, index) => {
        const typeStr = typesString[item.action_type];

        return (
          <ListItem
            key={index}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "60px",
              marginTop: "1em",
              height: "3em",
            }}
            id={`new-item-list-${index}`}
            onClick={() => navigate(`/${item.action_type}/${item.id}`)}
          >
            <ListItemAvatar>
              <Avatar
                sx={{
                  bgcolor: typesColor[item.action_type],
                  height: "35px",
                  width: "35px",
                }}
              >
                {chooseIcon(item.action_type)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={translate(typeStr)}
              secondary={generateSubtitle(item, translate)}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default CustomList;
