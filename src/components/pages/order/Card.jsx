import styled from "styled-components";
import { fakeMenu2 } from "../../fakeMenu";
import PrimaryButton from "../../resusable-ui/PrimaryButton"

export default function Card() {

  return (
    <CardStyled>
      {fakeMenu2.map((menu) => {
        return (
          <div key={menu.id} className="cards">
            <img src={menu.imageSource} alt="menu image"/>
            <h4 key={menu.id} className="item-name">{menu.title}</h4>
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

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  grid-auto-rows: minmax(100px, auto);


  .cards {

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 240px;
    height: 330px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

    img {
      grid-row: 2/4;
      max-width: 200px;
      max-height: 140px;;
      padding-top: 40px;
    }

    .item-name {
      grid-row: 3;
      font-family: "Amatic SC", cursive;
      text-align: left;
      font-size: 28px;
    }

    .bottom-card {
      grid-row: 4;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }


`;
