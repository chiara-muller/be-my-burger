import styled from "styled-components";

export default function AddProductForm() {
  return (
    <AddProductFormStyled action="submit">
      <div className="image-and-form">
        <div className="image-container">
          <img src="aucune image" alt="image preview" />
        </div>
        <div className="form-container">
          <input type="text" placeholder="Nom du produit (ex: Super Burger)"/>
          <input type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"/>
          <input type="text" placeholder="Prix"/>
        </div>
      </div>
      <div className="button-container">
        <button>Ajouter un nouveau produit au menu</button>
      </div>
    </AddProductFormStyled>
  )
}

const AddProductFormStyled = styled.form`

  width: 880px;
  height: 160px;
  border: 2px solid green;
  padding-top: 30px;
  padding-left: 70px;

  .image-and-form {
    display: flex;
    border: 2px solid pink;

      .image-container {
        width: 215px;
        height: 120px;
        border: 1px solid black;
        border-radius: 5px;
      }

      .form-container {
        display: flex;
        flex-direction: column;
        border: 2px solid blue;
        width: 100%;
      }
  }


  .button-container {
    border: 2px solid brown;
  }
`;
