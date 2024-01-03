import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { useContext } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ToastAdmin from "./ToastAdmin";
import ToggleButton from "../../../resusable-ui/ToggleButton";
import OrderContext from "../../../../context/OrderContext";


export default function NavbarRightSide() {

  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)

  const notify = () => {

    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
      // icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin"
        onToggle={notify}
        isChecked={isModeAdmin}
      />
      <ToastAdmin />
      <Profile />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`

  display: flex;
  align-items: center;
  padding-right: 50px;

`;
