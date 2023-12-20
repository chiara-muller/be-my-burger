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
            <div className="bottom-card">
              <h4 key={menu.id} className="item-name">{menu.title}</h4>
              <div className="pay-container">
                <p>{menu.price}</p>
                <PrimaryButton label={"Ajouter"}/>
              </div>
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
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
    width: 240px;
    height: 330px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

    img {
      margin: auto;
      padding-top: 20px;
      max-width: 200px;
      max-height: 140px;;
    }

    .bottom-card {
      display: flex;
      flex-direction: column;
      margin: 10px;

      .item-name {
        margin: 0;
        font-family: "Amatic SC", cursive;
        text-align: left;
        font-size: 28px;
      }

      .pay-container {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

  }


`;
