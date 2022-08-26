import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Lorem,
} from "@chakra-ui/react";
import styles from "../Styles/HomeCss/VideoModal.module.css";
// export function VideoModal() {
//   const {isOpen, onOpen, onClose} = useDisclosure();
//   return (
//     <>
//       {/* <Button onClick={onOpen}  className={styles.Play_btn} >
//         <img
//           src="https://clockify.me/assets/images/play-button.svg"
//           alt="v_play_img"
//         />
//       </Button> */}
//       <img
//         onClick={onOpen}
//         src="https://clockify.me/assets/images/play-button.svg"
//         alt="v_play_img"
//       />

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent className={styles.Container_modal}>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton>
//             <img
//               src="https://clockify.me/assets/images/close-button.svg"
//               alt="c"
//             />
//           </ModalCloseButton>
//           <ModalBody>hfdshhjdj</ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

export const VideoModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["full", "full", "full", "full", "full", "full"];

  return (
    <>
      <img
        onClick={() => handleSizeClick(size)}
        key={size}
        m={4}
        src="https://clockify.me/assets/images/play-button.svg"
        alt="v_play_img"
      />

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton>
            <img
              src="https://clockify.me/assets/images/close-button.svg"
              alt="c"
            />
          </ModalCloseButton>
          <ModalBody>kjdfjfd</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
