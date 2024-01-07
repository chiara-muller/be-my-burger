import React from "react";

// eslint-disable-next-line react/display-name
const EditProductForm = React.forwardRef(({ placeholder }, ref) => {
  return (
    // <div>Cliquer sur un produit du menu pour le modifier</div>
    <form>
      <label htmlFor="input-title"></label>
      <input ref={ref} type="text" name="input-title" placeholder={placeholder}/>
    </form>
  )
});

export default EditProductForm

// const TextInput = React.forwardRef(({ placeholder }, ref) => {
//   return (
//     <div>
//       <label htmlFor="input-composant">TextInput</label>
//       <input
//         ref={ref}
//         type="text"
//         name="input-composant"
//         placeholder={placeholder}
//       />
//     </div>
//   );
// });

// export default TextInput;
