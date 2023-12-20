import styled from "styled-components";
import { fakeMenu2 } from "../../fakeMenu";
import PrimaryButton from "../../resusable-ui/PrimaryButton"
import { formatPrice } from "../../utils/maths";
import { theme } from "../../../theme";

export default function Card() {

  return (
    <CardStyled>
      {fakeMenu2.map((menu) => {

        const price = menu.price

        function Title() {

          const title = menu.title
          const titleSplit = title.split("").length

          if (titleSplit > 14) {
            const titleSliced = title.slice(0,14);
            return `${titleSliced}...`
          }
          return title
        }

        return (
          <div key={menu.id} className="cards">
            <img src={menu.imageSource} alt="menu image"/>
            <div className="bottom-card">
              <h4 key={menu.id} className="item-name"><Title /></h4>
              <div className="pay-container">
                <p>{formatPrice(price)}</p>
                <PrimaryButton label={"Ajouter"} className={"button-add"}/>
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
  grid-gap: ${theme.gridUnit * 5}px;
  grid-auto-rows: minmax(100px, auto);


  .cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 240px;
    height: 330px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};

    img {
      margin: auto;
      margin-top: 40px;
      max-width: 200px;
      max-height: 140px;;
    }

    .bottom-card {
      display: flex;
      flex-direction: column;
      margin: 0 25px 25px 25px;

      .item-name {
        margin: 0;
        font-family: "Amatic SC", cursive;
        font-weight: ${theme.fonts.weights.regular};
        text-align: left;
        font-size: ${theme.fonts.size.P4};
      }

      .pay-container {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${theme.colors.primary_burger}
      }

      .button-add {
        padding: 10px 18px;
        margin: 10px 0;
        font-weight: ${theme.fonts.weights.light};
      }
    }

  }


`;
