import styled from "styled-components";
import { fakeMenu1 } from "../../fakeMenu";
import PrimaryButton from "../../resusable-ui/PrimaryButton"

export default function Card() {

  return (
    <CardStyled>
      {fakeMenu1.map((menu) => {
        return (
          <div key={menu.id} className="cards">
            <img src={menu.imageSource} alt="menu image"/>
            <h4 key={menu.id}>{menu.title}</h4>
            <div className="bottom-card">
              <p>{menu.price}</p>
              <PrimaryButton label={"Ajouter"}/>
            </div>
          </div>
          )
      })}
    </CardStyled>
    )
  }

const CardStyled = styled.div`

  display: flex;

  .cards {
    background-color: red;
    width: 240px;
    height: 330px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

    img {
      width: 50%;
    }

    .bottom-card {
      display: flex;
      justify-content: space-between;

    }
  }


`;
