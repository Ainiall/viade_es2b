/* eslint-disable constructor-super */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import { FriendsWrapper, FriendsCard} from "./friends.style";
import { Grid} from "@material-ui/core";
import {List} from "@solid/react";
import { Button } from "@material-ui/core";
import ModalGroupForm from "./components/ModalGroupForm/ModalGroupForm.component";
import gestorPOD from "../../services/persistanceManagement";
import FriendItem from "./components/FriendItem";
import GroupFriendItem from "./components/GroupFriendItem";

/**
 * A React component page that is displayed when the user wants to check his/her friends list and each 
 * friend"s routes.
 */
const Friends = (props) => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [groups, setGroups] = useState([]);

  const showModalForm = (x) => {
    setModal(true);
  }

  const close = () => {
    setModal(false);
  };

  useEffect(() => {
    async function getGroups() {
      const groups = await gestorPOD.seeGroups();
      setGroups(groups);
    }
    getGroups();
  }, []);

  return (
    <FriendsWrapper>
      <Grid container spacing={6}>
        {/*Friends section*/}
        <Grid item xs={12} md={6}>
          <h3 name="friends">{t("friends.title")}</h3>
          <FriendsCard className="friends-list">
            <List src ="user.friends">
            {(friend)=> 
              <FriendItem className="friend-item" friendID={friend.value}/>
            }
            </List>
          </FriendsCard>
        </Grid>
        {/*Groups section*/}
        <Grid item xs={12} md={6}>
        <h3 name="groups">{t("groups.title")}</h3>
        <FriendsCard className="groups-list">
          {Array.from(groups).map((group) => 
            <div>
              <h4 id={group.name} >{group.name}</h4>
              <List src ="user.friends">
                {(friend)=> 
                  <GroupFriendItem friendID={friend.value} group={group}/>
                }
              </List>
            </div>
          )}
          <Button name="group_button" onClick={ (e) => {showModalForm();}} variant="contained" color="primary">{t("friends.createGroup")}</Button>
        </FriendsCard>
        <ModalGroupForm show={modal} closingFunction={close}></ModalGroupForm>
        </Grid>
      </Grid>
    </FriendsWrapper>
  );
};

export default Friends;
