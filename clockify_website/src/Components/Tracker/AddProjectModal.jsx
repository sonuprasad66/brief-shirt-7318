import React from "react";
import styles from "../Styles/TrackerCss/DisplayBox.module.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Input,
} from "@chakra-ui/react";

export const AddProjectModal = ({setText, text}) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className={styles.DisplayBox_project}>
            <img
              src="https://app.clockify.me/assets/ui-icons/plus-blue.svg"
              alt="p"
            />
            <span className={styles.DisplayBox_project_span}>Project</span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          {/* <PopoverCloseButton /> */}
          <PopoverHeader>
            <Input
              value={text.project}
              onChange={(e) => setText({...text, project: e.target.value})}
              htmlSize={29}
              width="auto"
              placeholder="Find Project and Clint"
            />
          </PopoverHeader>
          <PopoverBody>
            <div></div>
            <div>Create New Project</div>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};
